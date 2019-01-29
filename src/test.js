const fetch = require('fetch')

fetch.fetchUrl('http://localhost:3030/api/user',function(err,meta,body){
    console.log(body.toString());
})

var appId = "app";
var main = document.createElement("DIV");
main.id = appId;
document.body.appendChild(main);

var app = document.getElementById('app');

var Hour = React.createClass({
  
  getDefaultProps: function() {
    return {
      time: 42
    }
  },
  
  render: function() {
    return (<p>{this.props.time} h</p>);
  }
})

var Creator = React.createClass({
  
  getDefaultProps: function() {
    return {
      name: "Mark Zuckerberg"
    }
  },
  
  render: function() {
    return (
      <div className="creator">
        <img />
        <div>
          <p>{this.props.name}</p>
          <Hour time={4} />
        </div>
      </div>
    )
  }
});

var Message = React.createClass({
  render: function() {
    return (
      <p className="message">Omg it's snowing outside!</p>
    )
  }
});

var Action = React.createClass({
  render: function() {
    return (
      <p className="action-button" >{this.props.text}</p>
    );
  }
})

var Bar = React.createClass({
  render: function() {
    return (
      <div className="bar">
        <Action text={"Like!"} />
        <Action text={"Comment"} />
        <Action text={"Share"} />
      </div>
    )
  }
});

var Comment = React.createClass({
  getDefaultProps: function() {
    return{name: "Douglas Adams"}
  },
  render: function() {
    return (
      <div className="single-comment">
        <img />
        <div className="single-container">
          <span>{this.props.name}</span>
          <span>{this.props.children}</span>
        </div>
        <div className="buttons">
          <Action text="Like!" />
          <Action text="Respond" />
          <Hour time={this.props.time} />
        </div>
      </div>
    );
  }
});

var CommentSection = React.createClass({
  
  getInitialState: function() {
    return {
      comments: []
    }
  },
  
  _eachComment: function(text, i) {
    return (<Comment key={i} index={i} removeComment={this._deleteComment}>{text}</Comment>)
  },
  
  _addComment: function(text) {
    var arr = this.state.comments
    arr.push(text);
    this.setState({comments: arr})
  },
  
  _handleKeyPress: function(e) {
    if (e.key === "Enter") {
      this._addComment(this.refs.newText.value);
      this.refs.newText.value = "";
      e.preventDefault();
    }
  },
  
  render: function() {
    return (
      <div>
        <div className="comment-section">
          <Comment name={"Bruce Wayne"} time={3}>Mark, we have windows...</Comment>
          <Comment name={"Mark Zuckerberg"} time={2}>Shut up Bruce</Comment>
          {this.state.comments.map(this._eachComment)}
        </div>
        <div className="input">
          <img />
          <textarea ref="newText" onKeyPress={this._handleKeyPress} placeholder="Write a comment..."/>
        </div>
      </div>
    );
  }
});

var Post = (
  <div>
    <Creator />
    <Message />
    <Bar />
    <CommentSection />
  </div>
);

ReactDOM.render(Post, app);

// Normal js
var textarea = document.getElementsByTagName('textarea')[0];

textarea.onkeyup = function() {
  textarea.style.height = "34px";
  textarea.style.height = (textarea.scrollHeight) + "px";
}

/*  */
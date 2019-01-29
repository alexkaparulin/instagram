import React,{Component} from 'react'
import styled from 'styled-components'
import TodoList from '../component/TodoList'

class TodoApp extends Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <Div>
          <TodoList items={this.state.items} />
          <Form onSubmit={this.handleSubmit}>
            <Input
              onChange={this.handleChange}
              value={this.state.text}
              placeholder="Add a comment..."
              ></Input>
          </Form>
        </Div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        // id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  export default TodoApp
  
  const Div = styled.div`
    @media (min-width: 40em) {
       overflow-y:scroll;
       margin-top:-0.2em;
     }
`
  const Form = styled.form`
  `
  const Input = styled.input`
    outline:none;
    border:none; 
    width:100%;
    position:relative;
    bottom:0em;
`
import React,{Component} from 'react'
import styled from 'styled-components'

import dots from '../media/dots.png'
import TodoApp from './TodoApp';

class Post extends Component{
    constructor(props){
        super(props);
        this.state = {
           likes: 0,
           items:[],
           text:''
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    pictureLiked(){
        const likeImage = document.querySelector('.like2') ;
        let addedLiked = this.state.likes + 1;
        if(addedLiked===1){
            this.setState({likes:addedLiked});
            likeImage.style.color = 'red';
        }
        else{
            let removeLiked = this.state.likes - 1;
            this.setState({likes:removeLiked});      
            likeImage.style.color = 'black';

        }
}
    // eachComment=(text, i) =>(
    //     <Postedcomment key={i} index={i}>{text}</Postedcomment>
    //   )
    // onChange=(e)=>{
    //     this.setState({comments: e.target.value});
    //     // console.log(this.state)
    // }
    // addComment(text){
    //     // this.state.comments.push(text)
    //     // arr.push(text);
    //     this.setState({comments: text})
    //     // console.log(this.state)
    //   }
      keyPress=(e)=>{
        if (e.key === "Enter") {
            this.addComment(e.target.value);
            e.preventDefault();
            console.log(this.state)
            
        }
    }
    render(){
        return(
        <CBox>
            <BoxTop>
                <UserBox>
                    <Img src={this.props.userphoto}></Img>
                    <IdUser>{this.props.id}</IdUser>
                </UserBox>
                <Dots src={dots}></Dots>
            </BoxTop>
            <PostedBox>
                <PostImg src={this.props.src} onClick={()=> this.pictureLiked()}></PostImg>
            </PostedBox>
            <BottomPost>
                <BoBoxLeft>
                <i className="far fa-heart like2"  onClick={()=> this.pictureLiked()}></i>
                <i className="far fa-comment"></i>
                <i className="far fa-share-square"></i>
                </BoBoxLeft>
                <i className="fas fa-tag"></i>  
            </BottomPost>
            <Comment>
                <Likes>{this.state.likes}likes</Likes>
                <UserName>      
                    <Id><strong>{this.props.username}</strong> {this.props.title}</Id>
                </UserName>
            <TodoApp/>
             </Comment>
            <Time>{this.props.time}</Time>
        </CBox>
        )
    }
}
export default Post

const CBox = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:0.2em;
    background:#fff;
    /* height:100%; */
 
    @media (min-width: 40em) {
         margin:2em 0;
         border:0.1em solid lightgray;
         height:35em;
         width:38em;
         border-radius:.2em;
     }

`
const UserBox = styled.div`
    height:4em;
    display:flex;
    align-items:center;
    
`
const Img = styled.img`
    border-top:0.1em solid #b266b2;
    border-right:0.1em solid  #a64ca6;
    border-bottom:0.1em solid #ffd27f;
    border-left:0.1em solid #ffae19;
    height:2em;
    width:2em;
    border-radius:100%;
    margin:0 0.6em; 
`
const IdUser = styled.p`
    font-size:0.8em;
    font-weight:600;
`
const PostedBox = styled.div`
    height:24em;
    @media (min-width: 40em) {
        height: 24em;
      }

`
const PostImg = styled.img`
    height:100%;
    width:100%;
`
const Dots = styled.img`
    height:1.75em;
    width:1.75em;
    margin-right:1em;
`
const BottomPost = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`
const Time = styled.p`
    font-size:0.55em;
    margin-left:0.5em;
    /* margin-top:em; */
    font-weight:400;
    color:gray;
`
const BoxTop = styled.div`
      display:flex;
      justify-content:space-between;
      align-items:center;
`
const BoBoxLeft = styled.div`
      display:flex;
      align-items:center;
      padding-top:0.1em;
`
const Comment = styled.div`
    display:flex;
    flex-direction:column;
    padding-left:0.25em;
`
const Likes =styled.p`
    font-weight: 600;
    font-size:0.65em;
` 
const UserName =styled.div`
    display:flex;
    flex-direction:column;
`   
const Id= styled(Likes)`
    margin-top:-.7em;
`
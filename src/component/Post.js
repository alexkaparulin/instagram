import React,{Component} from 'react'
import styled from 'styled-components'

import dots from '../media/dots.png'


class Post extends Component{
    state={
        likes:"0"
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
                <PostImg src={this.props.src}></PostImg>
            </PostedBox>
            <BottomPost>
                <BoBoxLeft>
                <i className="far fa-heart"></i>
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
             </Comment>
            <Time>{this.props.time}</Time>
            <Input placeholder="Add a comment..."></Input>
        </CBox>
        )
    }
}
export default Post

const CBox = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:0.2em;
    @media (min-width: 40em) {
         margin:2em 5em;
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
    @media (min-width: 42.5em) {
        height: 32em;
      }
      @media (mim-width: 48em) {
        height: 42em;
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
    margin-top:-0.3em;
    font-weight:100;
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
    flex-direction:row;
`   
const Id= styled(Likes)`
    margin-top:-.7em;
`
const Input = styled.input`
    border-left:none;
    border-right:none;
    border-top:none;
    padding:0.4em ;
    font-size:0.7em;
    outline:none;
    color:gray;
`

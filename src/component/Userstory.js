import React,{Component} from 'react'
// import styled from 'styled-components'
import styled ,{keyframes}from 'styled-components'


class Userstory extends Component{
    
    render(){
        return(
            <ImgBox>
                    <Imgborder>
                    <Img src={this.props.src}></Img>
                    </Imgborder>
                    <ImgId>{this.props.username}</ImgId>
            </ImgBox>      
        )
    }
}
export default Userstory

const ImgBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding-top:0.4em;
`
const rotate= keyframes`
    0% {
        transform: scale(1);
    }
    50%{
        transform: scale(1.07);
    }
    100% {
        transform: scale(1);
    }
`
const Img = styled.img`
    height:100%;
    width:100%;
    border-radius:100%;
    /* border-top:0.15em solid #b266b2;
    border-right:0.15em solid  #a64ca6;
    border-bottom:0.15em solid #ffd27f;
    border-left:0.15em solid #ffae19; */
    /* box-shadow: 0 0 0.2em #000; */
    /* border-radius:100%; */
    /* padding:0.12em;
    height:3.5em;
    width:3.5em;
    margin:0.03em 0.45em;
    background:white; */
    animation:none;
`
const Imgborder = styled.div`
    border:.1em solid black;
    border-radius:100%;
    padding:0.12em;
    height:3.5em;
    width:3.5em;
    margin:0.03em 0.45em;
    background:white;
    border-top:0.15em solid #b266b2;
    border-right:0.15em solid  #a64ca6;
    border-bottom:0.15em solid #ffd27f;
    border-left:0.15em solid #ffae19;
    box-shadow: 0 0 0.2em #000;
    &:hover ${Img} {
        animation: ${rotate} 1s linear infinite;
  }
`    
const ImgId = styled.p`
    margin-top:0.4em;
    font-size:0.7em;
    font-weight:400;
    color:black;
`
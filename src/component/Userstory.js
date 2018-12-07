import React,{Component} from 'react'
import styled from 'styled-components'


class Userstory extends Component{
    render(){
        return(
            <ImgBox>
                    <Img src={this.props.src}></Img>
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
const Img = styled.img`
    border-top:0.15em solid #b266b2;
    border-right:0.15em solid  #a64ca6;
    border-bottom:0.15em solid #ffd27f;
    border-left:0.15em solid #ffae19;
    box-shadow: 0 0 0.2em #000;
    border-radius:100%;
    padding:0.12em;
    height:3.5em;
    width:3.5em;
    margin:0.03em 0.45em;
    background:white;
`
const ImgId = styled.p`
    margin-top:0.4em;
    font-size:0.7em;
    font-weight:400;
`
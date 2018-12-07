import React,{Component} from 'react';
import styled from 'styled-components';

class Sliderimg extends Component{
  
    render(){
        return(
            <ImageDiv>
                <Img src={this.props.src} alt=""></Img>
                <P>{this.props.title}</P>
            </ImageDiv>
        )
    }
}
export default Sliderimg


const ImageDiv = styled.div`
     display:flex;
     flex-direction:column;
`

const P =styled.p`
    margin-top:-2em;
    margin-left:2.5em;
    color: #fff;
    font-weight:500;
    font-size:0.9em;
  `
const Img = styled.img` 
    display: inline-block;
    width: 7em;
    height: 4.8em;
    border-radius:.4em;
    box-shadow: 0 0 0.2em #000;
    margin: 0 0.2em;
  `
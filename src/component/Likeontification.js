import React,{Component} from 'react';
import styled from 'styled-components';

// import photoLiked from '../media/FrontInstaExamaple1.jpg'
import Id from '../media/FrontInstaExamaple2.jpg'
import Marsh from '../media/Marsh.jpg'

class Likenotification extends Component{
    render(){
        return(
            <PhotoLikes>
                <LBox>
                        <ImgUser src={Id}></ImgUser>
                    <Text>
                        <IdName>{this.props.user}</IdName>liked your photo.
                        <Time>{this.props.time}</Time>
                    </Text>
                </LBox>
                        <ImgLiked src={Marsh} ></ImgLiked>
          </PhotoLikes>
        )
    }
}

export default Likenotification;

const PhotoLikes = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    height:3.5em;
    border-bottom:0.01em solid lightgray;
    @media (min-width: 42.5em) {
        margin:0 6em
       }
    @media (min-width: 48em) {
        margin:0 10em
       }
       @media (min-width: 76.8em) {
        margin:0 22em
       }
      @media (min-width: 102.4em) {  
        margin: 0 25em;
      }
`
const Text = styled.p`
    font-size:0.75em;
    @media (min-width: 42.5em) {
        font-size:1.2em;
      }
` 
const ImgLiked = styled.img`
    height:2.5em;
    width:2.5em;  
`
const ImgUser = styled.img`
    height:2em;
    width:2em;
    border-radius:100%;
    border:0.1em solid lightgray;    
`
const IdName = styled.strong`
    margin:0 0.3em;
`
const Time = styled(IdName)`
    color:lightgray;
`
const LBox = styled.div`
    display:flex;
    align-items:center;
    width:17em;
    @media (min-width: 42.5em) {
        width:26em;
    }
      @media (min-width: 48.6em) {
       width:30em;
    }
`
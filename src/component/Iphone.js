import React,{Component} from 'react';
import styled,{keyframes} from 'styled-components';

import iphones from '../media/FrontITwophones.png'
import photo1 from '../media/FrontInstaExamaple1.jpg'
import photo2 from '../media/FrontInstaExamaple2.jpg'
import photo3 from '../media/FrontInstaExamaple3.jpg'
import photo4 from '../media/FrontInstaExamaple4.jpg'
import photo5 from '../media/FrontInstaExamaple5.jpg'


class Iphone extends Component{
   
    // updating(){
    //     const pic = document.querySelector('.picChange');
    //     const images = [
    //         photo2,photo3,photo4,photo5,photo1
    //     ];
    //     pic.style.backgroundImage = "url("+ images[0]+")";
        
    //          let i = 0;
    //          setInterval(function(){
    //              pic.style.backgroundImage = "url("+ images[i]+")";
    //              i = i + 1;
    //   if (i === images.length) {
    //     i =  0;
    //   }
    //          }, 3500)
         
    // } 
    // componentDidMount(){
    //     // this.updating();
    // }
    render(){
        return(
            <Iphones>
                <Picture  src={photo1}></Picture>
                <Picture2 src={photo2}></Picture2>
                <Picture3 src={photo3}></Picture3>
                <Picture4 src={photo4}></Picture4>
                <Picture5 src={photo5}></Picture5>
                <Img src={iphones}></Img>
            </Iphones>
        )
    }
}
export default Iphone;
const fadein = keyframes`
  0% {
    opacity: 0;
  }
  11.11% {
    opacity: 1;
  }
  33.33% {
    opacity: 1;
  }
  44.44% {
    opacity: 0;
  }
  99.99% {
    opacity: 0;
  }
`
const Img = styled.img`
   height:100%;
   width:100%;
`
const Iphones= styled.div`
    z-index:1;
    width:28em;
    height:38em;
    display:none;
    @media (min-width: 78.6em) {
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        margin:-9em -20em 0 0;
    }
    @media (min-width: 144em) {
        margin-right:-2em;
    }
`
const Picture = styled.img` 
    opacity:0;
    animation: ${fadein} 18s infinite linear;
    width:15em;
    position:absolute;
    margin: 0.3em 0 0 2.7em;
    z-index:1;
    height:26.5em;
    background-size:cover;
    background-repeat:no-repeat;
    background:photo1;
    display:none;
    @media (min-width: 76.8em) {
        display:flex;
        justify-content:center;
        align-content:center;
    }
`
const Picture2 = styled(Picture)`
    animation: ${fadein} 18s  4.5s infinite linear;
`
const Picture3 = styled(Picture)`
    animation: ${fadein} 18s  9s infinite linear;
`
const Picture4 = styled(Picture)`
    animation: ${fadein} 18s  13.5s infinite linear;
`
const Picture5 = styled(Picture)`
    animation: ${fadein} 18s  18s infinite linear;
`
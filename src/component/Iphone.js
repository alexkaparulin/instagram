import React,{Component} from 'react';
import styled from 'styled-components';

import iphones from '../media/FrontITwophones.png'
import photo1 from '../media/FrontInstaExamaple1.jpg'
import photo2 from '../media/FrontInstaExamaple2.jpg'
import photo3 from '../media/FrontInstaExamaple3.jpg'
import photo4 from '../media/FrontInstaExamaple4.jpg'
import photo5 from '../media/FrontInstaExamaple5.jpg'

class Iphone extends Component{
   
    updating(){
        const pic = document.querySelector('.picChange');
        const images = [
            photo2,photo3,photo4,photo5,photo1
          
        ];
        pic.style.backgroundImage = "url("+ images[0]+")";
        
             let i = 0;
             setInterval(function(){
                 pic.style.backgroundImage = "url("+ images[i]+")";
                 i = i + 1;
      if (i === images.length) {
        i =  0;
      }
             }, 3500)
         
    } 
    componentDidMount(){
        this.updating();
    }
    render(){
        return(
            <Iphones>
            <Picture className="picChange">
            </Picture>
             <Img src={iphones}></Img>
             </Iphones>
        )
    }
}
export default Iphone;


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
`
const Picture = styled.div` 
    width:15em;
    position:absolute;
    margin: 0.3em 0 0 2.7em;
    z-index:1;
    height:26.5em;
    background-size:cover;
    background-repeat:no-repeat;
    background:photo1;
    display:none;
    /* @media (min-width: 76.8em) {
        display:flex
        justify-content:center;
        align-content:center;
    } */
`
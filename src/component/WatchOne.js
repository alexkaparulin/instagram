import React,{Component} from 'react';
import styled from 'styled-components';


import david from '../media/davidG.jpg'
import martin from '../media/martin.jpg'
import brady from '../media/bardy.jpg'
import shaq from '../media/shak.jpg'
import travis from '../media/travis.jpg'

class Watchone extends Component{
    // close(){
    //     const story = document.querySelector('.user');
    //     story.style.display='none';
    // }
    updating(){
        const pic = document.querySelector('.user');
        const images = [
            david,brady,travis,martin,shaq
          
        ];
        pic.style.backgroundImage = "url("+ images[0]+")";
        
             let i = 0;
             setInterval(function(){
                 pic.style.backgroundImage = "url("+ images[i]+")";
                 i = i + 1;
      if (i === images.length) {
        i =  0;
      }
             }, 4500)
         
    } 
    updatingUsers(){
        const user = document.querySelector('.p');
        const time = document.querySelector('.time');
        const text = [
            "DavidGuetta","Brady","TravisScott","MartinGarrix","Shaq"
        ];
        user.textContent = text[0];
        
        time.textContent = 1 + "m";
        
             let i = 0;
             setInterval(function(){
                 user.textContent = text[i];
                 time.textContent = i + 1 + "m";
                 i = i + 1;
                
      if (i=== text.length) {
        i =  0;
      }
             }, 4500)
         
    } 
    componentDidMount(){
        this.updating();
        this.updatingUsers();
    }
    render(){
        return(
            // <Container className="container">
                // <Link to="/homepage"><Span onClick={this.close}>&times;</Span></Link>
                // <BoxImage className="story">
                  <Box>
                      <Img className="user"></Img>
                      <P className="p"></P>
                      <Time className="time"></Time>
                      <i className="fas fa-ellipsis-h"></i>
                  </Box>
            //     </BoxImage>
            // </Container>
        )
    }
}
export default Watchone;
const Box = styled.div`
    display: flex;
    /* border:0.2em solid red; */
    position:absolute;
    align-items:center;
    top:0.5em;
    margin:1em 0;
    width:18em;
`
const Img = styled.img`
    height:2em;
    width:2em;
    border-radius:100%;
    background-size:cover;
    border:0.1em solid #fff;
    background-repeat:no-repeat;
    /* background-position:center ; */
    /* border:0.1em solid blue; */
`
const P = styled.p`
    color:#fff;
    margin-left:0.5em;
    font-size:0.8em;
    font-weight:600;
`
const Time= styled.p`
    font-weight:100;
    font-size:0.8em;
    color:lightgray;
    margin-left:1em;
`
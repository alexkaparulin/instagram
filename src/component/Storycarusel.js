import React,{Component} from 'react'
import styled ,{keyframes}from 'styled-components'
import { Link } from 'react-router-dom';

import marsh from '../media/Marsh.jpg'
import david from '../media/davidG.jpg'
import martin from '../media/martin.jpg'
import trump from '../media/userimage.jpg'
import cardi from '../media/cardi.jpg'
import travis from '../media/travis.jpg'
import brady from '../media/bardy.jpg'
import shaq from '../media/shak.jpg'
import mark from '../media/mark.jpg'
import plus from '../media/plus.png'
import Userstory from '../component/Userstory'
import Watchall from './WatchAll';

class Storycarusel extends Component{
    constructor(props){
        super(props);
        this.state = {
            profile_data: {}
        }
    }
    componentDidMount() {
    
         fetch('/api/user')
            .then( response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error('Network response disabled.');
            })
            .then( data => {
                let i = `${data.allUsers.length}`;
                this.setState({
                    profile_data: data.allUsers[i-1]
                });
            })
            .catch( error => {
                console.error(`fetch failed: ${error.message}`);
            }); 
    }
    render(){
        return(
            <Div className="carousel">
            <Holder className="holder">
            <ImgBox>
                    <Img src={marsh}></Img>
                    <ImgId>{this.state.profile_data.username}</ImgId>
                    <Plus src={plus}></Plus>
            </ImgBox>    
            <Link to="/davidstory">
            <Userstory username="DavidGuetta" src={david} background={david}/>  
            </Link>
            <Link to="/martinstory">
            <Userstory username="MarginGarrrix" src={martin}/> 
            </Link> 
            <Link to="/trumpstory">
            <Userstory username="DonaldTrump" src={trump}/>
            </Link>
            <Link to="/cardistory">
            <Userstory username="CardiB" src={cardi}/>  
            </Link>
            <Link to="/travisstory">
            <Userstory username="TravisScott" src={travis}/>   
            </Link>
            <Link to="/bradystory">
            <Userstory username="Brady" src={brady}/>   
            </Link>
            <Link to="/shaqstory">
            <Userstory username="Shaq" src={shaq}/>   
            </Link>
            <Link to="/zuckstory">
            <Userstory username="Zuckerberg" src={mark}/> 
            </Link>
            <Link to="/davidstory">
            <Userstory username="DavidGuetta" src={david} background={david}/>  
            </Link>
            <Link to="/martinstory">
            <Userstory username="MarginGarrrix" src={martin}/> 
            </Link> 
            <Link to="/trumpstory">
            <Userstory username="DonaldTrump" src={trump}/>
            </Link>
            <Link to="/cardistory">
            <Userstory username="CardiB" src={cardi}/>  
            </Link>
            <Link to="/travisstory">
            <Userstory username="TravisScott" src={travis}/>   
            </Link>
            <Link to="/bradystory">
            <Userstory username="Brady" src={brady}/>   
            </Link>
            <Link to="/shaqstory">
            <Userstory username="Shaq" src={shaq}/>   
            </Link>
            <Link to="/zuckstory">
            <Userstory username="Zuckerberg" src={mark}/> 
            </Link>
            </Holder>
          </Div>
        )
    }
}
export default Storycarusel
  const StoryDiv = styled.div`
    
  `
const Div = styled.div `
    margin:0 0 0.4em 0;
    display:flex;
    align-items:center;
    /* width: 100%; */
    height: 6em;
    overflow: hidden;
    box-sizing: border-box;
    /* border:0.1em solid lightgray; */
`
const carousel = keyframes`
0% {
  transform: translateX(0);
}
50%{
  transform: translateX(-55%);
}
100% {
    transform: translateX(0);
}
`
  const Holder =styled.div`
    display:flex;
    align-items:center;
      white-space: nowrap;
      will-change: contents;
      animation-play-state: paused;
      &:hover {
        animation: ${carousel} 20s linear infinite;
  }
` 
const ImgBox = styled.div`
    display:flex;
    flex-direction:column;
`
const Img = styled.img`
    border:0.1em solid lightgray;
    border-radius:100%;
    height:3.7em;
    width:3.7em;
    margin:1.8em 1em 0 1em;
    background:white;
`
const ImgId = styled.p`
    margin-top:0.1em;
    font-size:0.7em;
    margin-left:1.5em;
`
const Plus = styled.img`
    position:relative;
    height:1.1em;
    width:1.1em;
    top:-2.6em;
    left:3.7em;
`
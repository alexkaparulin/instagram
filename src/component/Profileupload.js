import React,{Component} from 'react'
import styled from 'styled-components'

import marsh1 from '../media/marsh1.jpg'
import marsh2 from '../media/marsh2.jpg'
import marsh3 from '../media/marsh3.jpg'
import marsh4 from '../media/marsh4.jpg'
import marsh5 from '../media/marsh5.jpg'
import marsh6 from '../media/marsh6.jpg'
import marsh7 from '../media/marsh7.jpg'
import marsh8 from '../media/marsh8.jpg'
import marsh9 from '../media/marsh9.jpg'
import marsh10 from '../media/marsh10.jpg'
import marsh11 from '../media/marsh11.jpg'
import marsh12 from '../media/marsh12.jpg'





class Profileupload extends Component{
    render(){
        return(
        <BoxCon>
            <BoxIcons>
                <i className="fas fa-th"></i>
                <i className="fas fa-arrows-alt"></i>
                <i className="fas fa-tv"></i>
                <i className="fas fa-bookmark"></i>
                <i className="fas fa-tag"></i>  
            </BoxIcons>
            <UserImages>
             <Img src={marsh1}></Img>
             <Img src={marsh2}></Img>
             <Img src={marsh3}></Img>
             <Img src={marsh4}></Img>
             <Img src={marsh5}></Img>
             <Img src={marsh6}></Img>
             <Img src={marsh7}></Img>
             <Img src={marsh8}></Img>
             <Img src={marsh9}></Img>
             <Img src={marsh10}></Img>
             <Img src={marsh11}></Img>
             <Img src={marsh12}></Img>
            </UserImages>
        </BoxCon>
        )
    }
}
export default Profileupload

const BoxCon = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`
const BoxIcons = styled.div`
    padding: 0 1em;
    display:flex;
    justify-content:space-around;
    align-items:center;
    height:3em;
    
`
const UserImages = styled.div`
    margin:.2em 0;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`
const Img = styled.img`
    flex-basis:calc(33%-0.3em);
    margin:0.15em;
    height:6.5em;
    width:6.5em;
    @media (min-width: 42.8em) {
        height:8em;
        width:8em;
    }
    @media (min-width: 48em) {
        height:12em;
        width:12em;
    }
    @media (min-width: 76.8em) {
        height:20em;
        width:20em;
    }
`
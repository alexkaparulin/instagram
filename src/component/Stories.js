import React,{Component} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import Storycarusel from './Storycarusel';


class Stories extends Component{
    onclick(){
        const story = document.querySelector('.story');
        story.style.display = 'flex';
    }
   
    render(){
        return(
        <BoxContainer>
            <TeBox>
                <Text >Stories</Text>
                <Link to="/stories"><Text /*onClick={this.onclick}*/>Watch All</Text></Link>
            </TeBox>       
            <Storycarusel/>
        </BoxContainer>
        )
    }
}
export default Stories

const BoxContainer = styled.div`
    display:flex;
    flex-direction:column;
    height:8em;
    border-bottom:0.1em solid #f5f5f2;
    background:#fafafa;
    width:100%;
    @media (min-width: 40em) {
         margin:1em 5em;
         border:0.1em solid lightgray;
         border-radius:.2em;
         width:38em;
     } 
`
const TeBox = styled.div`
    display:flex;  
    justify-content:space-between;
`
const Text = styled.p`
    font-size:0.9em;
    font-weight:600;
    margin:0.5em 1em; 
    color:black;
`


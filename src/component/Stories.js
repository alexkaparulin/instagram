import React,{Component} from 'react'
import styled from 'styled-components'

import Storycarusel from './Storycarusel';

class Stories extends Component{
    render(){
        return(
        <BoxContainer>
            <TeBox>
                <Text>Stories</Text>
                <Text>Watch All</Text>
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
    border-bottom:0.1em solid lightgray;
    background:#fafafa;
    @media (min-width: 40em) {
         margin:0 5em;
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
`
import React from 'react';
import styled from 'styled-components';

const Bottomapi=()=>(
    <BottomNav>
        <Box>    
            <Text>ABOUT US</Text>
            <Text>SUPPORT</Text>
            <Text>PRESS</Text>
            <Text>API</Text>
            <Text>JOBS</Text>
        </Box>
        <Box>    
            <Text>PRIVACY</Text>
            <Text>TERMS</Text>
            <Text>DIRECTORY</Text>
            <Text>PROFILES</Text>
        </Box>
        <Box>   
            <Text>HASHTAGS</Text>
            <Text>LANGUAGE</Text>
            <TextI>© 2018 INSTAGRAM</TextI>
        </Box>
            <IText>© 2018 INSTAGRAM</IText> 
        </BottomNav>
)
    export default Bottomapi;

const BottomNav = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:2.5em;
    @media (min-width: 78.6em) {
    flex-direction:row;
        margin-bottom:2em;
      }
      @media (min-width: 102.4em) {
       margin: 0 0 2em -30em;
    }
   
`
const Box = styled.div`
    display:flex;
`    
const Text = styled.p`
    color: #1447a0;
    font-size:0.75em;
    font-weight:700;
    margin:0.1em 0.6em;
    @media (min-width: 42.5em) {
      font-size:0.8em;
    }
    @media (min-width: 48em) {
        font-size:0.85em;
      }
`
const IText = styled.p`
    display:flex;
    align-self:center;
    justify-self:center;
    color:gray;
    font-size:0.75em;
    font-weight:700;
    @media (min-width: 42.5em) {
        font-size:0.8em;
        display:inline;
      }
      @media (min-width: 48em) {
          font-size:0.85em;
        }
      @media (min-width: 78.6em) {
          display:none;
      }
`
const TextI= styled(Text)`
        display:none;
        color:gray;
        font-size:0.75em;
        margin:0.1em 2.2em;
        @media (min-width: 78.6em) {
            display:flex;
            }
`

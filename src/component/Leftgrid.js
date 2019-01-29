import React,{Component} from 'react';
import styled from 'styled-components';

import maccabi2 from '../media/maccabi2.jpg';
import ballon from '../media/ballon.jpg';
import assassin from '../media/assassin.jpg';



class Leftgrid extends Component{
  
render(){
    return(
                <Grid>
                    <BigBox>
                        <Big src={maccabi2}></Big>
                    </BigBox>    
                    <SmallBox>
                        <Small src={ballon}></Small>
                        <Small src={assassin}></Small>
                    </SmallBox>
                </Grid>
        )
    }
}
export default Leftgrid

const Grid= styled.div`
    display:flex;
    flex-direction:row;
    height:16.5em;
    width:25.5em;
    /* border:0.1em solid red; */
    margin-bottom:0.06em;
    margin-left:0.12em;
    margin-top:0.12em;
    @media (min-width: 26em) {
       height:20em;
       width:30em;
    }    
    @media (min-width: 30em) {
       height:22em;
       width:33em;
    } 
    @media (min-width: 34em) {
        height:24em;
        width:36em;
    }
    @media (min-width: 38em) {
        height:26em;
        width:39em;
    }
    @media (min-width: 42em) {
        height:28em;
        width:42em;
    }
    @media (min-width: 46em) {
        height:30em;
        width:45em;
    }
    @media (min-width: 50em) {
        height:32em;
        width:48em;
    }
    @media (min-width: 54em) {
        height:34em;
        width:51em;
    }
    @media (min-width: 58em) {
        height:36em;
        width:54em;
    }
    @media (min-width: 64em) {
        height:40em;
        width:60em;
    }
    @media (min-width: 72em) {
        height:44em;
        width:66em;
    }  
`
 
const BigBox = styled.div`
   height:99%;
   width:66.35%;
   margin-right:0.13em;
`
const Big = styled.img`
    height:100%;
    width:100%;
    background:black;
    &:hover{
        opacity:0.75;
      
    }
`
const Small = styled.img`
    height:49.35%;
    width:100%;
    margin-bottom:0.12em;
    &:hover{
        opacity:0.75; 
    }
`
const SmallBox = styled.div`
    display:flex;
    flex-direction:column;
    /* border:.1em solid green; */
    height:100%;
    width:33%;
`

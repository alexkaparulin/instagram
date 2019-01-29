import React,{Component} from 'react';
import styled from 'styled-components';

import thai from '../media/thai.jpg'
import griz from '../media/griz.jpg'
import plane from '../media/plane.jpg'
import lion from '../media/lion.jpg'
import canyon from '../media/canyon.jpg'
import watch from '../media/watch.jpg'

class Flexgrid extends Component{
  
render(){
    return(
        <ImagesFlex>
            <Column>
                <FImg src={thai}></FImg>
                <FImg src={griz}></FImg>
            </Column>
            <Column>
                <FImg src={plane}></FImg>
                <FImg src={lion}></FImg>
            </Column>
            <Column>
                <FImg src={canyon}></FImg>
                <FImg src={watch}></FImg>
            </Column>
        </ImagesFlex>
        )
    }
}
export default Flexgrid

const ImagesFlex = styled.div`
    display:flex;
    height:16.5em;
    width:25.5em;
    margin-top:-0.38em;
    margin-right:0.12em;
    margin-bottom:0.12em;
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
const Column = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    width:33.06%;
    /* border:0.1em solid red; */
    margin-left:0.129em;
`
const FImg = styled.img`
    height:50%;
    width:100%;
    margin-bottom:0.12em;
    &:hover{
        opacity:0.75; 
    }
`

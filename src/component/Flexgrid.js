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
    height:14em;
    width:21em;
    margin-top:-0.12em;
    margin-right:0.12em;
    margin-bottom:0.12em;
`
const Column = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    width:33.1%;
    /* border:0.1em solid red; */
    margin-left:0.12em;
`
const FImg = styled.img`
    height:50%;
    width:100%;
    margin-bottom:0.12em;
`

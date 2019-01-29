import React,{Component} from 'react';
import styled from 'styled-components';

import vegas from '../media/vegas.jpg';
import surf from '../media/surf.jpg';
import moon from '../media/moon.jpg';

class Rightgrid extends Component{
  
render(){
    return(
                <Grid>
                    <SmallBox>
                        <Small src={surf}></Small>
                        <Small src={moon}></Small>
                    </SmallBox>
                    <BigBox>
                        <Big src={vegas}></Big>
                    </BigBox>    
                </Grid>
        )
    }
}
export default Rightgrid
const Grid= styled.div`
    display:flex;
    flex-direction:row;
    height:16.5em;
    width:25.5em;
    margin-left:0.12em;
    margin:0.12em 0 -0.14em 0;
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
   height:100%;
   width:66.63%;
   margin-left:0.005em;
`
const Big = styled.img`
    height:98.6%;
    width:99.65%;
    &:hover{
        opacity:0.75; 
    }
`
const Small = styled.img`
    height:49.1%;
    width:99.4%;
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
    width:33.25%;
    margin-left:0.05em;
`






/* <ImagesGrid>
<SmallBox>
    <SImg></SImg>
    <SImg></SImg>
</SmallBox>   
<BigBox>
    <BImg></BImg>
</BigBox>
</ImagesGrid> */

// const ImagesGrid= styled.div`
//     display:flex;
//     justify-content:center;
//     height:14em;
//     @media (min-width: 42.8em) {
//         height:25em;
//     } 
//     @media (min-width: 48em) {
//         height:30em;
//     } 
//     @media (min-width: 76.8em) {
//         height:40em;
//     } 
//     @media (min-width: 102.4em) {
//         height:55em;
//     } 
//     @media (min-width: 144.4em) {
//         height:75em;
//     } 
// `
// const SmallBox = styled.div`
//     display:flex;
//     flex-direction:column;
//     flex-basis:33%;
// `
// const SImg = styled.img`
//     flex-basis:50%;
//     margin:0.1em 0;
// `
// const BigBox = styled.div`
//     display:flex;
//     flex-basis:66%;
//     margin: 0 0 .1em .2em;
// `
// const BImg = styled.img`
//     flex-basis:100%;
// `
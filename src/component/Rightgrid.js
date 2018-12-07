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
    height:14em;
    width:21em;
    margin-left:0.12em;
    margin:0.12em 0;
`
const BigBox = styled.div`
   height:100%;
   width:66.2%;
   margin-left:0.07em;
`
const Big = styled.img`
    height:99.2%;
    width:100%;
`
const Small = styled.img`
    height:49.1%;
    width:99.4%;
    margin-bottom:0.12em;
`
const SmallBox = styled.div`
    display:flex;
    flex-direction:column;
    /* border:.1em solid green; */
    height:100%;
    width:33%;
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
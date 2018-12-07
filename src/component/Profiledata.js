import React,{Component} from 'react'
import styled from 'styled-components'

import userPic from '../media/Marsh.jpg'

class Profiledata extends Component{
    render(){
        return(
            <BoxContainer>
                <Box>
                    <SBox>
                        <ImgUser src={userPic}></ImgUser>
                    </SBox>
                    <SBox>
                        <UserName>Marshmello</UserName>
                        <EditButton>Edit Profile</EditButton> 
                    </SBox> 
                </Box>
                <BBox>
                    <Name>DJ Marshmello</Name>
                    <Bio>American electronic music producer and DJ </Bio>   
                </BBox>
            </BoxContainer>
        )
    }
}
export default Profiledata

const BoxContainer=styled.div`
    display:flex;
    flex-direction:column;
    border-bottom:.1em solid #f5f5f2;
    padding:0 2em;
    @media (min-width: 42.8em) {
        height:15em;
    } 
    @media (min-width: 76.8em) {
       justify-content:center;
       align-items:center;
       font-size:1.2em;
    }
`      
const ImgUser = styled.img`
    border:0.1em solid blue;
    border-radius:100%;
    height:4.5em;
    width:4.5em;
    position:relative;
    top:1.8em;
    margin-right:1em;
    @media (min-width: 76.8em) {
       height:8em;
       width:8em;
       top:0;
    }
`         
const Box = styled.div`
    // margin:1em;
    display:flex;
    height: 12em;
    width:100%;
    justify-content:flex-start;
    @media (min-width: 76.8em) {
        justify-content:center;
    }
`
const BBox=styled.div`
    display:flex;
    flex-direction:column;
    margin-top:-3em;
    @media (min-width: 76.8em) {
        justify-content:center;
        flex-direction:row;
        margin: -2em 0 0 0;
    }
`
const UserName = styled.p`
    color:black;
    font-size:1.6em;
`
const EditButton = styled.button`
    border:.1em solid lightgray;
    margin-top:-1.2em;
    height:2em;
    width:14em;
    background:white;
    border-radius:0.2em;
    @media (min-width: 42.8em) {
        width:35em;
    }    
    @media (min-width: 58em) {
        width:60em;
    }    
    @media (min-width: 76.8em) {
        width:22em;
        height:2em;
    }
 `
const SBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    @media (min-width: 76.8em) {
    //    justify-content:center;
    }
`
const Name = styled.p`
    font-weight:600;
    margin-top:-1em;
    @media (min-width: 76.8em) {
        margin-right:0.5em;
    }
`
const Bio = styled.p`
    color:gray;
    margin-top:-1em;
    font-size:0.9em;
`

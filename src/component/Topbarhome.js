import React,{Component} from 'react';
// import Search from './Search';

// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import photo from '../media/photo.png';
import addfriend from '../media/add_friend.png';
import logo from '../media/instagramLogo.png';

class Topbarhome extends Component {
    uploadd(){
        document.getElementById('upload').click()
    }
    render (){
    return(
        <TopBarDiv className="topbardiv">
            <Input type="file" id="upload"></Input>
            <Img src={photo} onClick={this.uploadd}></Img>
            <ImgL src={logo}></ImgL>
            <Img src={addfriend}></Img>
        </TopBarDiv>
    )   
}
}
export default Topbarhome;

const TopBarDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    position:sticky;
    top:0;
    padding:0 1em;
    background:white;
    height:2.75em;
    border-bottom:0.1em solid lightgray;
    z-index:1;
`
const Img = styled.img`
    height:1.5em;
    width:1.5em;
`
const ImgL = styled.img`
    height:1.5em;
    width:5.1em;
`
const Input = styled.input`
    display:none;
`
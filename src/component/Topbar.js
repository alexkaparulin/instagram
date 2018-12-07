import React from 'react';
// import Search from './Search';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../media/isi.png';
import instLogo from '../media/instagramLogo.png';

const TopBar = ({children})=> {
    return(
        <TopBarDiv className="topbardiv">
            {children}
            <Link to="/homepage">
            <Icon src={logo} alt="logo"></Icon>
            </Link>
            <Line></Line>
            <LogoInstagram src={instLogo} alt="instagram logo">
            </LogoInstagram>
            {/* <Search /> */}
        </TopBarDiv>
    )   
}
export default TopBar;

const TopBarDiv = styled.div`
    display: flex;
    align-items:center;
    border-bottom:2px solid lightgray;
    background: white;
    height:4em;
    position: sticky;
    top: 0;
    z-index: 1;
`
const Icon = styled.img`
    height: 1.3em;
    width: 1.3em;
    margin: 0.3em 0 0 0.3em;
    outline:none;
`
const Line = styled.div`
    height:1.4em;
    border-left: 0.06em solid black;
    margin:0 0.3em;
`
const LogoInstagram = styled.img`
    height: 1.7em;
    width: 5em;
    margin-top:0.2em;
`



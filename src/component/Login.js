import React,{Component} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import insLogo from '../media/instagramLogo.png';
import facebookLogo from '../media/face.png';
// import Signup from './Signup';

class Login extends Component{
  
    loginWithFacebook() {
        window.location.assign('https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv1.0%2Fdialog%2Foauth%3Fredirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%25221fmrsh7a7ql2zt49ush1qhfqfw1ohnafd1aw8ru41875syhhhu2xg%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26client_id%3D124024574287414%26ret%3Dlogin%26logger_id%3Df6a53967-45f7-337c-297b-f9552aa70ffd&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221fmrsh7a7ql2zt49ush1qhfqfw1ohnafd1aw8ru41875syhhhu2xg%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%23_%3D_&display=page&locale=he_IL&logger_id=f6a53967-45f7-337c-297b-f9552aa70ffd');
      }
    render(){
        return(
            <BoxContainer>
                <BoxTop>
                    <Img src={insLogo} alt="instagram logo"></Img>
                    <FButton onClick={this.loginWithFacebook}><ImgFacebook src={facebookLogo}></ImgFacebook>Continue with Facebook</FButton>
                    <LBox>
                        <LLine></LLine>
                        <Or>OR</Or>
                        <RLine></RLine>
                    </LBox>
                    <Input type="text" placeholder="Email"></Input>
                    <Input type="password" placeholder="Password"></Input>
                    <Link to="/homepage">
                    <FButton>Log in</FButton>   
                    </Link>
                    <Text>Forgot password?</Text>    
                </BoxTop>    
                <Box>
                    <LowBox>Don't have an account?
                    <Link to="/signup"><Str>Sign up</Str></Link>
                    </LowBox>
                </Box>     
            </BoxContainer>
        )
    }
}
export default Login;

const BoxContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background:#fff;
`
const BoxTop= styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:4em;
    @media (min-width: 42.5em) {
        margin:2em 4em;
        padding: 1em 2em;
        border:.1em solid lightgray;
  }
  @media (min-width: 42.5em) {
    margin: 7em;
    padding: 2em 3em;
    border:.1em solid lightgray;
}
`
const Img = styled.img`
    margin-top:2em;
    height: 4em;
    width: 13em;
   
`
const FButton = styled.button`
    outline:none;
    margin-top:2em;
    height:2.2em;
    width:19em;
    color:#fff;
    background-color: #3897f0;
    border: .1em solid #3897f0;
    font-weight: 600;
    padding: .05em .09em;
    cursor: pointer;
    border-radius: .4em;
    @media (min-width: 42.5em) {
        height:2.8
        width:23em;
        font-size:0.75em;
  }
`
const LBox = styled.div`
    display:flex;
`
const LLine = styled.div`
    position:relative;
    top:-1.5em;
    left:-1.1em;
    border-bottom: .06em solid lightgray;
    width: 6em;
    @media (min-width: 42.5em) {
        width:7em;
        top:-1.2em;
  }
`
const Or = styled.p`
    color:gray;
    @media (min-width: 42.5em) {
      font-size:0.75em;
  }
`
const RLine = styled.div`
    position:relative;
    top:-1.5em;
    right:-1.1em;
    border-bottom: 0.06em solid lightgray;
    width:6em;
    @media (min-width: 42.5em) {
        width:7em;
        top:-1.2em;

  }
`
const Str = styled.strong`
    margin-left:0.5em;
    color:black;
`
const Input = styled.input`
    margin-top:0.5em;
    height:2.8em;
    width:19em;
    border-radius: .3em;
    border:0.05em solid lightgray;
    background:whitesmoke;
    padding-left:.8em;
    outline:none;
    color:gray;
    @media (min-width: 42.5em) {
        width:20em;
  }
`    
const Text = styled.p`
    margin-top:2em;
    color:#3897f0;
    font-size:0.8em;
    // @media (min-width: 42.5em) {
    //     font-size:1em;
    // }
`
const LowBox = styled.p`
    color:gray;
    font-size:.85em;
    @media (min-width: 42.5em) {
       font-size:0.8em;
    }
`   
const ImgFacebook = styled.img`
    position:relative;
    top:0.1em;
    right:0.3em;
    height:1.05em;
    width:1.05em;
`    
const Box = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    background:whitesmoke;
    width:100%;
`
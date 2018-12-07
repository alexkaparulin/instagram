import React,{Component} from 'react'
import styled from 'styled-components'
import instagramLogo from '../media/instagramLogo.png'
import Ifacebook from '../media/face.png'
class Register extends Component {
    
    loginWithFacebook() {
        window.location.assign('https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv1.0%2Fdialog%2Foauth%3Fredirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%25221fmrsh7a7ql2zt49ush1qhfqfw1ohnafd1aw8ru41875syhhhu2xg%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26client_id%3D124024574287414%26ret%3Dlogin%26logger_id%3Df6a53967-45f7-337c-297b-f9552aa70ffd&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221fmrsh7a7ql2zt49ush1qhfqfw1ohnafd1aw8ru41875syhhhu2xg%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%23_%3D_&display=page&locale=he_IL&logger_id=f6a53967-45f7-337c-297b-f9552aa70ffd');
      }
      loginToHomePage(){
        window.location.assign('http://localhost:3000/')
      }
    render(){
        return(
            <RegisterBox>
              <Img src={instagramLogo}></Img>
              <LabelTop>Sign up to see photos and<br/> videos
                from your friends.</LabelTop>
              <Button onClick={this.loginWithFacebook}>
                <ImgF src={Ifacebook}></ImgF> <Strong>Log in with Facebook</Strong>
            </Button>
            <LBox>
              <LLine></LLine>
              <Or>OR</Or>
              <RLine></RLine>
            </LBox>
            <Inputs>
              <Input type="email" placeholder="Email"></Input>
              <Input type="text" placeholder="Full Name"></Input>
              <Input type="text" placeholder="Username"></Input>
              <Input type="password" placeholder="Password"></Input>
            </Inputs>
            <Button onClick={this.loginToHomePage}><Strong>Sign up</Strong></Button>
            <LabelBottom>By signing up, you agree to our<br/>
              <BStrong>Terms, Data Policy</BStrong> and 
              <BStrong> Cookies<br/> Policy.</BStrong>
            </LabelBottom> 
          </RegisterBox> 
        )
    }
}
export default Register;

const RegisterBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    width:100%;
    height:100%;
    @media (min-width: 42.5em) {
      font-size:0.9em;
   }
    
`
const Img = styled.img`
    margin-top:3em;
    height:3em;
    width:10em;
    @media (min-width: 42.5em) {
       height:4em;
       width:13em;
  }
`
const Inputs = styled.div`
   display:flex;
   flex-direction:column;
`    
const Input = styled.input`
    width:15em;
    height:3em;
    margin-top:.4em;
    border-radius:.2em;
    height:2em;
    width:19em;
    border: .08em solid lightgray;
    padding-left:0.5em;
    @media (min-width: 42.5em) {
        height:3em;
        width:24em;
        background:whitesmoke;
        font-size:0.75em;
  }
`   
const LabelTop = styled.p`
    color:gray;
    font-weight:600;
   
`   
const Button = styled.button`
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
        height:2.5em;
        width:20em;
  }
`
const ImgF = styled.img`
    position:relative;
    top:0.1em;
    right:0.3em;
    height:1.05em;
    width:1.05em;
    @media (min-width: 42.5em) {
       height:1.1em;
       width:1.1em;
       top:0.2em;
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
       width:8em;
     }
`
const Or = styled.p`
    color:gray;
`
const RLine = styled.div`
    position:relative;
    top:-1.5em;
    right:-1.1em;
    border-bottom: 0.06em solid lightgray;
    width:6em;
    @media (min-width: 42.5em) {
        width:8em;
      }
` 
const LabelBottom = styled.p`
    color:gray;
    font-size:0.9em;
` 
const Strong = styled.strong`
    font-size:0.7m;
    @media (min-width: 42.5em) {
        font-size:1em;
     }
    
`
const BStrong = styled.strong`

`
import React,{Component} from 'react'
import styled from 'styled-components'

import instagramLogo from '../media/instagramLogo.png'
import Ifacebook from '../media/face.png'
// import { connect } from 'react-redux';

class Register extends Component {
    
        state = {
            email:'',
            username:'',
            fullname:'',
            password:'',
            form_valid:true,
            error_msg:'',
            error_field:''
        }
    
    onChange=(e)=>{
        this.setState({[e.target.name]: e.target.value});
        // console.log(this.state)
    }
    hide_errors = ()=> {
        this.setState({form_valid:true,error_msg:'',error_field:''});
    }
    validate_form = ()=> {
        let form_valid = true;
        let error_msg = '';
        let error_field = '';
       
        let conclude = ()=> {
            this.setState({form_valid,error_msg,error_field});
            return form_valid;
        }
     
        if(this.state.email === ''){
            form_valid = false;
            error_msg = 'Email is required';
            error_field = 'email';
            return conclude();
        }
        const re = /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(this.state.fullname === ''){
            form_valid = false;
            error_msg = 'Fullname is required';
            error_field = 'fullname';
            return conclude();
        }
        if(this.state.username === ''){
            form_valid = false;
            error_msg = 'Username is required';
            error_field = 'username';
            return conclude();
        }
        if(re.test(String(this.state.email).toLowerCase()) === false){
            form_valid = false;
            error_msg = 'Email is not a valid address';
            error_field = 'email';
            return conclude();
        }
        if(this.state.password === ''){
            form_valid = false;
            error_msg = 'Password is required';
            error_field = 'password';
            return conclude();
        }
    }
    onSubmit=(e)=>{

        e.preventDefault();
        
        const form_valid = this.validate_form();
      
        if(form_valid === false) return;   

        const new_user = {    
            ...this.state, 
        } 
        // console.log(new_user);
        

        delete new_user.form_valid
        delete new_user.error_msg
        delete new_user.error_field

        fetch('/api/user/', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
               },body:JSON.stringify({ email:this.state.email,
                                       username:this.state.username,
                                       fullname:this.state.fullname,
                                       password:this.state.password
                                   })
          }).then(res=>res.json())
            .then(res => console.log(res));

            window.location.assign('http://localhost:3000/username');
    
      }
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
                <LabelTop >Sign up to see photos and<br/> videos from your friends.</LabelTop>
                <Button onClick={this.loginWithFacebook}>
                    <ImgF src={Ifacebook}></ImgF><Strong>Log in with Facebook</Strong>
                </Button>
                <LBox>
                    <LLine></LLine>
                    <Or>OR</Or>
                    <RLine></RLine>
                </LBox>
                <Inputs >
                    <Input type="email" 
                            placeholder="Email"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange} 
                            error_styled={this.state.error_field==='email'}
                            onBlur={this.validate_form}
                            onFocus={this.hide_errors}></Input>
                    <Input type="text" 
                            placeholder="Full Name" 
                            name="fullname"
                            value={this.state.fullname}
                            onChange={this.onChange} 
                            onBlur={this.validate_form}
                            onFocus={this.hide_errors}></Input>
                    <Input type="text" 
                            placeholder="Username"
                            name="username"
                            value={this.state.username}
                            onChange={this.onChange}
                            onBlur={this.validate_form}
                            onFocus={this.hide_errors} ></Input>
                    <Input type="password"
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            onBlur={this.validate_form}
                            onFocus={this.hide_errors}></Input>
                </Inputs>
                <ErrorMsg show={(this.state.form_valid !== true)}>
                               {this.state.error_msg}
                    </ErrorMsg>
               <Button onClick={this.onSubmit} type="submit"><Strong>Sign up</Strong></Button>
                <LabelBottom>By signing up, you agree to our<br/>
                    <BStrong>Terms, Data Policy</BStrong> and 
                    <BStrong> Cookies<br/> Policy.</BStrong>
                </LabelBottom> 
            </RegisterBox> 
        )
    }
}


export default Register

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
const Inputs = styled.form`
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
       width:7.3em;
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
        width:7.3em;
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
const ErrorMsg = styled.h1`
    color:red;
    border:red solid 0.1;
    border-radius:6px;
    visibility: ${(props)=> props.show === true ? 'visible' : 'hidden'};
    align-self: center;
    text-align:center;
    padding:.6re;
    width:100%;
    /* margin-bottom:1rem; */
    font-size:1em;
    font-family:'Arial';
`;
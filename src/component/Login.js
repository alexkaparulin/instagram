import React,{Component} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import insLogo from '../media/instagramLogo.png';
import facebookLogo from '../media/face.png';
// import Signup from './Signup';

class Login extends Component{
        
    
        state = {
            original_list:[],
            email:'',
            username:'',
            fullname:'',
            password:'',
            loggingData:[]
        }
     
    onChange=(e)=>{
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state.profile_data)
    }
   
    componentDidMount() {
        console.log('Browse - componentDidMount')
         fetch('/api/user')
            .then( response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error('Network response disabled.');
            })
            .then( data => {
                // console.log(data);
                this.setState({
                    original_list: data.allUsers
                });
                // console.log('email:',this.state.original_list)
            })
            .catch( error => {
                console.error(`fetch failed: ${error.message}`);
            }); 
    }
    findemail=()=>{
        const new_user = {    
            ...this.state, 
        } 
        console.log(new_user);
        // let k = `${this.state.original_list.length}`;
        // let user;
        let data = this.state.original_list;
        // console.log(data)
        // for (let i of data){
            for(let i = 0; i < data.length; i++) {
                if (data[i].email === new_user.email && data[i].password === new_user.password) {
                    console.log('You logged in:',data[i])

                    fetch('/api/user/', {
                        method: 'post',
                        headers: {
                          'Content-Type': 'application/json'
                           },body:JSON.stringify({ email:data[i].email,
                                                   username:data[i].username,
                                                   fullname:data[i].fullname,
                                                   password:data[i].password
                                               })
                      }).then(res=>res.json())
                        .then(res => console.log(res));
                    this.setState({loggingData:data[i]})
                  
                  
                    // console.log('Conncted User is:',this.state.loggingData)
                    window.location.assign('/homepage')
                    break;
                }else{
                    alert('One of your details is incorrect..');
                }
            // }
        } 
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
                    <Input type="text" placeholder="Email"
                           value={this.state.email}
                           onChange={this.onChange} 
                           name="email"
                           error_styled={this.state.error_field==='email'}
                           onBlur={this.validate_form}
                           onFocus={this.hide_errors}>
                    </Input>
                    <Input type="password" placeholder="Password"
                            value={this.state.password}
                            onChange={this.onChange}
                            name="password"
                            onBlur={this.validate_form}
                            onFocus={this.hide_errors}>
                    </Input>
                    {/* <Link to="/homepage"> */}
                    <FButton onClick={this.findemail}>Log in</FButton>   
                    {/* </Link> */}
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
    background:white;
    width:100%;
`
const BoxTop= styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:4em;
   
  @media (min-width: 42.5em) {
    margin:2em 4em;
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
        height:2.8;
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
    @media (min-width: 42.5em) {
       height:3em;
       width:23.5em;
       margin: 0em 7em 2em 7em;
       border:.1em solid lightgrey;
       background:white;
       text-align:center;
  }
`
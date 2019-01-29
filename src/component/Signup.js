import React,{Component} from 'react'
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

import styled from 'styled-components'
import apple from '../media/downloadOnAppStore.png'
import google from '../media/getOnGooglePlay.png'
import microsoft from '../media/getFromMicrosoft.png'
import Bottomnapi from './Bottomapi';
import Iphone from './Iphone';
import Register from './Register.view';


class Signup extends Component{

    render(){
    
        return(
            <Div>
                <Iphone />
                <SignupContainer>
                    <SignupBox>
                        <Register/>                        
                   </SignupBox>
                    <BoxBottom>
                        <Text>Have an account?</Text>    
                            <Link to="/login">
                            <LText>Log in</LText>
                        </Link>    
                    </BoxBottom>
                    <Text>Get the app.</Text>
                    <BrandsAll>
                        <GetBrands>
                            <Img src={apple}></Img>  
                            <Img src={google}></Img>  
                        </GetBrands>
                        <Img src={microsoft}></Img>
                    </BrandsAll>
                    <Bottomnapi />
                </SignupContainer>
            </Div>
        )
    }
}

export default Signup;
    

const SignupContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    border:.3 solid red;
    background:white;
    @media (min-width: 42.5em) {
        background:whitesmoke;
  }

`
const BoxBottom = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    @media (min-width: 42.5em) {
        background:white;
        border:.1em solid lightgray;
        font-size:1em;
        margin:0 4em;
        padding:0.5em 7em;
    }
`
const Text = styled.p`
    @media (min-width: 42.5em) {
        font-size:1em;
}
`
const LText = styled.p`
    margin-left:0.2em;
    color:#3897f0;
`
const GetBrands = styled.div`
    display:flex;
`    
const Img = styled.img`
    height:3em;
    margin: 0.4em 0.3em 0 0;
    width:8.5em;
    @media (min-width: 42.5em) {
      height:3em;
      width:10em;
    }
    
`    
const SignupBox= styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    @media (min-width: 42.5em) {
        margin:2em;
        padding: 1em 4em;
        border:.1em solid lightgray;
        background:white;
  }
 
`
const BrandsAll = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    @media (min-width: 42.5em) {
        display:flex;
        flex-direction:row;
        margin-bottom:2em;
    }
`
const Div= styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    @media (min-width: 78.6em) {
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        /* margin:-9em -20em 0 0; */
        margin-left:10em;
    }
`
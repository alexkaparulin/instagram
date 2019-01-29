import React,{Component} from 'react'
import styled from 'styled-components'

import settings from '../media/settings.png'
import contact from '../media/add_contact.png'

import Profileupload from './Profileupload';
import Profileclasses from './Profileclasses';
import Profiledata from './Profiledata';
import Bottomnav from './Bottomnav';

class Username extends Component{
    render(){
        return(
            <UserContainer>
                <TopbBox>
                    <Img src={settings}></Img>
                    <Text>Profile</Text>
                    <Img src={contact}></Img>
                </TopbBox> 
                <UserData>
                    <Profiledata />
                    <Profileclasses />
                    <Profileupload/>
              </UserData>
              <Bottomnav/>
            </UserContainer>
        )
    }
}
export default Username;

const UserContainer = styled.div`
    display:flex;
    flex-direction:column;
    background:white;
`
const TopbBox = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 1em;
    height:3em;
    border-bottom:.1em solid lightgray;
`
const Img = styled.img`
    height:1.5em;
    width:1.5em;
`
const Text = styled.p`
    color:black;
    font-weight:500;
    font-size:1.1em;
    margin: 1em 5em;
`
const UserData = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
     @media (min-width: 40em) {
     /* width:40em; */
     }
`

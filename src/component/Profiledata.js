import React ,{Component} from 'react'
import styled from 'styled-components'

import userPic from '../media/Marsh.jpg'


class Profiledata extends Component{

 constructor(props){
        super(props);
        this.state = {
            original_list:[],
            profile_data: {}
        }
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
                console.table(data);
                let i = `${data.allUsers.length}`;
               
                console.log(`items loaded: ${i}`);
                this.setState({
                    original_list: data,
                    profile_data: data.allUsers[i-1]
                });
                console.log(this.state.original_list.allUsers.username)
                console.log(this.state.profile_data.username);
            })
            .catch( error => {
                console.error(`fetch failed: ${error.message}`);
            }); 
    }
        render(){
   
        return(
            <BoxContainer>
                 <Box>
                    <SBox>
                        <ImgUser src={userPic}></ImgUser>
                    </SBox>
                    <SBox>
                        <UserName>{this.state.profile_data.username}</UserName>
                        <EditButton>Edit Profile</EditButton> 
                    </SBox> 
                </Box>
                <BBox>
                    <Name>{this.state.profile_data.fullname}</Name>
                    <Bio>{this.state.profile_data.email}</Bio>   
                </BBox>
            </BoxContainer>
        )
    }
}  

export default Profiledata;

const BoxContainer=styled.div`
    display:flex;
    flex-direction:column;
    /* border-bottom:.1em solid #f5f5f2; */
    justify-content:center;
    align-items:center;
    @media (min-width: 76.8em) {
       font-size:1em;
    }
`      
const ImgUser = styled.img`
    border-top:0.15em solid #b266b2;
    border-right:0.15em solid  #a64ca6;
    border-bottom:0.15em solid #ffd27f;
    border-left:0.15em solid #ffae19;
    border-radius:100%;
    padding:0.1em;
    height:4.5em;
    width:4.5em;
    position:relative;
    top:1.8em;
    margin-right:1em;
    @media (min-width: 76.8em) {
       height:8em;
       width:8em;
       top:0.7em;
       right:1em;
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
    margin:-3em 0 0 -8em;
    @media (min-width: 42.8em) {
       margin:-4em 0 0 -8.5em;
    }    
    @media (min-width: 48em) {
       flex-direction:row;
       margin: -3em 0 0 -10em;
    }    
    @media (min-width: 76.8em) {
        align-content:center;
        flex-direction:column;
        margin: -5em 0 0 4em;
    }
`
const UserName = styled.p`
    color:black;
    font-size:1.2em;
    font-family:Arial, Helvetica, sans-serif;
    /* margin-bottom:2.5em; */
    margin-top:2em;
    @media (min-width: 76.8em) {
        margin-top:1em;
    }
`
const EditButton = styled.button`
    border:.1em solid lightgray;
    margin-top:-0.8em;
    height:2em;
    width:14em;
    background:white;
    border-radius:0.2em;
    @media (min-width: 42.8em) {
        width:25em;
    }    
    @media (min-width: 58em) {
        width:30em;
    }    
    @media (min-width: 76.8em) {
        width:18em;
        height:2em;
    }
 `
const SBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
  
`
const Name = styled.p`
    font-weight:600;
    margin-top:-1em;
    @media (min-width: 76.8em) {
        /* margin-right:0.5em; */
    }
`
const Bio = styled.p`
    color:gray;
    margin-top:-1em;
    font-size:0.9em;
    @media (min-width: 48em) {
        margin-left:0.5em; 
    } 
    @media (min-width: 76.8em) {
        margin-left:0em; 
    } 
`

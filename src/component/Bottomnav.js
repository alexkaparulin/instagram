import React,{Component} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

// import home from  '../media/home.png'
// import search from  '../media/search.png'
import upload from  '../media/upload.png'
// import like from  '../media/love.png'
// import user from  '../media/user.png'

class Bottomnav extends Component{


    uploadd(){
        document.getElementById('upload').click()
    }
    render(){
        return(
        <BottomNav>
            <Link to="/homepage">
             
                <i className="fas fa-home"></i>
            </Link>
            <Link to="/search">
           
                <i className="fas fa-search"></i>
            </Link>
            <Input type="file" id="upload"></Input>
             <Img src={upload} onClick={this.uploadd}></Img>  
      
            <Link to="/activity">
             
                <i className="far fa-heart"></i>
            </Link>  
            <Link to="/username">
              
                <i className="far fa-user"></i>
            </Link>
        </BottomNav>
        )
    }
}
export default Bottomnav

const BottomNav = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    position:sticky;
    bottom:0;
    width:100%;
    height:3em;
    background:white;
    border-top:0.1em solid  #f5f5f5;
    z-index:1;
`  
const Img = styled.img`
    height:1.2em;
    width:1.2em;
    margin-left:0.5em;
`
const Input = styled.input`
    display:none;
`
import React ,{Component} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


class Links extends Component {
    
    render(){
        return(   
    <ULinks>
            <Link to="/search">
                <i className="fas fa-search"></i>
            </Link> 
            <Link to="/activity">
                <i className="far fa-heart" ></i>
            </Link>
            <Link to="/username">
                <i className="far fa-user"></i>
            </Link>    
            {/* <Link to="/login">
                <Login_link onClick={this.disableTopBar}>Login</Login_link>
            </Link>    */}
            {/* <Link to="/signup">
                <Signup_link onClick={this.disableTopBar}>Sign up</Signup_link>
            </Link>  */}
    </ULinks>
    
)
}
}
export default Links;


const ULinks = styled.div`
    display:flex;
    position:absolute;
    justify-content:space-between;
    top:1.5em;
    right:0.5em;
`
// const Login_link = styled.p`
//     text-decoration: none;
//     background-color: #3897f0;
//     border: .1em solid #3897f0;
//     border-radius: .4em;
//     color: #fff;
//     font-weight: 600;
//     font-size: .8em;
//     padding: .05em .09em;
//     cursor: pointer;
//     margin: 0em 0 0 .8em;
// `
// const Signup_link = styled.p`
//     text-decoration: none;
//     color: #3897f0;
//     font-weight: 600;
//     font-size: .8em;
//     padding: .05px .09em;
//     cursor: pointer;
//     margin: 0.15em 0 0 .1em ;
// `
// `    
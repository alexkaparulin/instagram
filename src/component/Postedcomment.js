import React,{Component} from 'react'
import styled from 'styled-components'

class Postedcomment extends Component{
    

render(){
    return(
        <Container>
            <Username><strong>{this.props.name}</strong></Username>
            {this.props.children}
        </Container>
    )
}
}

export default Postedcomment

const Container = styled.div`
    display:flex;
    /* border:0.1em solid green; */
    align-items:center;
    justify-content:flex-start;
    height:2em;
    font-size:0.7em;
    margin:0.5em 0 0.5em 0;
    `
const Username = styled.p`
    margin-right:0.3em;
`
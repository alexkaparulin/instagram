import React,{Component} from 'react'
import styled from 'styled-components'



class Comment extends Component{
    
    render(){
        return(
        <Container>
            <Likes>143 likes</Likes>
            <UserName>
                <Id></Id>
                <Name>{this.props.name}</Name>
            </UserName>
        </Container>
        )
    }
}
export default Comment

const Container = styled.div`
    display:flex;
    flex-direction:column;
    border:.1em solid blue;
`
const Likes =styled.p`
    font-size:0.8em;
    font-weight: 600;
` 
const UserName =styled.div`
    display:flex;
`   
const Id= styled(Likes)``
const Name= styled.p``
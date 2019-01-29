import React,{Component} from 'react'
import styled from 'styled-components'

class Profileclasses extends Component{
    render(){
        return(
            <BoxFollowers>
                <Posts>
                  <Num>250</Num>
                  <Class>posts</Class>
                </Posts>    
                <Followers>
                  <Num>23503</Num>
                  <Class>followers</Class>
                </Followers>    
                <Following>
                  <Num>347</Num>
                  <Class>following</Class>
                </Following>   
              </BoxFollowers>
        )
    }
}
export default Profileclasses

const BoxFollowers = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:4em;
    border-bottom:.1em solid #f5f5f2; 
    border-top:.1em solid #f5f5f2; 
    width:100%;
    /* padding:0.2em 1em; */
    @media (min-width: 40em) {
       /* width:100%; */
    }
`
const Posts = styled.div`
    display:flex;
    flex-direction:column;
    padding:0.2em;
    align-items:center;
    justify-content:center;
`
const Followers = styled.div`
    margin:0 3em;
    display:flex;
    flex-direction:column;
    padding:0.2em;
    align-items:center;
    justify-content:center;
`
const Following = styled.div`
    display:flex;
    flex-direction:column;
    padding:0.2em;
    align-items:center;
    justify-content:center;
`
const Num = styled.p`
    margin-bottom:-1em;
    font-size:0.9em;
    font-weight:600;
    justify-self:center;
`
const Class = styled.p`
    color:gray;
    font-size:0.9em;
`
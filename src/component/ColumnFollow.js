import React,{Component} from 'react'
import styled from 'styled-components'

import griz from '../media/griz.jpg'

class Columnfollow extends Component{


    render(){
        return(
        <Story>
            <SImg src={griz}></SImg>
            <StoryData>
                <Userid>LoremIspsum</Userid>
                <Followed>Followed by kku50 + 4 more</Followed>
            </StoryData>
            <Follow>Follow</Follow>
        </Story>
        )
    }
}
export default Columnfollow

const Story = styled.div`
      display:flex;
      align-items:center;
      margin:1.5em 0;
      height:100%;
`
const SImg = styled.img`
      height:2em;
      width:2em;
      border-radius:100%;
      border:.1em solid red;
      margin-right:0.5em;
`
const StoryData = styled.div`
      display:flex;
      flex-direction:column;
`
const Userid = styled.p`
      font-size:0.8em;
      font-weight:600;
`
const Followed = styled.p`
      color:gray;
      font-size:0.7em;
      margin-top:-1em;
`
const Follow = styled.p`
     color:#3897f0;
     align-self: center;
     margin-left:3em;
     font-size:0.8em;
     font-weight:600;
`
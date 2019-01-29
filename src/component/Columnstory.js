import React,{Component} from 'react'
import styled from 'styled-components'

import bolt from '../media/bolt.jpg'

class Columnstory extends Component{


    render(){
        return(
        <Story>
            <SImg src={bolt}></SImg>
            <StoryData>
                <Userid>LoremIspsum</Userid>
                <Time>10 Minutes Ago</Time>
            </StoryData>
        </Story>
        )
    }
}
export default Columnstory

const Story = styled.div`
      display:flex;
      align-items:center;
      margin:1.5em 0;
      height:100%;
      `
const SImg = styled.img`
      height:2em;
      border-top:0.15em solid #b266b2;
      border-right:0.15em solid  #a64ca6;
      border-bottom:0.15em solid #ffd27f;
      border-left:0.15em solid #ffae19;
      width:2em;
      border-radius:100%;
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
const Time = styled.p`
      color:gray;
      font-size:0.7em;
      margin-top:-1em;
`
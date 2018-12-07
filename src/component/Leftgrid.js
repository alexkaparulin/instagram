import React,{Component} from 'react';
import styled from 'styled-components';
import maccabi2 from '../media/maccabi2.jpg';
import ballon from '../media/ballon.jpg';
import assassin from '../media/assassin.jpg';



class Leftgrid extends Component{
  
render(){
    return(
                <Grid>
                    <BigBox>
                        <Big src={maccabi2}></Big>
                    </BigBox>    
                    <SmallBox>
                        <Small src={ballon}></Small>
                        <Small src={assassin}></Small>
                    </SmallBox>
                </Grid>
        )
    }
}
export default Leftgrid

const Grid= styled.div`
    display:flex;
    flex-direction:row;
    height:14em;
    width:21em;
    /* border:0.1em solid red; */
    margin-bottom:0.06em;
    margin-left:0.12em;
    margin-top:0.12em;
`
const BigBox = styled.div`
   height:99%;
   width:66.1%;
   margin-right:0.12em;
`
const Big = styled.img`
    height:100%;
    width:100%;
`
const Small = styled.img`
    height:49%;
    width:99.6%;
    margin-bottom:0.12em;
`
const SmallBox = styled.div`
    display:flex;
    flex-direction:column;
    /* border:.1em solid green; */
    height:100%;
    width:33%;
`

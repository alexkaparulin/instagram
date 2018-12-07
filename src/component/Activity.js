import React,{Component} from 'react';
import styled from 'styled-components';
import Likenotification from './Likeontification';
import Bottomnav from './Bottomnav';

class Activity extends Component{
  
render(){
    return(
       <BoxContain>
            <Top>
                <Text>Activity</Text>
            </Top>
            <Div>
            <Likenotification user="TarikBlack" time="2m"/>
            <Likenotification user="Loremipsum" time="4m"/>
            <Likenotification user="DonffLogen4" time="5m"/>
            <Likenotification user="DonffLogen4" time="12m"/>
            <Likenotification user="DonffLogen4" time="17m"/>
            <Likenotification user="DonffLogen4" time="17m"/>
            <Likenotification user="DonffLogen4" time="20m"/>
            <Likenotification user="Donff3333Logen4" time="24m"/>
            <Likenotification user="DonffLogen4" time="47m"/>
            <Likenotification user="DonffLogen4" time="37m"/>
            <Likenotification user="DonffLogen4" time="47m"/>
            </Div>
            <Bottomnav />
       </BoxContain>
        )
    }
}
export default Activity

const BoxContain = styled.div`
    display:flex;
    flex-direction:column;
    background:white;
`
const Top = styled.div`
    height:2.5em;
    border-bottom:.1em solid  #f5f5f2;
    background:white;
    display:flex;
    align-items:center;
    justify-content:center;
    position:sticky;
    top:0;
    z-index:1;
`
const Text = styled.p`
    font-weight:400;
`
const Div = styled.div`
    display:flex;
    flex-direction:column;
`
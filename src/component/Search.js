import React,{Component} from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import Bottomnav from './Bottomnav';

import Leftgrid from './Rightgrid';
import Rightgrid from './Leftgrid';
import Flexgrid from './Flexgrid';
import Carusel from './Carusel';

class Search extends Component{
  
    render(){
        return(
            <BoxContainer>
                <SearchBox>
                    <Input type="text" placeholder="Search" className="search"></Input>
                </SearchBox>  
                <SliderBox>
                    <Carusel />
                </SliderBox>
                <Grid>    
                    <Rightgrid />
                    <Flexgrid />
                    <Leftgrid />
                    <Flexgrid />
                    <Rightgrid />
                    <Flexgrid />
                    <Leftgrid />
                    <Flexgrid />
                </Grid>  
                <Bottomnav/>
            </BoxContainer>
        )
    }
}
export default Search;

const BoxContainer = styled.div`
    display:flex;
    flex-direction:column;
    background:white;
`
const SearchBox = styled.div`
    height:2.75em;
    display:flex;
    align-items:center;
    justify-content:center;
    background:whitesmoke;
    border-bottom:0.1em solid lightgray;
`
const Input = styled.input`
    background:white;
    border:0.05em solid lightgray;
    border-radius:.5em;
    height:2em;
    width:90%;
    outline:none;
`
const SliderBox =styled.div`
    display:flex;
    background:white;
    align-items:center;
    justify-content:space-around;
    margin:0 0.2em;
`
const Grid = styled.div`
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
` 
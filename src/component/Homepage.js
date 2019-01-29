import React,{Component} from 'react'
import styled from 'styled-components'

import Topbar from './Topbar'
import Links from './Links'
import { Link } from 'react-router-dom';

import Stories from './Stories';
import Post from './Post';
import office from '../media/trumpoffice.jpg'
import show from '../media/garrixshow.jpg'
import imageid from '../media/userimage.jpg'
import garrix from '../media/martin.jpg'
import cardi from '../media/cardi.jpg'
import prize from '../media/prizecardi.jpg'
import zuck from '../media/zuck.jpg'
import mark from '../media/mark.jpg'
import brady from '../media/bardy.jpg'
import superbowl from '../media/superbowl.jpg'
import userPic from '../media/Marsh.jpg'
import Columnstory from './Columnstory';
import Columnfollow from './ColumnFollow';



class Homepage extends Component{
    constructor(props){
        super(props);
        this.state = {
            original_list:[],
            profile_data: {}
        }
    }
    componentDidMount() {
       
         fetch('/api/user')
            .then( response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error('Network response disabled.');
            })
            .then( data => {
                let i = `${data.allUsers.length}`;
                this.setState({
                    original_list: data,
                    profile_data: data.allUsers[i-1]
                });
            })
            .catch( error => {
                console.error(`fetch failed: ${error.message}`);
            }); 
    }
    render(){
        return(
        <BoxCon>
            {/* <Topbarhome /> */}
            <Topbar><Links/></Topbar>
            <RowBox>
                <ContentBox>
                    <Stories />
                    <Post time ="2 MINUTES AGO" id="MarinGarrix" src={show} userphoto={garrix} username="MartinGarrix" title="Here we go again"/>
                    <Post time="5 MINUTES AGO" id="DonaldTrump" src={office} userphoto={imageid} username="DonaldTrump" title="I'm not angry..."/>
                    <Post time ="6 MINUTES AGO" id="CardiB" src={prize} userphoto={cardi} username="CardiB" title="Papparazi.."/>
                    <Post time ="9 MINUTES AGO" id="Brady" src={superbowl} userphoto={brady} username="Brady" title="WE MADE IT AGAIN!!!!!"/>
                    <Post time ="12 MINUTES AGO" id="Zuckerbeg" src={zuck} userphoto={mark}  username="Zuckerberg" title="First VR meeting"/>
            {/* <Bottomnav/> */}
                </ContentBox>
                <RightBox>
                    <UserBox>
                        <Img src={userPic}></Img>
                        <UserData>
                            {/* <Userid>{this.state.profile_data.username}</Userid> */}
                            <Userid>Marshmello</Userid>
                            {/* <UserName>{this.state.profile_data.fullname}</UserName> */}
                            <UserName>DJ Marshmello</UserName>
                        </UserData>
                    </UserBox>
                    <UserStories>
                        <TeBox>
                            <Textgray>Stories</Textgray>
                            <Link to="/stories"><Text>Watch All</Text></Link>
                        </TeBox> 
                        <PeopleStories>
                            <Columnstory />
                            <Columnstory />
                            <Columnstory />
                            <Columnstory />
                            <Columnstory />
                            <Columnstory />
                            <Columnstory /> 
                        </PeopleStories>
                    </UserStories>
                    <UserFollow>
                        <TeBox>
                            <Textgray>Suggestions For You</Textgray>
                            <Text>See All</Text>
                        </TeBox> 
                        <PeopleFollowers>
                           <Columnfollow/>
                           <Columnfollow/>
                           <Columnfollow/>
                        </PeopleFollowers>
                    </UserFollow>
                </RightBox>
            </RowBox>
        </BoxCon>
        )
    }
}
export default Homepage

const BoxCon = styled.div`
    display:flex;
    flex-direction:column;
    background:whitesmoke;
    /* width:100%; */
`
const ContentBox = styled.div`
    display:flex;   
    flex-direction:column;
    align-items:center;
    margin-top:2em;
`
const RowBox = styled.div`
    display:inline;
    @media (min-width: 60em) {
    display: flex;
      }
`
const RightBox = styled.div`
    display: none;
    @media (min-width: 60em) {
    display: flex;
    flex-direction:column;
    width:20em;
    height:35em;
    margin-top:3em;
    position:sticky;
    top:5em;
      }
`
const UserBox = styled.div`
    display:flex;
    height:3em;
    /* border:0.1em solid red; */
    align-items:center;
    margin-bottom:1em;
    /* border-radius:0.6em; */
`
const Img = styled.img`
      height:3em;
      width:3em;
      border-radius:100%;
`
const UserData = styled.div`
      display:flex;
      flex-direction:column;
      justify-content:center;
      /* align-items:center; */
      margin-left:1em;
`  
const UserName = styled.p`
     font-size:0.9em;
     margin-top:-1em;
     font-weight:100;
`
const Userid = styled.p`
      font-size:0.9em;
      font-weight:600;
`
const UserStories = styled.div`
    display: flex;
    flex-direction:column;
    padding-left:1em;
    height:15em;
    /* border:0.1em solid red; */
    margin-bottom:1em;
    border:0.1em solid lightgray;
    border-radius:0.3em;
    background:white;
    /* box-shadow: 0 8px 6px -6px black; */
`
const PeopleStories = styled.div`
      display:flex;
      flex-direction:column;
      overflow-y:scroll;
`
const UserFollow = styled.div`
    display:flex;
    height:12em;
    border:0.1em solid lightgray;
    border-radius:0.3em;
    /* box-shadow: 0 8px 6px -6px black; */
    padding-left:1em;
    flex-direction:column;
    background:#fff;
`
const PeopleFollowers = styled.div`
      display:flex;
      flex-direction:column;
`
const TeBox = styled.div`
    display:flex;  
    justify-content:space-between;
    align-items:center;
    width:100%;
    /* margin-left:-12em; */
    margin:0.5em 0 0.5em -1em;
    position:sticky;
    height:5em;
    top:0;
    /* border:0.2em solid red; */
`
const Text = styled.p`
    font-size:0.7em;
    font-weight:600;
    margin:0.5em 1em; 
    color:black;
`
const Textgray = styled(Text)`
    color:grey;
    font-size:0.9em;
`
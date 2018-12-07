import React,{Component} from 'react'
import styled from 'styled-components'

// import Bottomnav from './Bottomnav'
import Topbar from './Topbar'
import Links from './Links'
// import Topbarhome from './Topbarhome';
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

class Homepage extends Component{
    render(){
        return(
        <BoxCon>
            {/* <Topbarhome /> */}
            <Topbar><Links/></Topbar>
            <Stories />
            <Post time="1 MINUTES AGO" id="DonaldTrump" src={office} userphoto={imageid} username="DonaldTrump" title="I'm not angry... #angry #whitehouse"/>
            <Post time ="4 MINUTES AGO" id="MarinGarrix" src={show} userphoto={garrix} username="MartinGarrix" title="Thank you all!! :-)"/>
            <Post time ="6 MINUTES AGO" id="CardiB" src={prize} userphoto={cardi} username="CardiB" title="Papparazi.."/>
            <Post time ="9 MINUTES AGO" id="Brady" src={superbowl} userphoto={brady} username="Brady" title="WE MADE IT AGAIN!!!!!"/>
            <Post time ="12 MINUTES AGO" id="Zuckerbeg" src={zuck} userphoto={mark}  username="Zuckerberg" title="First VR meeting"/>
            {/* <Bottomnav/> */}
        </BoxCon>
        )
    }
}
export default Homepage

const BoxCon = styled.div`
    display:flex;
    flex-direction:column;
    background:white;
`
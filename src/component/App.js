// require('dotenv').config();
import React from 'react';
import {
    Route,BrowserRouter
} from 'react-router-dom';

import Login from '../component/Login';
import Signup from './Signup';
import Username from './Username';
import Homepage from './Homepage';
import Search from './Search';
import Activity from './Activity';
import Watchall from './WatchAll';
import Davidstory from './Davidstory';
import Martinstory from './Martinstory';
import Trumpstory from './Trumpstory';
import Cardistory from './Cardistory';
import Travisstory from './Travisstory';
import Bradystory from './Bradystory';
import Shaqstory from './Shaqstory';
import Zuckstory from './Zuckstory';

// const API_URL = process.env.REACT_APP_API_URL

const App = ()=> (
        <BrowserRouter>
            <div className="main-app">
                {/* <TopBar><Links/></TopBar> */}
                <Route exact path="/" component={Login}></Route>
		        <Route path="/username" component={Username}></Route>
		        <Route path="/login" component={Login}></Route> 
		        <Route path="/signup" component={Signup}></Route>
		        <Route path="/homepage" component={Homepage}></Route>
		        <Route path="/search" component={Search}></Route>
		        <Route path="/activity" component={Activity}></Route>
		        <Route path="/stories" component={Watchall}></Route>
		        <Route path="/davidstory" component={Davidstory}></Route>
		        <Route path="/martinstory" component={Martinstory}></Route>
		        <Route path="/trumpstory" component={Trumpstory}></Route>
		        <Route path="/cardistory" component={Cardistory}></Route>
		        <Route path="/travisstory" component={Travisstory}></Route>
		        <Route path="/bradystory" component={Bradystory}></Route>
		        <Route path="/shaqstory" component={Shaqstory}></Route>
		        <Route path="/zuckstory" component={Zuckstory}></Route> 
            </div>
        </BrowserRouter>
)
export default App;
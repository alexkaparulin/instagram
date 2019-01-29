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
            </div>
        </BrowserRouter>
)
export default App;
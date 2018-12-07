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
            </div>
        </BrowserRouter>
)
export default App;
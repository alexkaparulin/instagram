import React from 'react';
import {
    BrowserRouter,
    HashRouter,
    Route
} from 'react-router-dom';

import TopBar from './component/Topbar'; 
import Links from './component/Links';
import Homepage from './component/Homepage';
import Signup from './component/Signup';
import Explore from './component/Explore';

const App = ()=> (
            <div className="main-app">
                <TopBar><Links /></TopBar>
                <Route exact path="/"  render={ ()=>  <Homepage />  }/>
                <Route path="/explore" component={Explore}></Route>
                {/* <Route path="/" component={Likes}></Route> */}
		        {/* <Route path="/username" component={Username}></Route>
		        <Route path="/login" component={Login}></Route> */}
		        <Route path="/signup" component={Signup}></Route>
            </div>
)
export default App;
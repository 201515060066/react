import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route ,Switch,Redirect} from 'react-router-dom'
import Login from './components/login';
import Register from './components/register';
import Zhuye from './components/zhuye';


class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Switch>
              <Route path='/login' component={Login}></Route>
              <Route path='/register' component={Register}></Route>
              <Route path='/zhuye' component={Zhuye}></Route>
              <Redirect to='/zhuye'/>
            </Switch>
          </div>
        </Router>      
    );
  }
}

export default App;

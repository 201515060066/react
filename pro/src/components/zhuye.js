import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Zhuye extends Component {
  
    render(){
        return(
            <div>
                <h1>Zhuye</h1>
                <Link to='/login'>登录</Link>
                <Link to='/register'>注册</Link>
                <Link to='/demo'>首页</Link>
            </div>
        )
    }

}
export default Zhuye;
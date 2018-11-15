import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
  
    render(){
        return(
            <div>
                <h1>login</h1>
                <p>用户名:<input type='text'/></p>
                <p>密码:<input type='text'/></p>
                <button>登录</button>
            </div>
        )
    }

}
export default Login;
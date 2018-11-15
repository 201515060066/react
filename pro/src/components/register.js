import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Register extends Component {
	
	
    render(){
        return(
            <div>
                <h1>Register</h1>
                <p>用户名:<input type='text'/></p>
                <p>密码:<input type='text'/></p>
                <p>邮箱:<input type='text'/></p>
                <button>注册</button>
            </div>
        )
    }

}
export default Register;
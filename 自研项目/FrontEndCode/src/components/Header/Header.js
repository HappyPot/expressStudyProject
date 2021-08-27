import React, { Component } from 'react';
import './Header.css';
import { getToken } from '../../until/auto' // 引入
import {message} from 'antd';

class Header extends Component {
  state = {userInfo:{}}
  async componentDidMount(){
    let token = getToken()
   let result =  await fetch('http://localhost:3000/api/user', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        "Authorization":token
      },
    })
   let data = await result.json()
   debugger
   if(data.code === 200){
   this.setState({
    userInfo:data.data[0]
   })  
   }else{
    message.error(data.msg);
   }
  }
  render() {
    let {userInfo} = this.state
    return (
      <div>
          我是{userInfo.name}
      </div>
    );
  }
}

export default Header;

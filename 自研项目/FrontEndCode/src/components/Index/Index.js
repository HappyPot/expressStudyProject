import React, { Component } from 'react';
import './Index.css';
import { Layout, Menu,  } from 'antd';
import {Route,Switch,Redirect} from 'react-router-dom';
import { getToken } from '../../until/auto' // 引入
import {message} from 'antd';
import Article from '../Article/Article';
// import user from '../../containers/user'

const { Header, Footer} = Layout;
class Index extends Component{
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
   if(data.code === 200){
   this.setState({
    userInfo:data.data[0]
   })  
   }else{
     let e= data.error
    if(e.indexOf('UnauthorizedError')>-1){
      this.props.history.push({ pathname:'/home'})
    }else{
      message.error(data.msg);
    }
   }
  }
  article(){
    this.props.history.push( { pathname:'/index'})
  }
  render() {
    let {userInfo} = this.state
    return (
      <Layout className="layout">
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" onClick={this.article}>文章</Menu.Item>
            </Menu>
            <div className="userInfo">用户名：{userInfo.name}</div>
          </Header>
          <Switch>
              <Route path='/index/article' component={Article} {...this.props}/>
              <Redirect to="/index/article"/>
          </Switch>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
  }
}
export default Index;
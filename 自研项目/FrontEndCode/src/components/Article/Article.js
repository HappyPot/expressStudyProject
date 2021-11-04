import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {Route,Switch,Redirect, NavLink} from 'react-router-dom';

import './Article.css';
import ArticleEdit from '../ArticleEdit/ArticleEdit'
import ArticleList from '../ArticleList/ArticleList'
const { SubMenu } = Menu;
const {Content,Sider } = Layout;
class Article extends Component {
  state = {menunumSelect:['1']}
  render() {
    let {menunumSelect} = this.state
    return (
      <Content style={{ padding: '0 50px' }}>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={menunumSelect}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="文章录入">
              <Menu.Item key="1">
                <NavLink to="/index/article/articleedit">文章编辑</NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/index/article/articlelist">文章列表</NavLink>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 700 }}>
          <Switch>
            <Route path="/index/article/articleedit" component={ArticleEdit}/>
            <Route path="/index/article/articlelist" component={ArticleList}/>
            <Redirect to="/index/article/articleedit"/>
          </Switch>
        </Content>
      </Layout>
    </Content>
    );
  }
}

export default Article;

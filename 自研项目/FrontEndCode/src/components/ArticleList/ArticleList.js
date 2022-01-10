import React, { Component } from 'react';
import { getToken } from '../../until/auto' // 引入
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import './ArticleList.css';

const { Meta } = Card;
class ArticleList extends Component {
  state = {
    content:[]
  }
  async componentDidMount(){
    let token = getToken()
    const response = await fetch('http://localhost:3000/api/articles/getArticleList', {
      method: 'POST',
      mode: 'cors',
      // headers: {
      //   'Content-Type': 'application/json',
      //   "Authorization":token
      // },
      body: JSON.stringify({
        userid:16,
      })
    })
    let data = await response.json()
    debugger
    this.setState({
      content: data.data
    })
  }
  render() {
    let artileList = this.state.content.map((item,index)=>{
        // return <span key={index} dangerouslySetInnerHTML={{__html: item.content}}></span>
        return <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src={item.img}
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
    })
    return (
      <div className="card_group">
          {
          artileList
          }
      </div>
    );
  }
}

export default ArticleList;

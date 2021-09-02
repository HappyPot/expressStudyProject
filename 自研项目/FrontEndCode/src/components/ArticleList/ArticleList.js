import React, { Component } from 'react';
import { getToken } from '../../until/auto' // 引入

class ArticleList extends Component {
  state = {
    content:[]
  }
  async componentDidMount(){
    let token = getToken()
    const response = await fetch('http://localhost:3000/api/articles/getArticleList', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        "Authorization":token
      },
      body: JSON.stringify({
        userid:16,
      })
    })
    let data = await response.json()
    this.setState({
      content: data.data
    })
  }
  render() {
    let artileList = this.state.content.map((item,index)=>{
        return <span key={index} dangerouslySetInnerHTML={{__html: item.content}}></span>
    })
    return (
      <div>
          {
          artileList
          }
      </div>
    );
  }
}

export default ArticleList;

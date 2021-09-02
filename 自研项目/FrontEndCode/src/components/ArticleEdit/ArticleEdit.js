import React, { Component } from 'react';
import './ArticleEdit.css';
import {Button,message} from 'antd';
import { Editor } from '@tinymce/tinymce-react'; 
import { getToken } from '../../until/auto' // 引入


class ArticleEdit extends Component {
  
  state = {content:''}

  handleEditorChange = (e) => {
    this.setState({
      content:e.target.getContent()
    })
  }
  submit= async ()=>{
    let token = getToken()
    try{
      const response = await fetch('http://localhost:3000/api/articles/AddArticle', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          "Authorization":token
        },
        body: JSON.stringify({
          userid:16,
          content:this.state.content,
        })
      })
      const data = await response.json()
      if(data.msg !== 'success'){
        message.error(data.msg);
      }else{
        message.success('添加成功')
      }
    }catch(e){
      if(e.indexOf('UnauthorizedError')>-1){
        this.props.history.push({ pathname:'/home'})
      }else{
        message.error(e);
      }
    }
  }
  render() {
    return (
      <div>
         <Editor
          initialValue="<p>Initial content</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image', 
              'charmap print preview anchor help',
              'searchreplace visualblocks code',
              'insertdatetime media table paste wordcount'
            ],
            toolbar:
              'undo redo | formatselect | bold italic | \
              alignleft aligncenter alignright | \
              bullist numlist outdent indent | help'
          }}
          onChange={this.handleEditorChange}
      />
       <Button type="primary" onClick={this.submit}>Primary Button</Button>
      </div>
    );
  }
}

export default ArticleEdit;

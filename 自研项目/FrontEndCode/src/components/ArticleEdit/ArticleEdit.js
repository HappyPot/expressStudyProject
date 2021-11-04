import React, { Component } from 'react';
import './ArticleEdit.css';
import {Button,message,Spin,Result,Upload} from 'antd';
import { Editor } from '@tinymce/tinymce-react'; 
import { getToken } from '../../until/auto' // 引入
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

class ArticleEdit extends Component {
  
  state = {content:'',isLoading:true,isSuccess:false,loadingAvatar:false}

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
        this.setState({
          isSuccess:true
        })
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
  resetStatus = ()=>{
    this.setState({
      isSuccess:false
    })
  }
  handleChange = info => {
    debugger
    // if (info.file.status === 'uploading') {
    //   this.setState({ loading: true });
    //   return;
    // }
    // if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) =>{
        console.log(imageUrl)
        this.setState({
          imageUrl,
          loading: false,
        })
      }
      );
    // }
  };
  render() {
    let {isSuccess,loadingAvatar, imageUrl } = this.state
    const uploadButton = (
      <div>
        {loadingAvatar ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    setTimeout(() => {
      this.setState({
        isLoading:false
      })
    }, 4000);
   const content = this.state.isLoading?<Spin className="loading" tip="加载组件中..." />:
   (<div>
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
      <Button type="primary" className="btn_submit" onClick={this.submit}>提交</Button></div>)

    return (
      <div className="ArticleEdit">
        <div className="upload">
          <div>封面上传：</div>
          <div>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="#"
            beforeUpload={() => false}
            onChange={this.handleChange}
          >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
          </Upload>
          </div>
        </div>
        
        {
          isSuccess?<Result
          status="success"
          title="Successfully Purchased"
          extra={[
            <Button type="primary" key="console" onClick={this.resetStatus}>
              返回
            </Button>
          ]}
        />:content
        }
      </div>
    );
  }
}

export default ArticleEdit;

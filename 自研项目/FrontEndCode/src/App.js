import React, {
  Component
} from 'react';
import './App.css';
// import Header from './components/Header/Header'
import { Form, Input, Button,message} from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 12,
    span: 16,
  },
};
class App extends Component {
  formRef = React.createRef();
  onFinish = async (values) => {
    try{
      const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name:values.name,
          password:values.password
        })
      })
      const data = await response.json()
      if(data.msg !== 'success'){
        message.error(data.msg);
      }else{
        message.success('注册成功')
      }
    }catch(e){
      message.error(e);
    }
 
  };
  login = async (values) => {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name:values.name,
          password:values.password
        })
      })
      const data = await response.json()
      if(data.msg !== 'success'){
        message.error(data.msg);
      }else{
        message.success('登录成功')
      }
    
  
  };
  render() {
    return (
      <div className="ceshi">
         <Form {...layout} ref={this.formRef}  onFinish={this.onFinish}>
        <Form.Item
          name="name"
          label="用户名"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="密码"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
          <Button type="primary"  onClick={this.login.bind(this)}>
            登录
          </Button>
        </Form.Item>
      </Form>
      </div>
    );
  }
}

export default App;
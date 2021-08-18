import React, {
  Component
} from 'react';
import './App.css';
// import Header from './components/Header/Header'
import { Form, Input, Button,message  } from 'antd';
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
      }
    }catch(e){
      message.error(e);
    }
 
  };
  onReset = () => {
    this.formRef.current.resetFields();
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
            Submit
          </Button>
          <Button htmlType="button" onClick={this.onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
      </div>
    );
  }
}

export default App;
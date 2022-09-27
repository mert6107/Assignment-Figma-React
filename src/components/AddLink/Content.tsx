import React, { useEffect, useState } from 'react'
import { Button, Form, Input } from 'antd';
import '../../styles/AddLink/Content.css'
import {Data} from '../DataList'
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Content() {
  const [items, setItems] = useState<any>(Data);
  const [form] = Form.useForm();
  const [btndisabled, setbtndisabled] = useState(true);


  const notify = () => {
    console.log("clicked")
    
  }
  const onFinish = (values: any) => {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let totally = `${date}/${month}/${year}`
    const merged = [values.name,values.company,values.email,totally,values.country,values.city]
    let test = Data.concat([merged])
    setItems(test)
    console.log("baslangıc",test)

  }
const onFinishFailed = (errorInfo: any) => {
    const errorMessage = errorInfo['errorFields'][0]['errors'][0] || ''
    toast.error(`${errorMessage}`, {
      className: 'toast-not',
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      })
};
const onValuesChange = (changedValues:any, allValues:any) => {

  if ( allValues.username != undefined && allValues.password != undefined && allValues.username != '' && allValues.password != '') {
    setbtndisabled(false);
  } else {
    setbtndisabled(true);
  }
  console.log(btndisabled);
};
  return (
    <div>
       <Form
       form={form}
  className='addForm'
  name="basic"
  labelCol={{ span: 8 }}
  wrapperCol={{ span: 16 }}
  initialValues={{ remember: true }}
  onFinish={onFinish}
  onFinishFailed={onFinishFailed}
  autoComplete="off"
  onValuesChange={onValuesChange}
>
  <Form.Item
    className='label'
    label="Name Surname"
    name="name"
    rules={[{ required: true, message: 'Please input name and surname!' },
    {min: 4, message:'Name and surname should contain at least 4 words'},
    {max: 7, message:'Name and surname should contain at max 60 words'}
  ]}
  >
    <Input placeholder='Enter name and surname'/>
  </Form.Item>

  <Form.Item
  className='label'
    label="Company"
    name="company"
    rules={[
      { required: true, message: 'Please input company!' },
    {min: 4, message:'Country should contain at least 4 words'}
  ]}
  >
    <Input placeholder='Enter a city'/>
  </Form.Item>
  <Form.Item
  className='label'
    label="Country"
    name="country"
    rules={[{ required: true, message: 'Please input country!' },
    {min: 2, message:'Country should contain at least 2 words'},
    {max: 40, message:'Country should contain at max 40 words'}]}
  >
    <Input placeholder='Enter a country'/>
  </Form.Item>
  <Form.Item
  className='label'
    label="City"
    name="city"
    rules={[{ required: true, message: 'Please input city!' },
    {min: 2, message:'City should contain at least 2 words'},
    {max: 40, message:'City should contain at max 40 words'} 
  ]}
  >
    <Input placeholder='Enter a city'/>
  </Form.Item>
  <Form.Item
  className='label'
        name="email"
        label="Email"
        rules={[
          {
            type: 'email',
            required: true,
            message: 'Please input e-mail!'
          },
        ]}
      >
        <Input placeholder='Enter a e-mail (abc@xyz.com)'/>
      </Form.Item>
  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
    <Button onClick={()=>notify()} className='addButtonn' type="primary" htmlType="submit" disabled={btndisabled}>
      Add
    </Button>
  </Form.Item>
</Form>
<ToastContainer
/>
    </div>
  )
}

export default Content
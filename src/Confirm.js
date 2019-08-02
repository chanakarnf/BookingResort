import React ,{Component} from 'react';
import "antd/dist/antd.css";
import { Form,  Input, Button, Select } from 'antd';
import ImageUpload from './Component/ImageUpload';
const { Option } = Select;
class Confirm extends React.Component{ 
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            // db.collection("Booking").add({
               
               
            // })
          }
        });
    };
    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 7 },
          };
          const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '+66',
          })(
            <Select style={{ width: 70 }}>
              <Option value="08">+66</Option>
            </Select>,
          );
        return (
            <div>
                <div> ยืนยันการชำระเงิน </div>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        <Form.Item label="ชื่อผู้จอง :" hasFeedback >
                            {getFieldDecorator('name', {
                                rules: [{ required: true, message: 'Please input your name!' }],
                            })(<Input />)}
                        </Form.Item>
                
                <Form.Item label="เบอร์ติดต่อ :" hasFeedback>
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: 'Please input your phone number!' }],
                        })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                </Form.Item>  
                <Form.Item label="อัพโหลดหลักฐานการชำระเงิน :" >
                        {getFieldDecorator('upload', {
                    valuePropName: 'fileList',
                    getValueFromEvent: this.normFile,
                    })(
                    <ImageUpload returnImageUrl={this.ImageLink} />
                    )}
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                </Form.Item>
                </Form>
            </div>    
            )
        }
    }
export default Form.create()(Confirm);
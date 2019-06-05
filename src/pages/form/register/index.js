import React from 'react';
import { Card, Form,message, Icon, Input, Button,  Radio, DatePicker, TimePicker, Upload, InputNumber, Select, Switch, Checkbox } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const RadiogGroup = Radio.Group;
const { Option } = Select;
const TextArea = Input.TextArea;
class FormRegister extends React.Component {
    constructor(){
        super();
        this.state = {
            imageUrl:'',
            loading: true
        }
    }
        
    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };
    handleRegister=()=>{
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values) =>{
           if(!err){
               console.log(userInfo)
            message.success(`${userInfo}`)
           } 
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm:{
                    span:4,
                } 
            },
            wrapperCol: {
                xs: 24,
                sm:{
                    span:18,
                } 
            }
        }
        const offsetLayout = {
            wrapperCol:{
                xs:24,
                sm:{
                    span:18,
                    offset:4
                }
            }
        }
        return (
            <div>
                <Card title="注册表单">
                    <Form  {...formItemLayout}>
                        <Form.Item label="用户名">
                            {
                                getFieldDecorator('username', {
                                    initialValue: '',//input默认值
                                    rules: [{ required: true, message: '请输入用户名' },
                                    { min: 5, message: "长度不在范围内" }]
                                })(
                                    <Input prefix={<Icon type='user' />} placeholder="用户名" />
                                )
                            }
                        </Form.Item>
                        <Form.Item label="密码">
                            {
                                getFieldDecorator('password', {
                                    initialValue: '',//input默认值
                                    rules: [{ required: true, message: '请输入密码' }]
                                })(
                                    <Input prefix={<Icon type='lock' />} placeholder="密码" />
                                )
                            }
                        </Form.Item>
                        <Form.Item label="性别">
                            {
                                getFieldDecorator('sex', {
                                    initialValue: '0',
                                })(
                                    <RadiogGroup>
                                        <Radio value='0'>男</Radio>
                                        <Radio value='1'>女</Radio>
                                    </RadiogGroup>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="年龄">
                            {
                                getFieldDecorator('age', {
                                    initialValue: 18,
                                })(
                                    <InputNumber placeholder="年龄" />
                                )
                            }
                        </Form.Item>
                        <Form.Item label="当前状态">
                            {
                                getFieldDecorator('state', {
                                    initialValue: '1',
                                })(
                                    <Select style={{ width: '120px' }}>
                                        <Option value="0">状态1</Option>
                                        <Option value="1">状态2</Option>
                                        <Option value="2">状态3</Option>
                                    </Select>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="爱好">
                            {
                                getFieldDecorator('favorite', {
                                    initialValue: ['0', '3'],
                                })(
                                    <Select mode="multiple" >
                                        <Option value="0">游泳</Option>
                                        <Option value="1">跑步</Option>
                                        <Option value="2">爬山</Option>
                                        <Option value="3">跑步</Option>
                                        <Option value="4">看书</Option>
                                    </Select>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="婚姻状况">
                            {
                                getFieldDecorator('isMarried', {
                                    valuePropName: 'checked',
                                    initialValue: false,
                                })(
                                    <Switch />
                                )
                            }
                        </Form.Item>
                        <Form.Item label="生日">
                            {
                                getFieldDecorator('birthday',{
                                    initialValue:moment('2015-01-01')
                                })(
                                    //showTime控制是否显示选择时分秒
                                    <DatePicker format="YYYY-MM-DD" showTime />
                                )
                            }
                        </Form.Item>
                        <Form.Item label="联系地址">
                            {
                                getFieldDecorator('address')(
                                    <TextArea autosize={{ minRows: 3 }} placeholder="联系地址" />
                                )
                            }
                        </Form.Item>
                        <Form.Item label="早起时间">
                            {
                                getFieldDecorator('time')(
                                    <TimePicker />
                                )
                            }
                        </Form.Item>
                        <Form.Item label="头像">
                            {
                                getFieldDecorator('upload')(
                                    <Upload
                                        listType="picture-card"
                                        className="avatar-uploader"
                                        showUploadList={false}
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        onChange={this.handleChange}
                                    >
                                        {this.state.imageUrl ? <img src={this.state.imageUrl} alt="avatar" /> : <Icon type='plus' />}
                                    </Upload>
                                )
                            }
                        </Form.Item>
                        <Form.Item {...offsetLayout} >
                            {
                                getFieldDecorator('read',{
                                    
                                })(
                                    //showTime控制是否显示选择时分秒
                                    <Checkbox>我已阅读该协议</Checkbox>
                                )
                            }
                        </Form.Item>
                        <Form.Item {...offsetLayout}>
                            <Button onClick={this.handleRegister} type="primary" htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        );
    }
}
export default Form.create()(FormRegister);
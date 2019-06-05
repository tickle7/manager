import React from 'react';
import { Card, Form, Icon, Input, Button,message,Checkbox } from 'antd';

class FormLogin extends React.Component {
    handleSubmit=()=>{
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values) =>{
           if(!err){
            message.success(`用户名：${userInfo.username}，密码${userInfo.password}，记住密码：${userInfo.remember}`)
           } 
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card title="登录水平表单">
                    <Form style={{ width: 300 }}>
                        <Form.Item>
                            {
                                getFieldDecorator('username', {
                                    initialValue: '',//input默认值
                                    rules: [{ required: true, message: '请输入用户名' },
                                    {min:5,message:"长度不在范围内"}]
                                })(
                                    <Input prefix={<Icon type='user' />} placeholder="用户名" />
                                )
                            }

                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password', {
                                    initialValue: '',//input默认值
                                    rules: [{ required: true, message: '请输入密码' },
                                    {pattern:/^[a-z0-9_-]{6,18}$/,message:'密码格式不正确'}
                                ]
                                })(
                                    <Input prefix={<Icon type='lock' />} placeholder="密码" />
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('remember', {
                                    //2个属性都要加 才可以初始化Checkbox
                                    valuePropName:'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a style={{float:'right'}} href="/">忘记密码</a>
                            
                        </Form.Item>
                        <Form.Item>
                            <Button style={{ width: '100%' }} onClick={this.handleSubmit} type="primary" htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        );
    }
}
export default Form.create()(FormLogin);

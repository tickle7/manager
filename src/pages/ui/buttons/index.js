import React from 'react'
import { Card, Button,Radio} from 'antd';
const ButtonGroup = Button.Group;
const RadioGroup = Radio.Group;
export default class Buttons extends React.Component {
    constructor(){
        super()
        this.state = {
            loading: true,
            size:'defualt'
        };
    }
    handleCloseLoading=() =>{
        this.setState({
            loading:!this.state.loading
        })
    }
    handleChange =(e) =>{
        this.setState({
            size:e.target.value 
        })
    }
    render() {
        return (
            <div>
                <Card title="基础按钮" bordered={false}>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                    <Button type="link">Link</Button>
                </Card>
                <Card title="图标按钮">
                    <Button shape="circle" icon="search" />
                    <Button icon="edit">修改</Button>
                    <Button type="primary" icon="plus">新增</Button>
                    <Button type="danger" icon="delete">删除</Button>
                    <Button icon="download">下载</Button>
                    <Button icon="search">查看</Button>
                </Card>
                <Card title="loading按钮">
                    <Button loading = {this.state.loading}>确定</Button>
                    <Button shape="circle" type="primary" loading = {this.state.loading} />
                    <Button type="primary" loading = {this.state.loading}>确定</Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>修改loding状态</Button>
                </Card>
                <Card title="按钮组">
                    <ButtonGroup>
                        <Button type="primary" icon="left">返回</Button>
                        <Button type="primary" icon="right">前进</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button type="primary" icon="cloud" />
                        <Button type="primary" icon="cloud-download" />
                    </ButtonGroup>
                </Card>
                <Card title="按钮尺寸">
                    <RadioGroup onChange={this.handleChange} value={this.state.size}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </RadioGroup>
                    <Button type="primary" size={this.state.size}>Primary</Button>
                    <Button size={this.state.size}>Default</Button>
                    <Button size={this.state.size} type="danger">Danger</Button>
                </Card>
            </div>
        );
    }
}
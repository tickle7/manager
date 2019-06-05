import React from 'react'
import { message, Button } from 'antd';
export default class Messages extends React.Component {
    constructor() {
        super()
        this.state = {

        };
    }
    success (type){
        message[type]('This is a prompt message for success', 3,onClose =>{
            console.log('提示已关闭')
        });
    }
    render() {
        return (
            <div>
                <Button onClick={() =>this.success('success')}>Customized display duration</Button>
                <Button onClick={() =>this.success('info')}>Customized display duration</Button>
                <Button onClick={() =>this.success('warning')}>Customized display duration</Button>
                <Button onClick={() =>this.success('error')}>Customized display duration</Button>
                <Button onClick={() =>this.success('loading')}>Customized display duration</Button>
            </div>
        );
    }
}
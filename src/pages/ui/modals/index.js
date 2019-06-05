import React from 'react'
import { Modal, Button } from 'antd';
const confirm = Modal.confirm;
export default class Modals extends React.Component {
    constructor() {
        super()
        this.state = {
            visible: false
        };
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
    showDeleteConfirm = () => {
        confirm({
            title: 'Are you sure delete this task?',
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    info = () => {
        Modal.info({
            title: 'This is a notification message',
            content: (
                <div>
                    <p>some messages...some messages...</p>
                </div>
            ),
            onOk() { },
        });
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Open Modal
                </Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
                <hr />
                <Button onClick={this.showDeleteConfirm} type="dashed">
                    Delete
                </Button>
                <hr />
                <Button onClick={this.info}>Info</Button>
            </div>
        );
    }
}
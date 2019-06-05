import React from 'react'
import { Card, Table,Button, Modal, message, Badge } from 'antd';
import axios from './../../../axios/index';
import Utils from './../../../utils/utils';

export default class High extends React.Component{
    constructor() {
        super();
        this.state = {
            dataSource: [],
            isloading: true,
            selectedRowKeys:[],
            selectedRows:[],
        }
    }
    componentDidMount() {
        this.request();
    }
    params={
        page:1
    }
    request() {
        let _this = this;
        axios.ajax({
            url: '/table/list',
            data: {
                params: {
                    page: this.params.page
                }
            }
        }).then((res) => {
            res.result.list.map((item, index) => {
                item.key = index
            })
            this.setState({
                dataSource: res.result.list,
                isloading: false,
            })
        })
    }
    handleDel(item){
        
        Modal.confirm({
            title:'删除提示',
            content:'确认删除?'+item.id,
            onOk:()=>{
                message.success('删除成功');
                this.request();
            }
        })
    }
    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                align: 'center',
                width:80,
                fixed:'left'
            },
            {
                title: '用户名',
                dataIndex: 'username',
                width:80,
                fixed:'left'
            },
            {
                title: '年龄',
                dataIndex: 'age',
                width:80,
                fixed:'left',
                sorter: (a, b) => a.age - b.age,
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 0 ? '女' : '男'
                },
                width:80
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(res) {
                    let config = {
                        '0': <Badge status="warning" text="禁用"/>,
                        '1': <Badge status="success" text="启用"/>,
                        '2': <Badge status="error" text="注销"/>
                    }
                    return config[res]
                },
                width:80
            },
            {
                title: '爱好',
                dataIndex: 'favorite',
                render(res) {
                    let config = {
                        '0': '跑步',
                        '1': '读书',
                        '2': '爬山',
                        '3': '打球',
                        '4': '打游戏',
                    }
                    return config[res]
                },
                width:80
            },
            {
                title: '生日',
                dataIndex: 'birthday',
                width:120
            },
            {
                title: '地址',
                dataIndex: 'address',
                width:120
            },
            {
                title: '操作',
                width:100,
                fixed:'right',
                render:(text,item) => {
                    return <Button size='small' onClick={() =>this.handleDel(item)}>删除</Button>
                },
            },
        ]
        return(
            <div>
                <Card title="头部固定">
                    <Table scroll={{y:240}} loading={this.state.isloading} size='small' bordered columns={columns} dataSource={this.state.dataSource} />
                </Card>
                <Card title="列固定">
                    <Table scroll={{x:1720}} loading={this.state.isloading} size='small' bordered columns={columns} dataSource={this.state.dataSource} />
                </Card>
            </div>
        )
    }
}
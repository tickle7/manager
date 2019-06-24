import React from 'react'
import { Card, Table,Button, Modal, message } from 'antd';
import axios from './../../../axios/index';
import Utils from './../../../utils/utils';

export default class Basic extends React.Component {
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
            // eslint-disable-next-line
            res.result.list.map((item, index) => {
                item.key = index
            })
            this.setState({
                dataSource: res.result.list,
                isloading: false,

                // 删除成功，清除选中项
                selectedRowKeys:[],
                selectedRows:[],

                pagination:Utils.pagination(res,(current) =>{
                    _this.params.page = current;
                    _this.request()
                })
            })
        })
    }
    onRowClick=(record)=>{
        this.setState({
            selectItem:record
        })
    }
    handelDel = ()=>{
        let items = this.state.selectedRows;
        let ids = [];
        // eslint-disable-next-line
        items.map((item) =>{
            ids.push(item.id)
        })
        Modal.confirm({
            title:'删除提示',
            content:`确认删除${ids.join(',')}?`,
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
                align: 'center'
            },
            {
                title: '用户名',
                dataIndex: 'username',
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    // eslint-disable-next-line
                    return sex == 0 ? '女' : '男'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(res) {
                    let config = {
                        '0': '禁用',
                        '1': '启用',
                        '2': '注销'
                    }
                    return config[res]
                }
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
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            }
        ]
        const rowSelection = {
            type: 'checkbox',
            selectedRowKeys:this.state.selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows)=>{
                this.setState({
                    selectedRowKeys:selectedRowKeys,
                    selectedRows:selectedRows
                })
            }
        }
        return (
            <div>
                <Card title="基础表格">
                    <Button style={{marginBottom:'14px'}} onClick={this.handelDel}>删除</Button>
                    <Table onRow={record => {
                        return {
                            onClick: ()=>{
                                this.onRowClick(record);
                            }
                        };
                    }} pagination={this.state.pagination} rowSelection={rowSelection} loading={this.state.isloading} size='small' bordered columns={columns} dataSource={this.state.dataSource} />
                </Card>
            </div>
        )
    }
}
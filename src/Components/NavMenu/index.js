import React from 'react';
import { Menu } from 'antd';
import MenuConfig from './../../config/menuConfig'
import './index.less'
import {NavLink} from 'react-router-dom'
const { SubMenu } = Menu;
export default class NavMenu extends React.Component {
    componentWillMount() {
        const menuTree = this.renderMenu(MenuConfig);
        this.setState({
            menuTree
        })
    }
    //菜单渲染
    renderMenu =(data)=> {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key} >
                        <NavLink to={item.key}>{item.title}</NavLink>
                    </Menu.Item>
        })
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="./assets/logo-ant.svg" alt="logo" />
                    <h1>Bick MG</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuTree}
                </Menu>
            </div>
        )
    }
}
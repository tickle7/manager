import React from 'react'
import { Row, Col } from 'antd';
import Header from './Components/Header'
import Footer from './Components/Footer'
import NavMenu from './Components/NavMenu'
import './style/common.less'
export default class Admin extends React.Component{
    render(){
        return(
            <Row className="container">
                <Col className="nav-left" span={3}>
                    <NavMenu></NavMenu>
                </Col>
                <Col className="main" span={21}>
                    <Header></Header>
                    <Row className="content">
                        {this.props.children}
                    </Row>
                    <Footer></Footer>
                </Col>
            </Row>
        )
    }
}
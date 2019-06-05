import React from 'react'
import { Row, Col } from 'antd';
import './index.less'
import Util from '../../utils/utils'
import axios from './../../axios/index'
export default class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            username:'奔跑的xqf1',
            sysTime:'2019-01-01',
            weather:''
        }
    }
    componentDidMount() {
        this.setState({
            username: '奔跑的xqf'
        })

        setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime())
            this.setState({
                sysTime:sysTime
            })
        },1000)
        this.getWeatherAPI();
    }
    getWeatherAPI(){
        axios.jsonp({
            url:'https://restapi.amap.com/v3/weather/weatherInfo?city=长沙&key=2fa5090042556b8f9ecaa03081b837b3'
        }).then((res) => {
            this.setState({
                weather:res.lives[0].temperature+'° /'+res.lives[0].weather
            })
        })
    }
    render() {
        return (
            <React.Fragment>
                <Row className="header">
                    <Col className="header-top">
                        <span>欢迎，{this.state.username}</span>
                        <a href="/">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col className="breadcrumb-title" span={4}>
                        首页
                    </Col>
                    <Col className="weather" span={20}>
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-detail">{this.state.weather}</span>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}
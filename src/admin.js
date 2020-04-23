/*
 * @Author: your name
 * @Date: 2019-12-06 09:38:54
 * @LastEditTime : 2020-01-10 16:21:18
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactmanage\src\admin.js
 */
import React from 'react';
import {Row, Col} from 'antd';
import NavLeft from './components/NavLeft'
import Header from './components/Header'
import Footer from './components/Footer'
import './style/common.less'

export default class Admin extends React.Component {
    render() {
        return (
            <div>
                <Row className='container'>
                    <Col span={3} className='nav-left'>
                        <NavLeft></NavLeft>
                    </Col>
                    <Col span={21} className='main'>
                        <Header></Header>
                        {/* <Header></Header> */}
                        {/* {this.props.children} */}
                        <Row className='content'>
                            {this.props.children}</Row>
                        <Footer className='footer'></Footer>
                    </Col>
                </Row>
            </div>
        )
    }
}
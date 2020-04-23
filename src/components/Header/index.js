/*
 * @Author: your name
 * @Date: 2019-12-06 09:38:18
 * @LastEditTime : 2020-01-08 16:57:10
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactmanage\src\components\Header\index.js
 */
import React from 'react';
import './index.less'
import {Dropdown, Icon, Menu, Row, Col} from 'antd'
import axios from '../../axios'
import Util from '../../util'

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        修改密码
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        退出登录
      </a>
    </Menu.Item>
  </Menu>
);

export default class Header extends React.Component {
  state = {}
  componentWillMount() {
    let timeID = setInterval(() => {
      let Systime = Util.formatDate(new Date())
      this.setState({
        Systime
      })
    }, 1000)
    this.setState({
      timeID
    })
    this.getWeatherAPIData()
  }
  componentWillUnmount() {
    clearInterval(this.state.timeID)
  }
  getWeatherAPIData() {
    let city = '北京';
    axios.jsonp({
      url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    }).then((res) => {
      let data = res.results[0].weather_data[0];
      this.setState({
        daydayPictureUrl: data.dayPictureUrl,
        weather: data.weather
      })
    })
  }

  render() {
    return (
      <div className='header'>
        <Row>
          <div className='headertop'>
            <div>欢迎, 喃喃</div>
            <div className='user'>
              <Dropdown overlay={menu}>
                <a className="ant-dropdown-link">
                  操作
                  <Icon type="down"/>
                </a>
              </Dropdown>
            </div>
          </div>
        </Row>
        <Row className='headerbottom'>
          <Col span={4} className="breadcrumb-title">首页</Col>
          <Col span={20} className="weather">
            <span className='date'>{this.state.Systime}</span>
            <span className='weather-img'>
              <img src={this.state.daydayPictureUrl} alt=""/>
            </span>
            <span className='weather-detail'>
              {this.state.weather}
            </span>
          </Col>
        </Row>
      </div>
    )
  }
}
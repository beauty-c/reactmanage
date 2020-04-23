/*
 * @Author: your name
 * @Date: 2020-01-08 16:59:59
 * @LastEditTime : 2020-01-16 16:59:47
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactmanage\src\pages\UI\button\index.js
 */
import React from 'react'
import {Card, Button, Radio, Icon} from 'antd';
import './ui.less'

export default class Buttons extends React.Component {
  state = {
    loading: true,
    size: 'default'
  }
  handleCloseLoading = () => {
    this.setState({loading: false})
  }
  handleChange = (e) => {
      this.setState({size: e.target.value})
  }
  render() {
    return (
      <div>
        <Card title='基础按钮' className='card-wrap'>
          <Button type="primary">Imooc</Button>
          <Button>Imooc</Button>
          <Button type="dashed">Imooc</Button>
          <Button type="danger">Imooc</Button>
          <Button disabled>Imooc</Button>
        </Card>
        <Card title='图形按钮' className='card-wrap'>
          <Button icon='plus'>创建</Button>
          <Button icon='edit'>编辑</Button>
          <Button icon='delete'>删除</Button>
          <Button icon='search' shape='circle'></Button>
          <Button type='primary' icon='search'>搜索</Button>
          <Button type='primary' icon='download'>下载</Button>
        </Card>
        <Card title='Loading按钮' className='card-wrap'>
          <Button type='primary' loading={this.state.loading}>确定</Button>
          <Button type='primary' shape='circle' loading={this.state.loading}></Button>
          <Button loading={this.state.loading}>点击加载</Button>
          <Button shape='circle' loading={this.state.loading}></Button>
          <Button type='primary' onClick={this.handleCloseLoading}>关闭</Button>
        </Card>
        <Card title='按钮组'>
          <Button type='primary'>
            返回
            <Icon type="left"/>
          </Button>
          <Button type='primary'>
            前进
            <Icon type="right"/>
          </Button>
        </Card>
        <Card title='按钮大小' className='card-wrap'>
          <Radio.Group onChange={this.handleChange} value={this.state.size}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button size={this.state.size} type="primary">Imooc</Button>
          <Button size={this.state.size}>Imooc</Button>
          <Button size={this.state.size} type="dashed">Imooc</Button>
          <Button size={this.state.size} type="danger">Imooc</Button>
          <Button size={this.state.size} disabled>Imooc</Button>
        </Card>
      </div>
    )
  }
}
/*
 * @Author: your name
 * @Date: 2020-01-17 10:02:50
 * @LastEditTime: 2020-01-18 10:31:31
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \reactmanage\src\pages\UI\messages.js
 */
import React from 'react'
import { Card, Button, message } from 'antd'
import './ui.less'
export default class Buttons extends React.Component {

    showMessage = (type)=>{
        message[type]("恭喜你，React课程晋级成功");
    }

    render(){
        return (
            <div>
                <Card title="全局提示框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.showMessage('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.showMessage('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.showMessage('warning')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.showMessage('error')}>Error</Button>
                    <Button type="primary" onClick={()=>this.showMessage('loading')}>Loading</Button>
                </Card>
            </div>
        );
    }
}
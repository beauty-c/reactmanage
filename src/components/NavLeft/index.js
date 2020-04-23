/*
 * @Author: your name
 * @Date: 2019-12-06 09:38:36
 * @LastEditTime : 2020-01-08 16:47:49
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactmanage\src\components\Navleft\index.js
 */
import React from 'react';
import {Menu} from 'antd';
import { NavLink, withRouter } from 'react-router-dom'
import menuConfig from '../../config/menuConfig'
import './index.less'

const {SubMenu} = Menu;

class NavLeft extends React.Component {
    componentWillMount() {
        this.setState({
            menuTreeNode: this.renderMenu(menuConfig)
        })
    }
    renderMenu = (data) => {
        return data.map(item => {
            if (item.children) {
                return (
                    <SubMenu key={item.key} title={item.title}>
                        { this.renderMenu(item.children) }
                    </SubMenu>
                )
            }
            // console.log(this.props)
            return (
                
                <Menu.Item key={item.key}>
                    <NavLink to={item.key}>{item.title}</NavLink>
                </Menu.Item>
            )
        })
    }

    render() {
        return (
            <div>
                <div className='logo'>
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>Imooc MS</h1>
                </div>
                <Menu theme='dark' mode="inline" selectedKeys={[this.props.location.pathname]}>
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}
export default withRouter(NavLeft)
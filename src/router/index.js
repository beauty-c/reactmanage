/*
 * @Author: your name
 * @Date: 2019-12-20 15:11:54
 * @LastEditTime : 2020-01-18 17:50:38
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactmanage\src\router\index.js
 */
import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from '../App'
import Login from '../pages/login/login'
import Admin from '../admin'
import Home from '../pages/home'
import Button from '../pages/UI/button.js'
import Modals from '../pages/UI/modals.js'
import Loading from '../pages/UI/loadings.js'
import Notice from '../pages/UI/notics'
import Messages from '../pages/UI/messages'
import Tabs from '../pages/UI/tabs'
import Gallery from '../pages/UI/gallery'
import NoMatch from '../pages/nomatch'

export default class IRouter extends React.Component{
    render() {
        return (
            <HashRouter>
                
                <App>
                    <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' render={() =>
                        <Admin>
                            <Switch>
                                <Route path='/home' component={Home}></Route>
                                <Route path='/ui/buttons' component={Button}></Route>
                                <Route path='/ui/modals' component={Modals}></Route>
                                <Route path='/ui/loadings' component={Loading}></Route>
                                <Route path='/ui/notification' component={Notice}></Route>
                                <Route path='/ui/messages' component={Messages}></Route>
                                <Route path='/ui/tabs' component={Tabs}></Route>
                                <Route path='/ui/gallery' component={Gallery}></Route>
                                {/* <Redirect to="/home" /> */}
                                <Route component={NoMatch}></Route>
                            </Switch>
                        </Admin>
                    }>
                    </Route>
                    </Switch>
                    
                </App>
            </HashRouter>
        )
    }
}
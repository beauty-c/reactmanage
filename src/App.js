/*
 * @Author: your name
 * @Date: 2019-11-28 15:43:19
 * @LastEditTime : 2020-01-08 09:30:02
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactmanage\src\App.js
 */
import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;

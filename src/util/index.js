/*
 * @Author: your name
 * @Date: 2020-01-08 10:35:39
 * @LastEditTime : 2020-01-08 10:48:54
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactmanage\src\util\index.js
 */
// import React from 'react';
export default {
    formatDate(time) {
        if(!time) return '';
        let date = new Date(time)
        let month = ('' + (date.getMonth()+1))[1]?(date.getMonth()+1): '0'+(date.getMonth()+1)
        let day = ('' + date.getDate())[1]?(date.getDate()): '0'+(date.getDate())
        let Hours = ('' + date.getHours())[1]?(date.getHours()): '0'+(date.getHours())
        let Minutes = ('' + date.getMinutes())[1]?(date.getMinutes()): '0'+(date.getMinutes())
        let Seconds = ('' + date.getSeconds())[1]?(date.getSeconds()): '0'+(date.getSeconds())
        return date.getFullYear() + '-' + month + '-' + day + ' ' + Hours + ':' + Minutes + ':' + Seconds;
    }
}
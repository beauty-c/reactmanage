/*
 * @Author: your name
 * @Date: 2019-12-17 17:39:29
 * @LastEditTime : 2020-01-08 16:51:42
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactmanage\src\axios\index.js
 */
import JsonP from 'jsonp'

export default class Axios {
    static jsonp(option) {
        return new Promise((resolve, reject) => {
            JsonP(option.url, {
                param: 'callback'
            }, function (err, response) {
                if(response && response.status === 'success') {
                    resolve(response)
                }else {
                    reject(response && response.message)
                }
            })
        })
    }
}
import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd';
export default class Axios{
    static jsonp(options){
        return new Promise((resolve,reject) => {
            JsonP(options.url,{
                param:'callback'
            },function(error,response){
                if(response.info === "OK"){
                    resolve(response);
                }else{
                    reject(response.info);
                }
            })
        })
    }
    static ajax(options){
        const baseAPI = ' https://www.easy-mock.com/mock/5cf765f7e168c92c554e1086/BikeAPI'
        return new Promise((resolve,reject) => {
            axios({
                url:options.url,
                method:options.method,
                baseURL:baseAPI,
                timeout:5000,
                params:(options.data && options.data.params) || '' ,
            }).then((response) =>{
                if(response.status == '200'){
                    if(response.data.code == 0){
                        resolve(response.data)
                    }else{
                      Modal.info({
                          title:'提示',
                          content:response.data.msg
                      })  
                    }
                }else{
                    reject(response.data)
                }
            })
        })
    }
}
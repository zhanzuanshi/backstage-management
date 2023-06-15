import axios from "axios";
import { Message } from "element-ui";

const request=axios.create({
    baseURL:'http://interview-api-t.itheima.net/',
    timeout:5000
})

request.interceptors.request.use(function(config){
    // 在请求前操作
    return config
    
},function(err){
    return Promise.reject(err)
})
request.interceptors.response.use(function(response){
    return response.data
},function(err){
    if(err.response){
        Message.error(err.response.data.message)
    }
    return Promise.reject(err)
})
export default request
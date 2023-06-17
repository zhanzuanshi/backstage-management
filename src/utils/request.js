import router from "@/router";
import store from "@/store";
import axios from "axios";
import { Message } from "element-ui";

const request=axios.create({
    baseURL:'http://interview-api-t.itheima.net/',
    timeout:5000
})

request.interceptors.request.use(function(config){
    // 在请求前操作
    // 携带token
    const token=store.state.user.token
    if(token){
        config.headers.Authorization=`Bearer ${token}`
    }
    return config
    
},function(err){
    return Promise.reject(err)
})
request.interceptors.response.use(function(response){
    
    return response.data
},function(err){
    const {status}=err.response
    if(status==401){
        store.commit('user/logout')
        router.push('/')
        Message.error('登录已过期，请重新登录')
    }
    else{
        Message.error(err.response.data.message)
    }
    return Promise.reject(err)
})
export default request
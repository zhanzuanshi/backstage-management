import { login } from "@/api/user"
import { getToken,setToken,removeToken } from "@/utils/storage"

export default{
    namespaced:true,
    state:{
        token:getToken() || ' '
    },
    mutations:{
        updateToken(state,token){
            // 存储到vuex
                state.token=token
            // 存储到localStorage
                setToken(token)
        },
        logout(state){
                state.token=''
                removeToken()
        }
    },
    actions:{
       async loginAction(context,data){
            const res=await login(data);
            console.log(res.data.token);
            context.commit('updateToken',res.data.token)
        },
    },
    getters:{}

}
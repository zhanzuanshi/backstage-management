// localStorage.setItem(键，值)
// localStorage.getItem(键)
// localStorage.removeItem(键)

const KEY='my-token-element-pc'

// 使用按需导出，一次可以导出多个
// 导入时使用 import {getToken } from '模块名'


// 获取
export const getToken=()=>{
  return localStorage.getItem(KEY)
}
// 修改
export const setToken=(newToken)=>{
        return localStorage.setItem(KEY,newToken)
}
// 删除
export const removeToken=()=>{
    return localStorage.removeItem(KEY)
}
import { login,getUserInfo } from "@/api/user"
import { USER_INFO,TOKEN } from "../constants/index"
import { message } from "antd"

export function setToken(token) {
    return {
        type: TOKEN,
        token
    }
}

export function setUserInfo(info) {
    return {
        type: USER_INFO,
        userInfo: info
    }
}

//登录
export const handleLogin = (data) => dispatch => {
    login(data).then(res => {
        let data = res?.data
        dispatch(setToken(data.token||''))
        dispatch(setUserInfo(data.userInfo))
        message.success("登录成功！")
    })
}

//getUserInfo
export const getUser = () => dispatch => {
    return new Promise((resolve, reject)=>{
        getUserInfo().then(res => {
            dispatch(setUserInfo(res.data?.userInfo))
            resolve(res)
        }).catch(e=>{
            reject(e)
        })
    })

}
//登出
export const loginOut=()=>dispatch=>{
    dispatch(setUserInfo({}))
    dispatch(setToken(null))
}

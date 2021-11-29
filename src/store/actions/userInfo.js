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
        console.log(res)
        let data = res?.data
        dispatch(setToken(data.token||''))
        dispatch(setUserInfo(data.user))
        message.success("登录成功！")
    })
}

//getUserInfo
export const getUser = (data) => dispatch => {
    console.log("getUser")
    getUserInfo(data).then(res => {
        dispatch(setUserInfo(res.data))
    })
}

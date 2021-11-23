import { login } from "../../api/login"
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
export const handleLogin = (data) => (dispatch) => {
    login(data).then(res => {
        if(res.code===200){
            dispatch(setToken(res.token))
            dispatch(setUserInfo(res.data))
            message.success("登录成功！") 
        }else{
            message.warning("登录失败！")
        }
    }).catch(e=>{
        console.log(e)
        message.warning("登录出现错误！")
    })
}
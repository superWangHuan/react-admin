import request from "../utils/request"
import "../mock/index"
export function login(data){
    return request({
        url:"mock/login",
        method:"POST",
        data
    })
}
export function getUserInfo(data){
    return request({
        url:"mock/user",
        method:"POST",
        data
    })
}

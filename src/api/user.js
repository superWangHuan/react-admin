import request from "../utils/request"
export function login(data){
    return request({
        url:"/api/login",
        method:"POST",
        data
    })
}
export function getUserInfo(data){
    return request({
        url:"/api/user/info",
        method:"GET",
        data
    })
}



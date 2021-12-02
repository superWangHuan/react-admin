import request from "../utils/request"
import "../mock/index"

export function getAllUser(){
    return request({
        url:"/mock/system/allUser",
        method:"GET",
    })
}
export function getRoles(){
    return request({
        url:"/mock/system/roles",
        method:"get"
    })
}

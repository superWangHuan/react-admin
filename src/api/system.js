import request from "../utils/request"
import "../mock/index"

export function getAllUser(){
    return request({
        url:"/mock/system/allUser",
        method:"GET",
    })
}

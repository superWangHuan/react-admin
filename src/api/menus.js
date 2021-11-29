import request from "../utils/request"
import "../mock/index"

export function getMenu(){
    return request({
        url:"/mock/menu",
        method:"GET",
    })
}

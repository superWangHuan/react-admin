import axios from "axios";
import { message } from "antd"
const CancelToken = axios.CancelToken;
const severice = axios.create({
    timeout: 3 * 1000,
})

severice.interceptors.request.use(config => {
    let token = localStorage.getItem("token")
    if (token) {
        config.headers["Authorization"] = token || "";
    }
    config.headers['Content-Type'] = 'application/json'
    config.cancelToken = new CancelToken(c => {
        window.AXIOS_REQUEST_CANCEL = c
    })
    return config
}, err => {
    Promise.reject(err)
})


severice.interceptors.response.use(response => {
    const status = response.status
    if (status < 200 || status > 300) {
        return Promise.reject('error')
    } else {
        let code = response.data?.code;
        if(code===1000){
            return response.data
        }else{
            let msg = response.data?.msg
            message.error(msg||"")
            return Promise.reject(response.data)
        }

    }
}, err => {
    Promise.reject(err)
})


export default severice

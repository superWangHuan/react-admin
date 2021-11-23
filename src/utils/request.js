import axios from "axios";


const severice = axios.create({
    // baseURL:"http://127.0.0.1:3456/",
    timeout:3 * 1000,
})

severice.interceptors.request.use(config=>{
    console.log(config)
    let token = localStorage.getItem("token")
    if (token){
        config.headers["Authorization"] = token || "";
    }
    config.headers['Content-Type'] = 'application/json'
    return config
},err=>{
    Promise.reject(err)
})


severice.interceptors.response.use(response=>{
    const code = response.status
    if (code < 200 || code > 300) {
      return Promise.reject('error')
    } else {
      return response.data
    }
},err=>{
    Promise.reject(err)
})


export default severice
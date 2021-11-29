
import Mock from 'mockjs';
import menus from "@/routes/menus"
import handCode from "./utils/handCode"

Mock.setup({ timeout: "500" });
Mock.mock('/mock/menu',"get",()=>handCode.success(menus));
Mock.mock("mock/user","post",function (r){
    console.log('mock/user',r)
    let params = JSON.parse(r.body)
    let { token } = params;
    if(token==="admin-tokne"){
        return handCode.success({
            avatar: "https://cdn-mini.sangupig.top/test/images/1628668576101.jpg",
            createTime: 1534986716000,
            dept: {
                id: 1,
                name: "总部",
            },
            deptId: null,
            email: "123456@163.com",
            enabled: true,
            id: 1,
            job: {id: 11, name: "admin2"},
            phone: "13666666666",
            roles: [{
                dataScope: "全部",
                id: 1,
                level: 1,
                name: "超级管理员",
            }],
            sex: "男",
            username: "admin",
        })
    }else{
        return handCode.error("token无效")
    }

})
Mock.mock("mock/login","post",function (r){
    let params = JSON.parse(r.body)
    let { username,password,code } = params;
    if(username==="admin" && password === "123456" && code){
        return handCode.success({
            token:"admin-token",
            user:{
                avatar: "https://cdn-mini.sangupig.top/test/images/1628668576101.jpg",
                createTime: 1534986716000,
                dept: {
                    id: 1,
                    name: "总部",
                },
                deptId: null,
                email: "123456@163.com",
                enabled: true,
                id: 1,
                job: {id: 11, name: "admin2"},
                phone: "13666666666",
                roles: [{
                    dataScope: "全部",
                    id: 1,
                    level: 1,
                    name: "超级管理员",
                }],
                sex: "男",
                username: "admin",
            }
        })
    }else if(username!=="admin"){
        return handCode.error("用户名错误")
    }else if(password !== "123456"){
        return handCode.error("密码错误")
    }else if(!code){
        return handCode.error("验证码错误")
    }else{
        return handCode.error("请求失败")
    }

})


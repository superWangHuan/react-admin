import Login from "../views/Login/Login"
import NotFound from "../views/404/NotFound"
import Index from "../layout/Index"

export const constantRouterMap = [
    {
        path:'/',
        redirect:'/index',
        auth:true,
        exact:true,
        permission:0,
        children:null,
        title:""
    },
    {
        path:'/index',
        component:Index,
        auth:true,
        exact:false,
        permission:0,
        children:null,
        title:""
    },
    {
        path:"/login",
        component:Login,
        exact:false,
        auth:false,
        permission:0,
        children:null,
        title:""
    },
    {
        path:"/404",
        component:NotFound,
        exact:false,
        permission:0,
        children:null,
        title:""
    },
]
export default constantRouterMap
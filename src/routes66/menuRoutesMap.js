


import Home from "../views/Home/Home"
import User from "../views/User/User"
import Todo from "../views/Todo/Todo"
import List from "../views/Todo/List/List"
import Dashboard from "../views/Dashboard/Dashboard"
import Demo from "../views/testChildViews/Demo"
export const menuRoutesMap = [
    {
        path:'/dashboard',
        component: Dashboard,
        exact:false,
        title:"Dashboard"
    },
    {
        path: '/home/index',
        component: Home,
        exact:false,
        title:"index",
    },
    {
        path: '/home/demo',
        component: Demo,
        exact:false,
        title:"Demo"
    },
    {
        path: '/user',
        component: User,
        exact:false,
        children:null,
        title:"User"
    },
    {
        path: '/todo/index',
        component: Todo,
        exact:false,
        title:"Todo", 
    },
    {
        path: '/todo/list',
        component: List,
        exact:false,
        title:"List"
    }
]
export default menuRoutesMap
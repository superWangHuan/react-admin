//可以在接口中获取路由数据
const menus = [
    {
        icon: "",
        keepAlive: true,
        key: "dashboard",
        menu_id: 0,
        parentKey: "",
        path: "/dashboard",
        title: "首页",
    },
    {
        icon: "",
        keepAlive: true,
        key: "home",
        menu_id: 0,
        parentKey: "",
        path: "/home",
        title: "home",
        children:[
            {
                icon: "",
                keepAlive: true,
                key: "home-index",
                menu_id: 0,
                parentKey: "home",
                path: "/index",
                title: "home",
            },
            {
                icon: "",
                keepAlive: true,
                key: "demo",
                menu_id: 0,
                parentKey: "home",
                path: "/demo",
                title: "demo",
            }
        ]
    },
    {
        icon: "",
        keepAlive: true,
        key: "todo",
        menu_id: 0,
        parentKey: "",
        path: "/todo",
        title: "todo",
        children:[
            {
                icon: "",
                keepAlive: true,
                key: "todo-index",
                menu_id: 0,
                parentKey: "todo",
                path: "/index",
                title: "index",
            },
            {
                icon: "",
                keepAlive: true,
                key: "list",
                menu_id: 0,
                parentKey: "todo",
                path: "/list",
                title: "list",
            }
        ]
    },

]

export default menus;
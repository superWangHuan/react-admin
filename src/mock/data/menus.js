//可以在接口中获取路由数据
const menus = [
    {
        icon: "icon-RectangleCopy215",
        keepAlive: true,
        key: "dashboard",
        menu_id: 1,
        parentKey: "",
        path: "/dashboard",
        title: "Dashboard",
        visible:true,
    },
    {
        icon: "icon-RectangleCopy54",
        keepAlive: true,
        key: "home",
        menu_id: 2,
        parentKey: "",
        path: "/home",
        title: "home",
        visible:true,
        children:[
            {
                icon: "icon-RectangleCopy55",
                keepAlive: true,
                key: "home-index",
                menu_id: 3,
                parentKey: "home",
                path: "/index",
                title: "家",
                visible:true
            },
            {
                icon: "icon-RectangleCopy56",
                keepAlive: true,
                key: "demo",
                menu_id: 4,
                parentKey: "home",
                path: "/demo",
                title: "demo",
                visible:true
            }
        ]
    },
    {
        icon: "icon-RectangleCopy56",
        keepAlive: true,
        key: "todo",
        menu_id: 5,
        parentKey: "",
        path: "/todo",
        title: "todo",
        visible:true,
        children:[
            {
                icon: "icon-RectangleCopy57",
                keepAlive: true,
                key: "todo-index",
                menu_id: 6,
                parentKey: "todo",
                path: "/index",
                title: "index",
                visible:true
            },
            {
                icon: "icon-RectangleCopy58",
                keepAlive: true,
                key: "list",
                menu_id: 7,
                parentKey: "todo",
                path: "/list",
                title: "list",
                visible:true
            }
        ]
    },
    {
        icon: "icon-RectangleCopy59",
        keepAlive: true,
        key: "userCenter",
        menu_id: 8,
        parentKey: "",
        path: "/user",
        title: "用户中心",
        visible:false
    },
]

export default menus;

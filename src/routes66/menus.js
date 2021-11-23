

export const menuRoutesMap = [
    {
        path:'/dashboard',
        auth:true,
        exact:false,
        permission:0,
        children:null,
        title:"Dashboard"
    },
    {
        path: '/home',
        auth:true,
        exact:false,
        permission:0,
        title:"home",
        children:[
            {
                path: '/home/index',
                auth:true,
                exact:false,
                permission:0,
                title:"index",
            },
            {
                path: '/home/demo',
                auth:true,
                exact:false,
                permission:0,
                title:"Demo"
            }
        ],
    },
    {
        path: '/user',
        exact:false,
        auth:true,
        permission:0,
        children:null,
        title:"User"
    },
    {
        path: '/todo',
        exact:false,
        auth:true,
        permission:0,
        title:"todo",
        children:[
            {
                path: '/todo/index',
                exact:false,
                auth:true,
                permission:0,
                children:null,
                title:"Todo", 
            },
            {
                path: '/todo/list',
                auth:false,
                exact:true,
                permission:0,
                title:"List"
            }
        ],
    },
]
export default menuRoutesMap
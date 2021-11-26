const dynamicRoutesMap = [
{
    path:'/test/test',
    component: ()=>import("@/views/Test/Test"),
},

    {
        path:'/dashboard',
        component: function(){
            return import("@/views/Dashboard/Dashboard")
        },
    },
    {
        path: '/home/index',
        component: function(){
            return import("@/views/Home/Home")
        },
    },
    {
        path: '/home/demo',
        component: function(){
            return import("@/views/testChildViews/Demo")
        },
    },
    {
        path: '/user',
        component: function(){
            return import("@/views/User/User")
        },
    },
    {
        path: '/todo/index',
        component: function(){
            return import("@/views/Todo/Todo")
        },
    },
    {
        path: '/todo/list',
        component: function(){
            return import("@/views/Todo/List/List")
        },
    }
]
export default dynamicRoutesMap

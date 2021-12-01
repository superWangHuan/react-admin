const dynamicRoutesMap = [

    {
        path: '/system/user',
        component: () => import("@/views/system/User/User"),
    },

    {
        path: '/system/auth',
        component: () => import("@/views/system/Auth/Auth"),
    },

    {
        path: '/system/menu',
        component: () => import("@/views/system/Menu/Menu"),
    },

    {
        path: '/dashboard',
        component: function () {
            return import("@/views/Dashboard/Dashboard")
        },
    },
    {
        path: '/user',
        component: function () {
            return import("@/views/User/User")
        },
    },

]
export default dynamicRoutesMap

import {useEffect, useState} from "react"
import {connect} from "react-redux"
import {Layout, Spin} from "antd"
import SideMenu from "./SideMenu"
import TopHeader from "./TopHeader"
import routes from "@/routes/routes"
import MainContent from "./MainContent"
//路由数据处理
import {setMenus} from "@/store/actions/menu";
import {getMenu} from "@/api/menus"
import { getUser } from "@/store/actions/userInfo";
import "./index.scss"

const mapStateToProps = (state) => ({
    menus: state.menus.menuList,
    token: state.user.token,
})
const mapDispatchToProps = (dispatch) => ({
    setMenus: data => dispatch(setMenus(data)),
    getUserInfo:data=> dispatch(getUser(data))
})
let timer = null;
//登陆问题未解决
const Index = ({menus, token, setMenus, getUserInfo}) => {
    const [loading, setLoading] = useState(true);
    const [height,setHeight] = useState(document.documentElement.clientHeight)
    useEffect(() => {
        if(token) getUserInfo({token});
        getMenu().then(res=>{
            let menus = res.data;
            setMenus(menus)
            setLoading(false)
        }).catch(e => setLoading(false))
        window.addEventListener("resize",function (){
            if(timer){
                clearTimeout(timer)
                timer = null
            }
            timer = setTimeout(()=>{
                setHeight(document.documentElement.clientHeight)
                clearTimeout(timer)
                timer = null
            },100)
        })
    }, [token, setMenus, getUserInfo])
    if (loading) return (
        <div className="loading-page"><Spin size="large" wrapperClassName="loading-page" tip="Loading..."/></div>
    )
    return (
        <Layout style={{ height: height }}>
            <SideMenu menus={menus}/>
            <Layout>
                <TopHeader>Header</TopHeader>
                <MainContent routes={routes}/>
            </Layout>
        </Layout>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Index)

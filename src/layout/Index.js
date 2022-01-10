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
    userInfo: state.user.userInfo
})
const mapDispatchToProps = (dispatch) => ({
    setMenus: data => dispatch(setMenus(data)),
    getUserInfo: data=> dispatch(getUser(data))
})
let timer = null;
const Index = ({menus, token, setMenus, getUserInfo}) => {
    const [loading, setLoading] = useState(true);
    const [height,setHeight] = useState(document.documentElement.clientHeight)
    useEffect(() => {
        let ignore = false;
        if(token){
            getUserInfo({token}).then(res=>{
                getMenu(res.data.userInfo.roles).then(res=>{
                    let menus = res.data || [];
                    if(!ignore){
                        setMenus(menus)
                        setLoading(false)
                    }
                }).catch(e => !ignore && setLoading(false))
            }).catch(e => {
                !ignore && setLoading(false)
            })
        }else{
            if(!ignore){
                setMenus([])
                setLoading(false)
            }
        }
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
        return function (){
            ignore = true
        }
    }, [token, setMenus, getUserInfo])
    if (loading) return (
        <div className="loading-page"><Spin size="large" wrapperClassName="loading-page" tip="Loading..."/></div>
    )
    return (
        <Layout style={{ height: height }} theme={"light"}>
            <SideMenu menus={menus}/>
            <Layout theme={"light"}>
                <TopHeader>Header</TopHeader>
                <MainContent routes={routes}/>
            </Layout>
        </Layout>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Index)

import {useEffect, useState} from "react"
import {connect} from "react-redux"
import {Layout, Spin} from "antd"
import SideMenu from "./SideMenu"
import TopHeader from "./TopHeader"
import TagsView from "./TagsView"
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
    setMenus: (list) => dispatch(setMenus(list)),
    getUser
})

//登陆问题未解决
const Index = ({menus, token, setMenus, getUser}) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false)
        getMenu().then(res=>{
            let menus = res.data;
            setMenus(menus)
        }).catch(e => setLoading(false))
    }, [setMenus, token])
    useEffect(()=>{
        if(token){
            console.log("getUser")
            getUser({token})
        }
    },[token])
    if (loading) return (
        <div className="loading-page"><Spin size="large" wrapperClassName="loading-page" tip="Loading..."/></div>
    )
    return (
        <Layout>
            <SideMenu menus={menus}/>
            <Layout>
                <TopHeader>Header</TopHeader>
                <TagsView/>
                <MainContent routes={routes}/>
            </Layout>
        </Layout>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Index)

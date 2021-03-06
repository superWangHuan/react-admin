/***
 * 主页路由权限管理
 * useHistory
 useLocation
 useParams
 useRouteMatch
 */
import { useState, useEffect } from "react"
import { Route } from "react-router-dom"
import { connect } from "react-redux"
import { CacheRoute, CacheSwitch } from "react-router-cache-route";
import Intercept from "./intercept";
import { setMenus } from "@/store/actions/menu";
import { reduceMenuList } from "@/utils"
import routes from "@/routes/routes"
import { CSSTransition, TransitionGroup } from "react-transition-group";
import './index.scss';


const mapDispatchToProps = (dispatch) => {
    return {
        setMenus: (list) => dispatch(setMenus(list)),
    }
}
const mapStateToProps = state => ({
    menus: state.menus.menuList
})

function useRouter(menus) {
    const [routerBody, setRoute] = useState(null);
    const [newRoutes, setNewRoutes] = useState([])
    useEffect(() => {
        if(Object.prototype.toString.call(menus)==="[object Array]"&&menus.length>0){
            //将menus children打平
            let list = reduceMenuList(menus);
            // 把请求的数据 和 本地pages页面暴露出的路由列表合并
            let routerList = routes.map((router) => {
                router.keepAlive = router.keepAlive === 1;
                let find = list.find(
                    (i) => (i.parentPath || "") + i.path === router.path
                );
                if (find) {
                    router = { ...find, ...router };
                } else {
                    router.key = router.path;
                }
                return router;
            });
            if (list && list.length) {
                setNewRoutes(routerList)
            }
        }
    }, [menus])
    // 监听 本地路由列表 和 合并后的用户菜单列表 同时存在长度大于1时 渲染路由组件
    useEffect(() => {
        const dom = newRoutes.map(item => {
            let { key, path } = item;
            let RouterRender = item.keepAlive ? CacheRoute : Route;
            return (
                <RouterRender
                    key = { key }
                    exact={ true }
                    path={ path }
                    render={(props) => {
                        return <Intercept routes={ routes } pageKey = { key } { ...item } { ...props } />
                    }}
                />
            )
        })
        setRoute(dom)
    }, [newRoutes])
    return { routerBody }
}

const Router = ({ menus }) => {
    const { routerBody } = useRouter(menus);
    const location = window.location
    useEffect(()=>{  },[menus])
    return (
        <TransitionGroup>
            <CSSTransition key={ location.pathname } unmountOnExit classNames="fade" timeout={300}>
                <CacheSwitch>{ routerBody }</CacheSwitch>
            </CSSTransition>
        </TransitionGroup>
    );
};


export default connect(mapStateToProps, mapDispatchToProps)(Router)

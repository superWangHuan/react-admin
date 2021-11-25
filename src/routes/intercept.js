import {Component} from "react"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import {setSelectMenu, addOpenMenuTag} from "@/store/actions/menu"
// import Error from "@/views/Error/Error"
import {setOpenMenus} from "@/store/actions/menu"

const mapStateToProps = (state) => ({
    selectMenu: state.menus.selectMenu,
    menuList: state.menus.menuList
})
const mapDispatchToProps = (dispatch) => ({
    setSelectMenu: (data) => dispatch(setSelectMenu(data)),
    addOpenMenuTag: (data) => dispatch(addOpenMenuTag(data)),
    setOpenMenus: (list) => dispatch(setOpenMenus(list)), //设置展开的menu
})


class Intercept extends Component {
    constructor(props) {
        super(props)
        if (this.props.cacheLifecycles) {
            this.props.cacheLifecycles.didCache(this.componentDidCache)
            this.props.cacheLifecycles.didRecover(this.componentDidRecover)
        }
    }

    componentDidMount() {
        this.setInfo()
    }

    //被缓存
    componentDidCache = () => {

    }
    //didRecover
    componentDidRecover = () => {
        this.setInfo()
    }
    //通过当前路径找到当前选择的key
    setInfo = () => {
        const {setSelectMenu, setOpenMenus, menuList, addOpenMenuTag, pageKey, title, path, parentPath, to} = this.props;
        let localtion = window.location;
        let pathname = localtion.pathname;
        let hash = localtion.hash;
        let search = localtion.search;
        let pagePath = pathname + (hash || search);
        console.log("当前页路径:", pagePath, pageKey)
        let openTag = {key: pageKey, title, path}
        to || addOpenMenuTag(openTag)
        //当前选择的菜单
        setSelectMenu(openTag)
        //在跳转页面设置展开的菜单
        let current = menuList.find(item => item.path === parentPath);
        current && setOpenMenus([current.key])
    }

    render() {
        const {components: Components,menuList, key, path, to,...itemProps} = this.props;
        if (to) {
            return (
                <Redirect key={key} exact={true} to={to}/>
            )
        }
        return (
            <Components key={key} exact={true} path={path} { ...itemProps }/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intercept);

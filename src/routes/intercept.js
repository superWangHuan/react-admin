import { Component } from "react"
import { connect } from "react-redux"
import { setSelectMenu,addOpenMenuTag } from "@/store/actions/menu"
import Error from "@/views/Error/Error"

const mapStateToProps = (state) => ({
    selectMenu: state.menus.selectMenu
})
const mapDispatchToProps = (dispatch) => ({
    setSelectMenu: (data) => dispatch(setSelectMenu(data)),
    addOpenMenuTag :(data) => dispatch(addOpenMenuTag(data))
})


class Intercept extends Component {
    constructor(props) {
        super(props)
        if(this.props.cacheLifecycles){
            this.props.cacheLifecycles.didCache(this.componentDidCache)
            this.props.cacheLifecycles.didRecover(this.componentDidRecover)
        }
    }
    componentDidMount(){
        this.setInfo()
    }
    //被缓存
    componentDidCache=()=>{

    }
    //didRecover
    componentDidRecover=()=>{
        this.setInfo()
    }
    //通过当前路径找到当前选择的key
    setInfo=()=>{
        const { setSelectMenu, addOpenMenuTag, pageKey, title, path,to } = this.props;
        let localtion = window.location;
        let pathname = localtion.pathname;
        let hash = localtion.hash;
        let search = localtion.search;
        let pagePath = pathname + ( hash || search );
        console.log("当前页路径:",pagePath)
        let openTag = { key:pageKey , title, path }
        if(!to) addOpenMenuTag(openTag)

    }
    render() {
        const { components:Components,key,path,to } = this.props
        if(to){
            return (
                <Components key={key} exact={true} to={to}/>
            )
        }
        return (
            <Components key={key} exact={true} path={path}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intercept);

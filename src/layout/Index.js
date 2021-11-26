import React,{ Component } from "react"
import { connect } from "react-redux"
import { Layout } from "antd"
import SideMenu from "./SideMenu"
import TopHeader from "./TopHeader"
import TagsView from "./TagsView"
import routes from "@/routes/routes"
import MainContent from "./MainContent"
import "./index.scss"
const mapStateToProps = (state)=>({
    menus:state.menus.menuList
})
class Index extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        let { menus } = this.props;
        return (
            <Layout>
                <SideMenu menus={ menus }/>
                <Layout>
                    <TopHeader>Header</TopHeader>
                    <TagsView/>
                    <MainContent routes = { routes }/>
                </Layout>
            </Layout>
        )
    }
}
export default connect(mapStateToProps,null)(Index)

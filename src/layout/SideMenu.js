import React, { Component } from "react"
import { Menu, Layout } from "antd"
import { withRouter, Link } from "react-router-dom"
import { connect } from "react-redux"
import { setOpenMenus } from "@/store/actions/menu"
const { Sider } = Layout;


//菜单子选项渲染处理
function renderMenu(item, path = "") {
    if (!item.children) return <Menu.Item key={item.key}>
        <Link to={(path || "") + item.path}>{item.title}</Link>
    </Menu.Item>
    return (
        <Menu.SubMenu
            key={item.key}
            title={item.title}
        >
            {item.children.map((i) => renderMenu(i, path + item.path))}
        </Menu.SubMenu>
    )
}

class SideMenu extends Component {
    render() {
        let { menus = [], openMenuKeys ,selectMenu } = this.props;
        return (
            <Sider style={{ height: "100vh", overflowY: "auto" }} theme="light">
                <div className="logo">
                    <h1>LOGO</h1>
                </div>
                <Menu
                    theme="light"
                    mode="inline"
                    onOpenChange={this.onOpenChange}
                >
                    {menus.map((item => {
                        return renderMenu(item)
                    }))}
                </Menu>
            </Sider>
        )
    }
    toPage = (item) => {
        if (item.path) {
            this.props.history.push(item.path)
        }
    }
    onOpenChange = (keys) => {
       
    }
}
const mapStateToProps = (state) => ({
    openMenuKeys: state.menus.openMenuKeys,
    selectMenu: state.menus.selectMenu
})
const mapDispatchTopProps = (dispatch) => ({
    setOpenMenus: (list) => dispatch(setOpenMenus(list))
})
export default withRouter(connect(mapStateToProps, mapDispatchTopProps)(SideMenu))
import React, { Component } from "react"
import { Menu, Layout } from "antd"
import { withRouter, Link } from "react-router-dom"
import { connect } from "react-redux"
import { setOpenMenus } from "@/store/actions/menu"
import Icon from "@/components/Icon/Icon"
const { Sider } = Layout;

//菜单子选项渲染处理
function renderMenu(item, path = "") {
    if(!item.visible) return null;
    if (!item.children) return <Menu.Item key={item.key} icon={ <Icon type={item.icon} style={{fontSize:"24px"}}/> }>
        <Link to={(path || "") + item.path}>{item.title}</Link>
    </Menu.Item>
    return (
        <Menu.SubMenu
            key={item.key}
            title={item.title}
            icon={ <Icon type={item.icon} style={{fontSize:"24px"}}/> }
        >
            {item.children.map((i) => renderMenu(i, path + item.path))}
        </Menu.SubMenu>
    )
}

class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed:false
        }
    }
    render() {
        let { collapsed } = this.state;
        let { menus = [], openMenuKeys ,selectMenu } = this.props;
        let openMenu = []
        if(selectMenu){
            openMenu.push(selectMenu.key)
        }
        return (
            <Sider  collapsible collapsed={collapsed} onCollapse={this.onCollapse} style={{ height: "100vh", overflowY: "auto" }} theme="light">
                <div className="logo">
                    <h1>LOGO</h1>
                </div>
                <Menu
                    theme="light"
                    mode="inline"
                    onOpenChange={this.onOpenChange}
                    selectedKeys={ openMenu } //定位当前页面激活菜单
                    openKeys={ openMenuKeys }
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
        this.props.setOpenMenus(keys)
    }
    onCollapse=()=>{
        this.setState(state=>{
            return {
                collapsed:!state.collapsed
            }
        })
    }
}
const mapStateToProps = (state) => ({
    openMenuKeys: state.menus.openMenuKeys, //展开的menu项
    selectMenu: state.menus.selectMenu
})
const mapDispatchTopProps = (dispatch) => ({
    setOpenMenus: (list) => dispatch(setOpenMenus(list))
})
export default withRouter(connect(mapStateToProps, mapDispatchTopProps)(SideMenu))

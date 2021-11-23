import React, { Component } from "react"
import { Route, Redirect, withRouter } from "react-router-dom"
import { connect } from "react-redux"
import store from "../store"

const mapStateTopProps = (state) => {
    return {
        token: state.user.token,
        user: state.user.userInfo
    }
}
class ForntendAuth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...store.getState()
        }
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                ...store.getState()
            })
        })
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
    render() {
        const { routes, token } = this.props;
        const { pathname } = window.location
        // 如果该路由不用进行权限校验，登录状态下登陆页除外
        // 因为登陆后，无法跳转到登陆页
        // 这部分代码，是为了在非登陆状态f下，访问不需要权限校验的路由
        console.log('跳转路劲名称：', pathname)
        const targetRouteConfig = routes.find(item => {
            return item.path === pathname
        });
        if (targetRouteConfig && !targetRouteConfig.auth && !token) {
            const { component } = targetRouteConfig;
            return <Route path={pathname} component={component} />
        }
        if (!!token) {
            if (pathname === "/login") {
                return <Redirect to="/" />
            } else {
                if (targetRouteConfig) {
                    if (targetRouteConfig.redirect) return <Redirect to={targetRouteConfig.redirect} />;
                    return <Route path={pathname} render={(props) => (<targetRouteConfig.component {...props} />)} />
                } else {
                    // 如果路由不合法，重定向到 404 页面
                    return <Redirect to="/404" />;
                }
            }
        } else {
            // 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
            if (targetRouteConfig && targetRouteConfig.auth) {
                if (targetRouteConfig.redirect) return <Redirect to={targetRouteConfig.redirect} />;
                return <Redirect to="/login" />;
            } else {
                // 非登陆状态下，路由不合法时，重定向至 404
                return <Redirect to="/404" />;
            }
        }
    }
}

export default withRouter(connect(mapStateTopProps)(ForntendAuth))
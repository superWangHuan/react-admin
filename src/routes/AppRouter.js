import { Component } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { connect } from "react-redux"
import { Spin } from "antd"
import Login from "../views/Login/Login"
import Layout from "../layout/Index"
const mapStateToProps = (state)=>({
    token:state.user.token
})
class AppRouter extends Component{
    constructor(props){
        super(props)
        this.state = {
            loading:true
        }
        this.setLoadState = this.setLoadState.bind(this)
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setLoadState(false)
        },500)
    }
    setLoadState(loading){
        this.setState({
            loading
        })
    }
    render() {
        let { loading } = this.state;
        let { token } = this.props
        if (loading) return (
            <Spin size="large" wrapperClassName="loading-page" tip="Loading...">
                <div className="loading-page" style={{width:"100%",height:"100vh"}}></div>
            </Spin>
        )
        if (!token){
            return <Login/>
        }
        return (
            <Router>
                <Layout/>
            </Router>
        )
    }

}

export default connect(mapStateToProps)(AppRouter);
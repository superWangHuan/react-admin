
import { BrowserRouter as Router } from "react-router-dom"
import { connect } from "react-redux"
import Login from "@/views/Login/Login"
import Layout from "@/layout/Index"


const mapStateToProps = (state)=>({
    token:state.user.token,
})

function AppRouter({token}) {
    if (!token) {
        return <Login/>
    }
    return (
        <Router>
            <Layout/>
        </Router>
    )
}


export default connect(mapStateToProps,null)(AppRouter);

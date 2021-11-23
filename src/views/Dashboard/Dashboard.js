import React,{ Component} from "react"
import { Link } from "react-router-dom"
import { Button } from "antd"
import store from "../../store"
import {setToken} from "../../store/actions/userInfo"
import { connect } from "react-redux"

const mapStateToProps = (state /*, ownProps*/) => {
    return {
      userInfo: state.user.userInfo
    };
};
class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            ...store.getState()
        }
        this.unsubscribe = store.subscribe(()=>{
            this.setState({
                ...store.getState()
            })
        })
    }
    
    componentDidMount(){
       
    }
    componentWillUnmount(){
        this.unsubscribe()
    }
    testStore=()=>{
        store.dispatch(setToken("token test"))
    }
    render(){
        let { user } = this.state
        return (
            <div>
               <h1>Dashboard</h1> 
               <Link to={"/user"}>go user</Link><br/>
               <Link to={"/todo"}>go todu</Link>
               <p>token:{ user.token }</p>
               <Button onClick={ this.testStore }>redux test</Button>
            </div>
        )
    }
}

export default connect(mapStateToProps,null)(Dashboard)
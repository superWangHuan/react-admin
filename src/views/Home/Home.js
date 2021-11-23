import React,{ Component} from "react"
import { Link,Switch,Route } from "react-router-dom"
import { Button } from "antd"
import store from "../../store"
import {setToken} from "../../store/actions/userInfo"
import { connect } from "react-redux"
import Demo from "../testChildViews/Demo"

const mapStateToProps = (state /*, ownProps*/) => {
    return {
      userInfo: state.user.userInfo
    };
};
class Home extends Component{
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
               <p>Home</p> 
               <Link to={"/todo/index"}>go todu</Link><br/>
               <Link to={"/home/demo"}>go demo</Link>
               <p>token:{ user.token }</p>
               <Button onClick={ this.testStore }>redux test</Button>
               <Switch>
                    <Route exact path="/user">
                        欢迎来到我的个人中心页面
                    </Route>
                    <Route path="/home/demo" component={Demo}></Route>
               </Switch>
               
            </div>
        )
    }
}

export default connect(mapStateToProps,null)(Home)
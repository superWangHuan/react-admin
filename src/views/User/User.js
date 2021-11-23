import React,{ Component } from "react"

class User extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    componentDidMount(){
        console.log("user init")
    }
    render(){
        return (
            <p>User</p>
        )
    }
}

export default User
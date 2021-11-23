import React,{Component} from "react"
import { Link } from "react-router-dom"
class Todo extends Component{
    render(){
        return (
            <div>
                <p>Todo page</p>
                <Link to={"/todu/list"}>go list</Link>
            </div>

        )
    }
}
export default Todo;
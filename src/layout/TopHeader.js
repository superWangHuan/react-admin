import React,{ Component } from "react"
import { Layout } from "antd"
const { Header } = Layout
class TopHeader extends Component{
    render(){
        return (
            <div>
                <Header style={{ position: 'fixed', zIndex: 10, width: '100%' }}/>
            </div>
        )
    }
}

export default TopHeader

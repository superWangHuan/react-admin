import React,{ Component } from "react"
import { Layout } from "antd"
import ContentRouter from "@/routes"

const { Content } = Layout;

class SideMenu extends Component{
    render(){
        return (
            <Content style={{padding:"15px"}}>
                <ContentRouter/>
            </Content>
        )
    }
}
export default SideMenu
import { Layout,Avatar } from "antd"
import {connect} from "react-redux";

const { Header } = Layout
const mapStateToProps = state=>({
    user:state.user.userInfo
})
function TopHeader({user}){
    return (
        <div>
            <Header style={{ position: 'fixed', zIndex: 10, width: '100%'}}>
                <div style={{position:"relative",zIndex:11}}>
                    <Avatar size={45} src={ user.avatar } />
                </div>

            </Header>
        </div>
    )
}

export default connect(mapStateToProps)(TopHeader)

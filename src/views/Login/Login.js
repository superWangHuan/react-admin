import React, { Component } from "react"
import { Input, Button, Checkbox, Form } from "antd"
import { UserOutlined, EyeTwoTone, EyeInvisibleOutlined, LockOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import "./index.scss"
import avatar from "@/assets/images/avatar.webp"
import { handleLogin } from "@/store/actions/userInfo";
import { connect } from 'react-redux'

var test = "data:image/png;base64,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"

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        msg:"这是mapStateToProps中的数据"
    };
};
  
const mapDispatchToProps = { handleLogin };


class Login extends Component {
    state = {
        loading: false,
    }
    constructor(props) {
        super(props)
        this.state = {}
    }
    handleLoading=(state)=>{
        this.setState({
            loading:state||false
        })
    }
    onFinish = (e) => { 
        let data = e;
        this.props.handleLogin(data,this.props.history) //登录
        
    }
    onFinishFailed = (e) => {
        console.log('err',e)
    }
    render() {
        const iconStyle = { color: "#999999" }
        return (
            <div className="login">
                <div className="login-container">
                    <div className="bg-box"></div>
                    <div className="avatar-box">
                        <img src={avatar} className="avatar" alt=""/>
                    </div>
                    <div className="login-form flex col">
                        <Form
                            name="basic"
                            labelCol={{ span: 0 }}
                            wrapperCol={{ span: 24 }}
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                            autoComplete="off"
                            size={12}
                        >
                            <Form.Item 
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}>
                                <div className="item">
                                    <Input
                                        bordered={false}
                                        className="input"
                                        size="large"
                                        placeholder="请输入用户名"
                                        prefix={<UserOutlined style={iconStyle} />}
                                    />
                                </div>
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}>
                                <div className="item">
                                    <Input.Password
                                        bordered={false}
                                        className="input"
                                        size="large"
                                        placeholder="请输入密码"
                                        type="password"
                                        prefix={<LockOutlined style={iconStyle} />}
                                        iconRender={visible => (visible ? <EyeTwoTone style={iconStyle} /> : <EyeInvisibleOutlined style={iconStyle} />)}
                                    />
                                </div>
                            </Form.Item>
                            <Form.Item
                                name="code"
                                rules={[{ required: true, message: 'Please input code!' }]}>
                                <div className="item code flex row">
                                    <Input
                                        bordered={false}
                                        className="input code-input"
                                        size="large"
                                        placeholder="请输入验证码"
                                        maxLength={4}
                                        prefix={<SafetyCertificateOutlined style={iconStyle} />}
                                    />
                                    <img
                                        className="login-code"
                                        width={200}
                                        height={40}
                                        src={test}
                                        alt=""
                                    />
                                </div>
                            </Form.Item>
                            <div className="remember-password item">
                                    <Checkbox><span style={{color:"#999"}}>记住密码</span></Checkbox>
                                </div>
                            <Form.Item>
                                <div className="item">
                                    <Button type="primary" htmlType="submit" className="login-btn" loading={this.state.loading} ghost>登陆</Button>
                                </div>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }

}


export default connect(mapStateToProps,mapDispatchToProps)(Login)
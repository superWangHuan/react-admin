import React, { Component } from "react"
import { Input, Button, Checkbox, Form } from "antd"
import { UserOutlined, EyeTwoTone, EyeInvisibleOutlined, LockOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import "./index.scss"
import avatar from "@/assets/images/avatar.webp"
import { handleLogin } from "@/store/actions/userInfo";
import { connect } from 'react-redux'


const mapStateToProps = (state /*, ownProps*/) => {
    return {
        msg:"这是mapStateToProps中的数据"
    };
};

const mapDispatchToProps = { handleLogin };


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            codeImg:"http://localhost:9000/captcha/code",
            refreshCodeImage:false
        }
    }
    handleLoading=(state)=>{
        this.setState({
            loading:state||false
        })
    }
    onFinish = (e) => {
        this.props.handleLogin(e,this.props.history) //登录
        this.refreshCode()
    }
    onFinishFailed = (e) => {
        console.log('err',e)
    }
    refreshCode=()=>{
        this.setState({
            refreshCodeImage:true
        })
        setTimeout(()=>{
            this.setState({
                refreshCodeImage:false
            })
        },0)
    }
    render() {
        const iconStyle = { color: "#999999" }
        const { codeImg,refreshCodeImage } = this.state
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

                                    {
                                        !refreshCodeImage && <img
                                            className="login-code"
                                            width={200}
                                            height={40}
                                            src={codeImg}
                                            alt=""
                                            onClick={this.refreshCode}
                                        />
                                    }
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

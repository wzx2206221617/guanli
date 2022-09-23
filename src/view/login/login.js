import React from 'react';
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate()
    const heandlogin = () => {
        navigate('/app');
    }
    return (
        <div>
            <p>登录页面</p>
            <Button type="primary" onClick={heandlogin}>登录</Button>
        </div>
    )
}
export default Login;
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    ImportOutlined
} from '@ant-design/icons';
import { Layout, Menu, Image, Button } from 'antd';
import React, { useState } from 'react';
import './home.scss'
import { useNavigate } from "react-router-dom";
import Router from '../../router/router'
const { Header, Sider, Content } = Layout;
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('图形', '/graph', <DesktopOutlined />),
    getItem('消息', '/message', <PieChartOutlined />),
    // getItem('Option 3', '3', <ContainerOutlined />),
    // getItem('Navigation One', 'sub1', <MailOutlined />, [
    //     getItem('Option 5', '5'),
    // ]),
    // getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    //     getItem('Option 9', '9'),
    //     getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    // ]),
];
const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    const todoMenu = ({ key, keyPath }) => {
        console.log(key)
        navigate(`${key}`)
    }
    return (
        <Layout className="main">
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                    <Image height={40} src="../../logo192.png"></Image>
                    <div className="logo_name">
                        管理系统
                    </div>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['/graph']}//初始选中的菜单项 key 数组
                    defaultOpenKeys={['/graph']}//初始展开的 SubMenu 菜单项 key 数组
                    items={items}
                    onClick={todoMenu}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                >
                    <Button type="primary" onClick={() => setCollapsed(!collapsed)} style={{ marginBottom: 16 }}>
                        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    </Button>
                    <Button type="primary" onClick={() => { navigate(`/login`) }} shape="circle" icon={<ImportOutlined />} />
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <div>
                       嗷嗷嗷
                    </div>
                    <Router/>
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;
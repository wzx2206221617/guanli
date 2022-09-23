import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Image, Button } from 'antd';
import React, { useState } from 'react';
import './Menu.scss'
import { useNavigate, Route, Routes } from "react-router-dom";
import Home from "../Routes/Home"
import About from '../Routes/About';
import Option1 from '../Routes/option1';
import Option2 from '../Routes/option2';
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
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Option 3', '3', <ContainerOutlined />),
    getItem('Navigation One', 'sub1', <MailOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
    ]),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    ]),
];
const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    const todoMenu = ({ key, keyPath }) => {
        console.log(key, keyPath)
        navigate(`/${key}`)
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
                    defaultSelectedKeys={['1']}//初始选中的菜单项 key 数组
                    defaultOpenKeys={['1']}//初始展开的 SubMenu 菜单项 key 数组
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
                        11112
                    </div>
                    <Routes>
                        <Route path='*' element={<Home to="/home" />} />
                        <Route exact path="1" element={<Home />} />
                        <Route exact path="2" element={<About />} />
                        <Route exact path="5" index element={<Option1 />} />
                        <Route exact path="6" index element={<Option2 />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;
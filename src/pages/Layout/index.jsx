// test if token is taken
// import { request } from '@/utils'
// import { useEffect } from 'react'

// const Layout=() =>{
//     useEffect(()=>{
//         request.get('/user/profile')
//     },[])
//     return <div>this is layout</div>
// }

// export default Layout

import { Layout, Menu, Popconfirm } from "antd";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./index.scss";
import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import logo from '@/assets/dashboard_icon.svg';

const { Header, Sider } = Layout;

const items = [
  {
    label: "首页",
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "文章管理",
    key: "/diary",
    icon: <DiffOutlined />,
  },
  {
    label: "创建文章",
    key: "/healthTracker",
    icon: <EditOutlined />,
  },
];
function sayhello() {
  <h1>123123123</h1>
}

const GeekLayout = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLandingClick = () => {
    navigate('/landing'); // Navigate to the login page
  };

  const handleLogout = () => {
      // Perform any logout actions here
      navigate('/login'); // Navigate to the login page
  };
  
  return (
    <Layout>
      <Header className="layout-header">
        <div className="logo-container" >
          <img src={logo} alt="logo landing page button" onClick={handleLandingClick} />
          <span className="logo-text">MedDash</span>
          <div className="user-info">
            <span className="user-name">user.name</span>
            <span className="user-logout">
              <Popconfirm title="Are you sure you want to logout?" onConfirm={handleLogout} okText="Logout" cancelText="Cancel">
                  <LogoutOutlined /> Logout
              </Popconfirm>
            </span>
          </div>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background" >
          <Menu
            mode="inline"
            theme="light"
            defaultSelectedKeys={["1"]}
            style={{ height: "100%", borderRight: 0}}
          >
            <Menu.Item icon={<HomeOutlined />} key="1" onClick={sayhello}>
              <Link to={"/home"}>Home Page</Link>
            </Menu.Item>

            <Menu.Item icon={<EditOutlined />} key="2">
            <Link to={"/diary"}>Diary Entries</Link>
            </Menu.Item>

            <Menu.Item icon={<DiffOutlined />} key="3">
            <Link to={"/healthAnalysis"}>Health Analysis</Link>
            </Menu.Item>

            <Menu.Item icon={<EditOutlined />} key="4">
            <Link to={"/healthTracker"}>Health Habit Tracker</Link>
            </Menu.Item>

          </Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
       
      
          <Outlet/>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default GeekLayout;


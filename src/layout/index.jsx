import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import { Layout, Menu } from "antd";
import Styles from "./index.module.css";
import React, { useEffect, useState } from "react";
import { menuJson } from "./menu";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

export default () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const navigate = useNavigate();
  const myLocation = useLocation();

  const onMenuClick = (e) => {
    navigate(e.key || "/");
  };

  useEffect(() => {
    console.log(myLocation, "myLocation");
    if (myLocation?.pathname === "/") {
      navigate("/goods");
    } else {
      setSelectedKeys(myLocation?.pathname);
    }
  }, [myLocation]);

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className={Styles.layout}
      >
        <div className={Styles.logo}>
          {!collapsed ? "mi-shop-admin" : <img src="/favicon.png" alt="" />}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          items={menuJson}
          onClick={onMenuClick}
          selectedKeys={selectedKeys}
        />
      </Sider>
      <Layout className={Styles.siteLayout}>
        <Header className={Styles.siteLayoutBackground} style={{ padding: 0 }}>
          <span
            onClick={() => setCollapsed(!collapsed)}
            className={Styles.trigger}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </span>
        </Header>
        <Content
          className={Styles.siteLayoutBackground}
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

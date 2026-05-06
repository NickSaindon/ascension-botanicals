import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Layout, Menu, Button, Drawer, theme, Badge, Space } from "antd";
import {
  MenuOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  MailOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

const { Header } = Layout;
const { useToken } = theme;

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Example cart count
  const { token } = useToken();
  const router = useRouter();

  const menuItems = [
    {
      key: "/",
      icon: <HomeOutlined />,
      label: <Link href="/">Home</Link>,
    },
    {
      key: "/about",
      icon: <InfoCircleOutlined />,
      label: <Link href="/about">About</Link>,
    },
    {
      key: "/wholesale",
      icon: <InfoCircleOutlined />,
      label: <Link href="/wholesale">Wholesale</Link>,
    },
    {
      key: "/contact",
      icon: <MailOutlined />,
      label: <Link href="/contact">Contact</Link>,
    },
  ];

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log("Login clicked");
  };

  const handleCart = () => {
    // Handle cart logic here
    console.log("Cart clicked");
  };

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        backgroundColor: token.colorBgContainer,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: token.colorPrimary,
          whiteSpace: "nowrap",
          marginRight: "25px",
        }}
      >
        <Image
          src="/images/Ascension-Logo.png"
          alt="Hero Background"
          priority
          width={105}
          height={35}
        />
      </div>

      {/* Desktop Menu (visible above 900px) */}
      <div className="desktop-menu">
        <Menu
          mode="horizontal"
          selectedKeys={[router.pathname]}
          items={menuItems}
          style={{
            flex: 1,
            minWidth: 0,
            border: "none",
            backgroundColor: "transparent",
          }}
        />
        <Space size="middle" style={{ marginLeft: "16px" }}>
          <Button type="text" icon={<UserOutlined />} onClick={handleLogin}>
            Login
          </Button>
          <Badge count={cartCount} offset={[0, 0]}>
            <Button
              type="text"
              icon={<ShoppingCartOutlined style={{ fontSize: "20px" }} />}
              onClick={handleCart}
            />
          </Badge>
        </Space>
      </div>

      {/* Mobile Menu Button (visible at 900px and below) */}
      <div className="mobile-menu-button">
        <Button
          type="text"
          icon={<MenuOutlined style={{ fontSize: "20px" }} />}
          onClick={showDrawer}
        />
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        open={drawerVisible}
        size="default"
        styles={{ body: { padding: 0 } }}
      >
        <Menu
          mode="vertical"
          selectedKeys={[router.pathname]}
          items={[
            ...menuItems,
            {
              type: "divider",
            },
            {
              key: "/login",
              icon: <UserOutlined />,
              label: "Login",
              onClick: () => {
                handleLogin();
                closeDrawer();
              },
            },
            {
              key: "/cart",
              icon: <ShoppingCartOutlined />,
              label: (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Shopping Cart</span>
                  <Badge count={cartCount} style={{ marginLeft: "8px" }} />
                </div>
              ),
              onClick: () => {
                handleCart();
                closeDrawer();
              },
            },
          ]}
          style={{ border: "none" }}
        />
      </Drawer>
    </Header>
  );
};

export default Navbar;

import { HomeOutlined, LoginOutlined, LogoutOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useHistory } from "react-router-dom"
import { useState } from 'react';

const { Header, Content, Sider } = Layout;

const Default = ({ children }) => {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);


  const onClick = (e) => {
    const { keyPath: [key, path] } = e
    if (key === 'login') {
      history.push(`/users/login`)
    }
    else if (path && key) {
      history.push(`/${path}/${key}`)
    }
    else {
      history.push(`/movies/view`)
    }
  };

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const items = [
    getItem('Home', '1', <HomeOutlined />),
    getItem('Login', 'login', <LoginOutlined />),
    getItem('Logout', 'logout', <LogoutOutlined />),
    getItem('Movies', 'movies', <AppstoreOutlined />,
      [getItem('ViewMovies', 'view')]),

  ];
  return (
    <Layout style={{ height: "130vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={onClick} items={items} />
      </Sider>
      <Layout>
        <Header style={{ height: "45px" }}></Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}


export default Default
import React, { useState } from 'react';
import { BookOutlined, EditOutlined, HomeOutlined, InfoCircleOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import './style.scss';
import logo from './assets/logo-VT.png';
import { MenuItem, menuItems } from './Sidebar';
import { MenuOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  const renderMenuItem = (item: MenuItem) => {
    if (item.subMenuItems) {
      return (
        <SubMenu key={item.key} title={item.title} icon={item.icon}>
          {item.subMenuItems.map((childItem) => renderMenuItem(childItem))}
        </SubMenu>
      );
    }

    return (
      <Menu.Item key={item.key} onClick={closeMenu} icon={item.icon}>
        <a href={item.link}>{item.title}</a>
      </Menu.Item>
    );
  };

  return (
    <header className="header" id="header">
      <nav className="navbar container">
        <div className="brand">
          <a href="./index.html">
            <img src={logo} alt="Logo" className="logo" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="brand-name" style={{margin:"-2px"}}>I.I.S. SUPERIORE</span>
              <span className="brand-name" style={{margin:"-2px", fontWeight: 'bolder' }}>
                VERONA-TRENTO
              </span>
              <span className="brand-name" style={{margin:"-2px"}}>MESSINA</span>
            </div>
          </a>
        </div>
        <div className={`burger ${isMenuActive ? 'is-active' : ''}`} id="burger" onClick={toggleMenu}>
          <MenuOutlined />
        </div>
        <div className={`overlay ${isMenuActive ? 'is-active' : ''}`} onClick={closeMenu}></div>
        <div className={`menu ${isMenuActive ? 'is-active' : ''}`} id="menu">
          <Menu mode="inline" defaultSelectedKeys={['home']}>
            {menuItems.map((item) => renderMenuItem(item))}
          </Menu>
        </div>
        <span>
          <i className="bx bx-search search-toggle" onClick={toggleSearch}></i>
        </span>
        <div className={`search-block ${isSearchActive ? 'is-active' : ''}`}>
          <form className="search-form">
            <span>
              <i className="bx bx-arrow-back search-cancel" onClick={toggleSearch}></i>
            </span>
            <input type="search" name="search" className="search-input" placeholder="Cerca sul sito Verona Trento..." />
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
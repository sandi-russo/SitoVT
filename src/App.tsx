import React from 'react';
import { BookOutlined, EditOutlined, HomeOutlined, InfoCircleOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import Navbar from './Navbar';
import './style.scss';

const { SubMenu } = Menu;



export type MenuItem = {
  key: string;
  icon: JSX.Element;
  title: string;
  link?: string;
  subMenuItems?: MenuItem[];
};

interface CustomMenuProps extends MenuProps {
  onCollapse?: (collapsed: boolean) => void;
  collapsed?: boolean;
  }

  export const menuItems: MenuItem[] =[
  {
    key: 'home',
    icon: <HomeOutlined />,
    title: 'Home',
  },
  {
    key: 'organigramma',
    icon: <SolutionOutlined />,
    title: 'Organigramma',
    subMenuItems: [
      {
        key: 'sistema',
        icon: <UserOutlined />,
        title: 'Figure di Sistema',
      },
      {
        key: 'pcto',
        icon: <UserOutlined />,
        title: 'PCTO',
      },
      {
        key: 'tematiche',
        icon: <UserOutlined />,
        title: 'Figure Tematiche',
      },
      {
        key: 'strumentali',
        icon: <UserOutlined />,
        title: 'Funzioni Strumentali',
      },
      {
        key: 'presidenza',
        icon: <UserOutlined />,
        title: 'Ufficio Presidenza',
      },
      {
        key: 'segreteria',
        icon: <UserOutlined />,
        title: 'Uffico Segreteria',
      },
    ],
  },
  {
    key: 'circolari',
    icon: <InfoCircleOutlined />,
    title: 'Circolari',
    subMenuItems: [
      {
        key: 'circolari-diurno',
        icon: <UserOutlined />,
        title: 'Circolari Diurno',
      },
      {
        key: 'circolari-serale',
        icon: <UserOutlined />,
        title: 'Circolari Serale',
      },
      {
        key: 'circolari-2020',
        icon: <UserOutlined />,
        title: 'Circolari 2020',
      },
      {
        key: 'circolari-2021',
        icon: <UserOutlined />,
        title: 'Circolari 2021',
      },
    ],
  },
  {
    key: 'offerta-formativa',
    icon: <BookOutlined />,
    title: 'Offerta Formativa',
    subMenuItems: [
      {
        key: 'ecdl',
        icon: <EditOutlined />,
        title: 'ECDL',
      },
      {
        key: 'cisco',
        icon: <BookOutlined />,
        title: 'Cisco',
      },
      {
        key: 'erasmus',
        icon: <UserOutlined />,
        title: 'Erasmus',
      },
      {
        key: 'zero-robotics',
        icon: <UserOutlined />,
        title: 'Zero Robotics',
      },
      {
        key: 'nao-challenge',
        icon: <UserOutlined />,
        title: 'Nao Challenge',
      },
      {
        key: 'cambridge',
        icon: <UserOutlined />,
        title: 'Cambridge',
      },
    ],
  },
  {
    key: 'studenti',
    icon: <UserOutlined />,
    title: 'Studenti',
    subMenuItems: [
      {
        key: 'modulistica-studenti',
        title: 'Modulistica',
        icon: <EditOutlined />,
        subMenuItems: [
          {
            key: 'cambio-specializzazione',
            icon: <InfoCircleOutlined />,
            title: 'Cambio specializzazione',
          },
          {
            key: 'richiesta-deroga',
            icon: <InfoCircleOutlined />,
            title: 'Richiesta deroga',
          },
          {
            key: 'crediti-formativi',
            icon: <InfoCircleOutlined />,
            title: 'Domanda Crediti Formativi',
          },
          {
            key: 'certificazione-medica',
            icon: <InfoCircleOutlined />,
            title: 'Modello Certificazione Medica e PDP',
          },
          {
            key: 'conferma-iscrizione',
            icon: <InfoCircleOutlined />,
            title: 'Conferma Iscrizione',
          },
          {
            key: 'nulla-osta',
            icon: <InfoCircleOutlined />,
            title: 'Nulla Osta - Trasferimento',
          },
          {
            key: 'non-iscrizione',
            icon: <InfoCircleOutlined />,
            title: 'Non Conferma Iscrizione',
          },
          {
            key: 'esonero-fisica',
            icon: <InfoCircleOutlined />,
            title: 'Esonero EdFisica',
          },
          {
            key: 'esonero-lingua-inglese',
            icon: <InfoCircleOutlined />,
            title: 'Esonero Lingua Inglese',
          },
          {
            key: 'esonero-informatica',
            icon: <InfoCircleOutlined />,
            title: 'Esonero Informatica',
          },
        ],
      },
      {
        key: 'orario-lezioni',
        icon: <InfoCircleOutlined />,
        title: 'Orario Lezioni',
      },
      {
        key: 'avvisi-studenti',
        icon: <InfoCircleOutlined />,
        title: 'Avvisi Studenti',
      },
      {
        key: 'servizi-studenti',
        title: 'Servizi',
        icon: <SolutionOutlined />,
        subMenuItems: [
          {
            key: 'fotocopie',
            icon: <InfoCircleOutlined />,
            title: 'Fotocopie',
          },
          {
            key: 'mensa',
            icon: <InfoCircleOutlined />,
            title: 'Mensa',
          },
          {
            key: 'parcheggio',
            icon: <InfoCircleOutlined />,
            title: 'Parcheggio',
          },
          {
            key: 'portale-studenti',
            icon: <InfoCircleOutlined />,
            title: 'Portale Studenti',
          },
          {
            key: 'biblioteca',
            icon: <InfoCircleOutlined />,
            title: 'Biblioteca',
          },
        ],
      },
    ],
  },
];


const Sidebar = ({ collapsed, onCollapse }: CustomMenuProps) => {
  const renderMenuItem = (item: any) => (
    <Menu.Item key={item.key} icon={item.icon}>
      {item.title}
    </Menu.Item>
  );
  
const renderSubMenu = (item: any) => (
    <SubMenu key={item.key} icon={item.icon} title={item.title}>
      {item.subMenuItems.map((subItem: any) =>
        subItem.subMenuItems ? (
          <SubMenu key={subItem.key} icon={subItem.icon} title={subItem.title}>
            {subItem.subMenuItems.map((subSubItem: any) => (
              <Menu.Item key={subSubItem.key} icon={subSubItem.icon}>
                {subSubItem.title}
              </Menu.Item>
            ))}
          </SubMenu>
        ) : (
          <Menu.Item key={subItem.key} icon={subItem.icon}>
            {subItem.title}
          </Menu.Item>
        ),
      )}
    </SubMenu>
  );


  return (
    <Layout.Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu className="Sidebar" theme="light" mode="vertical" defaultSelectedKeys={['home']} style = {{width: 256, height: '100vh', position: 'fixed', left: 0, top: 80, bottom: 0}}>
        {menuItems.map((item) =>
          item.subMenuItems ? renderSubMenu(item) : renderMenuItem(item),
        )}
      </Menu>
      <Navbar />
    </Layout.Sider>
  );
};

export default Sidebar;
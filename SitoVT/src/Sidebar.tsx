import { BookOutlined, EditOutlined, HomeOutlined, InfoCircleOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import { Menu } from 'antd';
import './style.scss';

const { SubMenu } = Menu;

export type MenuItem = {
  key: string;
  icon: JSX.Element;
  title: string;
  link?: string;
  subMenuItems?: MenuItem[];
};

export const menuItems: MenuItem[] = [
  {
    key: 'home',
    icon: <HomeOutlined />,
    title: 'Home',
    link: '/',
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
        link: '/organigramma/sistema',
      },
      {
        key: 'pcto',
        icon: <UserOutlined />,
        title: 'PCTO',
        link: '/organigramma/pcto',
      },
      {
        key: 'tematiche',
        icon: <UserOutlined />,
        title: 'Figure Tematiche',
        link: '/organigramma/tematiche',
      },
      {
        key: 'strumentali',
        icon: <UserOutlined />,
        title: 'Funzioni Strumentali',
        link: '/organigramma/strumentali',
      },
      {
        key: 'presidenza',
        icon: <UserOutlined />,
        title: 'Ufficio Presidenza',
        link: '/organigramma/presidenza',
      },
      {
        key: 'segreteria',
        icon: <UserOutlined />,
        title: 'Uffico Segreteria',
        link: '/organigramma/segreteria',
      },
    ],
  },
  {
    key: 'circolari',
    icon: <InfoCircleOutlined />,
    title: 'Circolari',
    link: '/circolari',
    subMenuItems: [
      {
        key: 'circolari-diurno',
        icon: <UserOutlined />,
        title: 'Circolari Diurno',
        link: '/circolari/diurno',
      },
      {
        key: 'circolari-serale',
        icon: <UserOutlined />,
        title: 'Circolari Serale',
        link: '/circolari/serale',
      },
      {
        key: 'circolari-2020',
        icon: <UserOutlined />,
        title: 'Circolari 2020',
        link: '/circolari/2020',
      },
      {
        key: 'circolari-2021',
        icon: <UserOutlined />,
        title: 'Circolari 2021',
        link: '/circolari/2021',
      },
    ],
  },
  {
    key: 'offerta-formativa',
    icon: <BookOutlined />,
    title: 'Offerta Formativa',
    link: '/offerta-formativa',
    subMenuItems: [
      {
        key: 'ecdl',
        icon: <EditOutlined />,
        title: 'ECDL',
        link: '/offerta-formativa/ecdl',
      },
      {
        key: 'cisco',
        icon: <BookOutlined />,
        title: 'Cisco',
        link: '/offerta-formativa/cisco',
      },
      {
        key: 'erasmus',
        icon: <UserOutlined />,
        title: 'Erasmus',
        link: '/offerta-formativa/erasmus',
      },
      {
        key: 'zero-robotics',
        icon: <UserOutlined />,
        title: 'Zero Robotics',
        link: '/offerta-formativa/zero-robotics',
      },
      {
        key: 'nao-challenge',
        icon: <UserOutlined />,
        title: 'Nao Challenge',
        link: '/offerta-formativa/nao-challenge',
      },
      {
        key: 'cambridge',
        icon: <UserOutlined />,
        title: 'Cambridge',
        link: '/offerta-formativa/cambridge',
      },
    ],
  },
  {
    key: 'studenti',
    icon: <UserOutlined />,
    title: 'Studenti',
    link: '/studenti',
    subMenuItems: [
      {
        key: 'modulistica-studenti',
        title: 'Modulistica',
        icon: <EditOutlined />,
        link: '/studenti/modulistica',
        subMenuItems: [
          {
            key: 'cambio-specializzazione',
            icon: <InfoCircleOutlined />,
            title: 'Cambio specializzazione',
            link: '/studenti/modulistica/cambio-specializzazione',
          },
          {
            key: 'richiesta-deroga',
            icon: <InfoCircleOutlined />,
            title: 'Richiesta deroga',
            link: '/studenti/modulistica/richiesta-deroga',
          },
          {
            key: 'crediti-formativi',
            icon: <InfoCircleOutlined />,
            title: 'Domanda Crediti Formativi',
            link: '/studenti/modulistica/crediti-formativi',
          },
          {
            key: 'certificazione-medica',
            icon: <InfoCircleOutlined />,
            title: 'Modello Certificazione Medica e PDP',
            link: '/studenti/modulistica/certificazione-medica',
          },
          {
            key: 'conferma-iscrizione',
            icon: <InfoCircleOutlined />,
            title: 'Conferma Iscrizione',
            link: '/studenti/modulistica/conferma-iscrizione',
          },
          {
            key: 'nulla-osta',
            icon: <InfoCircleOutlined />,
            title: 'Nulla Osta - Trasferimento',
            link: '/studenti/modulistica/nulla-osta',
          },
          {
            key: 'non-iscrizione',
            icon: <InfoCircleOutlined />,
            title: 'Non Conferma Iscrizione',
            link: '/studenti/modulistica/non-iscrizione',
          },
          {
            key: 'esonero-fisica',
            icon: <InfoCircleOutlined />,
            title: 'Esonero EdFisica',
            link: '/studenti/modulistica/esonero-fisica',
          },
          {
            key: 'esonero-lingua-inglese',
            icon: <InfoCircleOutlined />,
            title: 'Esonero Lingua Inglese',
            link: '/studenti/modulistica/esonero-inglese',
          },
          {
            key: 'esonero-informatica',
            icon: <InfoCircleOutlined />,
            title: 'Esonero Informatica',
            link: '/studenti/modulistica/esonero-informatica',
          },
        ],
      },
      {
        key: 'orario-lezioni',
        icon: <InfoCircleOutlined />,
        title: 'Orario Lezioni',
        link: '/studenti/orario-lezioni',
      },
      {
        key: 'avvisi-studenti',
        icon: <InfoCircleOutlined />,
        title: 'Avvisi Studenti',
        link: '/studenti/avvisi',
      },
    ],
  },
  {
    key: 'scuola-vt',
    title: 'Verona Trento',
    icon: <SolutionOutlined />,
    link: '/scuola-vt',
    subMenuItems: [
      {
        key: 'storia-vt',
        icon: <InfoCircleOutlined />,
        title: 'Storia',
        link: '/scuola-vt/storia',
      },
      {
        key: 'dove-siamo-vt',
        icon: <InfoCircleOutlined />,
        title: 'Dove Siamo',
        link: '/scuola-vt/dove-siamo',
      },
      {
        key: 'real-cittadella',
        icon: <InfoCircleOutlined />,
        title: 'Real Cittadella',
        link: '/scuola-vt/real-cittadella',
      },
      {
        key: 'certificazione-qualita',
        icon: <InfoCircleOutlined />,
        title: 'Certificazione di Qualità',
        link: '/scuola-vt/certificazione-qualita',
      },
      {
        key: 'aula-magna-360',
        icon: <InfoCircleOutlined />,
        title: 'Aula Magna a 360°',
        link: '/scuola-vt/aula-magna',
      },
      {
        key: 'indirizzi-tecnologico',
        icon: <InfoCircleOutlined />,
        title: 'Indirizzi Istituto Tecnologico',
        link: '/scuola-vt/indirizzi-tecnologico',
      },
      {
        key: 'area-comune',
        icon: <InfoCircleOutlined />,
        title: 'Area Comune',
        link: '/scuola-vt/area-comune',
      },
    ],
  },
  {
    key: 'scuola-majorana',
    title: 'Majorana',
    icon: <SolutionOutlined />,
    link: '/scuola-majorana',
    subMenuItems: [
      {
        key: 'storia-majorana',
        icon: <InfoCircleOutlined />,
        title: 'Storia',
        link: '/scuola-majorana/storia',
      },
      {
        key: 'dove-siamo-majorana',
        icon: <InfoCircleOutlined />,
        title: 'Dove Siamo',
        link: '/scuola-majorana/dove-siamo',
      },
      {
        key: 'indirizzi-professionali',
        icon: <InfoCircleOutlined />,
        title: 'Indirizzi Istituto Professionali',
        link: '/scuola-majorana/indirizzi-professionali',
      },
    ],
  },
];


const renderMenuItems = (menuItems: MenuItem[]): JSX.Element[] => {
  return menuItems.map((item: MenuItem) => {
    if (item.subMenuItems) {
      return (
        <SubMenu key={item.key} icon={item.icon} title={item.title}>
          {renderMenuItems(item.subMenuItems)}
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item key={item.key} icon={item.icon}>
          {item.link ? (
            <NavLink to={item.link}>
              {item.title}
            </NavLink>
          ) : (
            <span>{item.title}</span>
          )}
        </Menu.Item>
      );
    }
  });
};

const Sidebar = () => {
  return (
    <Router>
      <Menu className="Sidebar" theme="light" mode="vertical" defaultSelectedKeys={['home']} style={{ width: 256, height: '100vh', position: 'fixed', left: 0, top: 80, bottom: 0 }}>
        {renderMenuItems(menuItems)}
      </Menu>
    </Router>
  );
};

export default Sidebar;
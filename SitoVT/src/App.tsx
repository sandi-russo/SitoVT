import React, { lazy, Suspense } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './style.scss';
import { Layout } from 'antd';

const { Content } = Layout;

const getPageComponent = (pathname: string) => {
  const pageName = pathname.slice(1).toLowerCase();

  if (pageName === '') {
    return lazy(() => import('./pages/home').then((module: any) => ({ default: module.default })));
  }

  // recupera dinamicamente tutti i file presenti nella cartella "pages" e nelle sue sottocartelle
  const pages = import.meta.glob('./pages/**/*.tsx');
  const pagePath = `./pages/${pageName}.tsx`;

  if (pages[pagePath]) {
    return lazy(() => pages[pagePath]().then((module: any) => ({ default: module.default })));
  } else {
    console.error(`Unable to load component for page '${pageName}'`);
    return lazy(() => import(`./pages/not-found`).then((module: any) => ({ default: module.default })));
  }
};

const App: React.FC = () => {
  const { pathname } = window.location;
  const PageComponent = getPageComponent(pathname);

  return (
    <Layout>
        <Navbar />
      <Layout>
          <Sidebar />

        <Content style={{ padding: 24, margin: 0, minHeight: 280, backgroundColor: 'white', marginTop: "5rem", width: "100%"}} className='content'>

          <Suspense>
            <PageComponent />
          </Suspense>


        </Content>
      </Layout>
    </Layout>

  );
};

export default App;
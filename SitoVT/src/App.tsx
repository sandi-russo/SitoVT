import React, { lazy, Suspense } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './style.scss';
import { Layout } from 'antd';

const getPageComponent = (pathname: string) => {
  const pageName = pathname.slice(1).toLowerCase();

  if (pageName === '') {
    // se l'pathname è vuoto, impostiamo la home come pagina predefinita
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
    <div className="App">
      <Navbar />
      <Sidebar />
      <Layout className="sitelayout">
        <Suspense fallback={<h1>Loading...</h1>}>
          <PageComponent />
        </Suspense>
      </Layout>
    </div>
  );
};

export default App;
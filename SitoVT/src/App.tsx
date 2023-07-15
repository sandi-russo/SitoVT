import React, { lazy, Suspense } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './style.scss';
import { Layout } from 'antd';

const getPageComponent = (pathname) => {
  const pageName = pathname.slice(1).toLowerCase();
  const pageComponentName = `${pageName.charAt(0).toUpperCase()}${pageName.slice(1)}`;

  try {
    return lazy(() => import(`./pages/${pageName}`));
  } catch (error) {
    console.error(`Unable to load component for page '${pageName}':`, error);
    return null;
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
        <Suspense>
          {PageComponent ? <PageComponent /> : <div>404 - Page not found</div>}
        </Suspense>
      </Layout>
    </div>
  );

};

export default App;

import React from 'react';
import Navbar from './Navbar';
import Sidebar, {menuItems, MenuItem} from './Sidebar';
import './style.scss';
import { Layout } from 'antd';
import { RouteProps } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const pages = import.meta.glob("./pages/**/*.tsx", { eager: true });

const routes = [{path: '404.tsx', component: 'error'}];
for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1];
  if (!fileName) {
    continue;
  }

    routes.push({
    path: path,
    component: fileName    
  });
  console.log(fileName);

}

const App: React.FC = () => {

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Layout className="sitelayout">
        <h1>ciao, lo sai che ho creato un sito appositamente per te!</h1>
        <Router>
          <Routes>
            {routes.map((router, index) => (
          <Route
            key={router.path}
            path={router.path}
            element={<router.component />}
          />
          ))}
          </Routes>
        </Router>
      </Layout>
    </div>
  );
};

export default App;
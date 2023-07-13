import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './style.scss';
import { Layout } from 'antd';
const App: React.FC = () => {

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Layout className="sitelayout">
        <h1>ciao, lo sai che ho creato un sito appositamente per te!</h1>
      </Layout>
    </div>
  );
};

export default App;
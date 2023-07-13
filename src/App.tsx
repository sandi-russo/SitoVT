import React from 'react';
import { BookOutlined, EditOutlined, HomeOutlined, InfoCircleOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './style.scss';
import { Layout } from 'antd';


const App: React.FC = () => {

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      </div>
  );
};

export default App;
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Sidebar from './components/sidebar/home';
import Container_home from './components/container_home/home'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <div className='container'>
        <Sidebar />
        <Container_home />
      </div>
);



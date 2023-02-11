import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, 
  Routes, 
  Route } from 'react-router-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Blog from './components/Blog/Index';
import BlogDetail from './components/Blog/Detail';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Router>
      <App>
      <Routes>
      <Route path='/blog/list' element={<Blog/>} />
      <Route path='/blog/detail/:id' element={<BlogDetail/>} />
      </Routes>
      </App>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

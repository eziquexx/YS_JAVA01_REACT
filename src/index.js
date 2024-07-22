import ReactDOM from 'react-dom/client';
// import App from './step17/App';

import App from './project-mini-blog/App'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* {console.log('render')} */}
    <App/>
  </>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();

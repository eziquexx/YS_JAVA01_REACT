import ReactDOM from 'react-dom/client';
import {App2} from './App'

// const App = () => {
//   return (
//     <p>안녕하세요</p>
//   );
// }
// function App() {
//  const divStyle = {
//    border: '1px solid blue'
//  }
//   return (
//     <div style={divStyle}>
//     <p>안녕하세요</p>
//     <p>반갑습니다.</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App2/>
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

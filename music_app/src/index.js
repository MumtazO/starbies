import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <ChakraProvider>
        <React.StrictMode>
        <BrowserRouter>
        <App />
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route path="about" element={<About />} />
    <Route path="privacypolicy" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
      </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

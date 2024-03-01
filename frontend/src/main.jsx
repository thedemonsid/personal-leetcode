import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import Blogs from './Blogs.jsx';
import Problems from './Problems.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/problems" element={<Problems />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
import React, { memo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import CalculatorPage from './components/calculatorPage';
import QuotesPage from './components/QuotesPage';

const App = memo(() => (
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<QuotesPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

));
App.displayName = 'My Calculator';
export default App;

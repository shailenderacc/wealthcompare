import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SIPCalculator from './components/SIPCalculator';
import FundList from './components/FundList';
import Watchlist from './components/Watchlist';
import AuthForm from './components/AuthForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sip" element={<SIPCalculator />} />
          <Route path="/funds" element={<FundList />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/auth" element={<AuthForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
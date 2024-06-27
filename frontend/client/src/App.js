import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
// Import other components as needed

const isAuthenticated = true; // Replace with actual authentication logic

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/register" />} />
          {/* Define other routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

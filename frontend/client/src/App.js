import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import PasswordReset from './components/PasswordReset';
import { Navigate } from 'react-router-dom';
// Import other components as needed

const isAuthenticated = true; // Replace with actual authentication logic

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/register" />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/register" />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          {/* Define other routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

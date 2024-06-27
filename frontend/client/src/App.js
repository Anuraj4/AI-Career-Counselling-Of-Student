import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
// Import other components as needed

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<Register />} />
          {/* Define other routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Login from './Pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>)
}

export default App;

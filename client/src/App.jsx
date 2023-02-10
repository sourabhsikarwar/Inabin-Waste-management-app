import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Request from './Pages/collector/Request';

// Pages
import Login from './Pages/Login';
import UserLanding from './Pages/UserLanding';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/collector/requests" element={<Request />} />
        <Route path="/user" element={<UserLanding />} />
      </Routes>
    </Router>)
}

export default App;

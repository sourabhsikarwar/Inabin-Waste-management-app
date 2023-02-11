import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Login from './Pages/Login';
import Register from "./Pages/Register";
import Request from './Pages/collector/Request';
import CollectorProfile from './Pages/collector/CollectorProfile';
import CollectorRoute from './Pages/collector/Route';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/collector" element={<Request />} />
        <Route path="/collector/profile" element={<CollectorProfile />} />
        <Route path="/collector/route" element={<CollectorRoute />} />
      </Routes>
    </Router>)
}

export default App;

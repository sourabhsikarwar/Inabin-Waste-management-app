import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Request from './Pages/collector/Request';

// Pages
import Login from './Pages/Login';
import Register from "./Pages/Register";
import Request from './Pages/collector/Request';
import CollectorProfile from './Pages/collector/CollectorProfile';
import CollectorRoute from './Pages/collector/Route';
import UserLanding from './Pages/UserLanding';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/collector" element={<Request />} />
        <Route path="/collector/profile" element={<CollectorProfile />} />
        <Route path="/collector/route" element={<CollectorRoute />} />
        <Route path="/collector/requests" element={<Request />} />
        <Route path="/user" element={<UserLanding />} />
      </Routes>
    </Router>)
}

export default App;

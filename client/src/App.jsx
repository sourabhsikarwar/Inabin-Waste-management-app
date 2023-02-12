import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Request from './Pages/collector/Request';
import Login from './Pages/Login';
import Register from "./Pages/Register";
import CollectorRoute from './Pages/collector/Route';
import UserLanding from './Pages/UserLanding';

import UserLayout from './Layout/User';
import CollectorLayout from './Layout/Collector';
import RequestView from './Components/collector/RequestView';
import Home from './Pages/store/Home';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/collector" element={<Request />} />
        {/* <Route path="/collector/route" element={<CollectorRoute />} /> */}
        {/* <Route path="/collector/requests" element={<Request />} /> */}
        <Route path="/user" element={<UserLanding />} />
        <Route path="/user/:page" element={<UserLayout />} />
        <Route path="/collector/:page" element={<CollectorLayout />} />
        <Route path="/collector/:page/:id" element={<CollectorLayout />} />
        <Route path="/collector/request/:id" element={ <RequestView/> }/>
        <Route path="/store" element={ <Home/> }/>
      </Routes>
    </Router>
    </div>)
}

export default App;

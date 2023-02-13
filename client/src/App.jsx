import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

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
import Requests from './Pages/Requests';
import RequestInfo from './Pages/RequestInfo';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to='/login' />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/collector" element={<Request />} />
        <Route path="/user" element={<UserLanding />} />
        <Route path="/user/requests" element={<Requests />} />
        <Route path="/user/request/:id" element={<RequestInfo />} />
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

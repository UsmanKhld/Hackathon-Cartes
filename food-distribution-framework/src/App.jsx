import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home, RestaurantDashboard, RestaurantLogin, SupplierLogin } from './Pages/index'
import { DashGraph, DashHome } from './RestDashComponents';

const App = () => {
  return (
    <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/supplier-login" element={<SupplierLogin />} />
            <Route path="/restaurant-login" element={<RestaurantLogin />} />
            <Route path="/restaurant-signup" element={<RestaurantDashboard />} />
            <Route path="/restaurant-dash" element={<DashHome />} />
            <Route path="/restaurant-dash/graph" element={<DashGraph />} />
          </Routes>
        </div>
      </Router>
  )
}

export default App
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout/Layout';
import Sidebar from './components/Sidebar/PrimarySidebar'; // Import Sidebar
import Homepage from './pages/homepage/Homepage';
import Car from './pages/Car/Car';

const AppRoutes = () => {
  // const location = useLocation();
  // console.log('Current path:', location.pathname); // This will show the active route

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="car-insurance" element={<Car />} />
      </Route>
    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
};

export default App;
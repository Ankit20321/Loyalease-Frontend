import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout/Layout';
import Sidebar from './components/Sidebar/PrimarySidebar'; // Import Sidebar
import Login from './pages/Login'; // Import Login component
import Signup from './pages/Signup'; // Import Signup component
import Dashboard from './pages/Dashboard'; // Import Dashboard component
import Car from './pages/Car/Car';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} /> {/* Redirect root to Login */}
      <Route path="/signup" element={<Signup />} /> {/* Add Signup route */}
      <Route path="/dashboard" element={<Dashboard />} /> {/* Add Dashboard route */}
      <Route path="/car-insurance" element={<Car />} />
    </Routes>
  );
};

const App = () => {
  const isAuthRoute = window.location.pathname === '/' || window.location.pathname === '/signup';

  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          {/* {!isAuthRoute && <Sidebar />} Conditionally render Sidebar */}
          <div className="main-content">
            <AppRoutes />
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute
import React from 'react';
import Header from './components/header/Header'; // Import Header component
import Sidebar from './components/Sidebar/PrimarySidebar'; // Import Sidebar component
import Login from './pages/Login'; // Import Login component
import Signup from './pages/Signup'; // Import Signup component
import Dashboard from './pages/Dashboard'; // Import Dashboard component
import Car from './pages/Car/Car';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} /> {/* Redirect root to Login */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} /> {/* Add Signup route */}
      <Route path="/dashboard" element={
        <>
          <Header />
          <Sidebar />
          <Dashboard />
        </>
      } /> {/* Add Dashboard route with Header and Sidebar */}
      <Route path="/car-insurance" element={
        <>
          <Header />
          <Sidebar />
          <Car />
        </>
      } /> {/* Add Car route with Header and Sidebar */}
    </Routes>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <AppRoutes />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;

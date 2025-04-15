import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ContainerComponent from './Components/ContainerComponent';
import ProductList from './Components/ProductList';
import ViewWomenDetails from './Components/ViewWomenDetails';
import SpreadshopBanner from './Components/SpreadshopBanner';
import VideoComponent from './Components/VideoComponent';
import IconsComponent from './Components/IconsComponent';
import ViewAccDetails from './Components/ViewAccDetails';
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Modal from './Components/Modal';
import Register from './pages/Register';
import Login from './pages/LoginForm';
import PrivateRoute from './Components/PrivateRoute';
import Dashboard from './pages/Dashboard';
import CheckoutPage from './pages/checkout';

function App() {
  useEffect(() => {
    const adminUser = {
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin123',
      role: 'admin',
    };

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const adminExists = users.some(user => user.email === adminUser.email);

    if (!adminExists) {
      users.push(adminUser);
      localStorage.setItem('users', JSON.stringify(users));
    }
  }, []);

  const [activeModal, setActiveModal] = useState(null);

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleSwitchModal = (modalType) => {
    setActiveModal(modalType);
  };

  return (
    <>
      <Navbar setActiveModal={setActiveModal} />

      <AnimatePresence>
        {activeModal && (
          <Modal onClose={handleCloseModal}>
            {activeModal === 'login' && (
              <Login
                onClose={handleCloseModal}
                switchModal={() => handleSwitchModal('register')}
              />
            )}
            {activeModal === 'register' && (
              <Register
                onClose={handleCloseModal}
                switchModal={() => handleSwitchModal('login')}
              />
            )}
          </Modal>
        )}
      </AnimatePresence>

      <Routes>
        {/* Admin Dashboard (protected) */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute requiredRole="admin">
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Homepage */}
        <Route path="/" element={<ContainerComponent />} />
        <Route path="/checkout" element={<CheckoutPage />} />

        {/* Product details pages */}
        <Route path="/ViewWomenDetails/:id" element={<ViewWomenDetails />} />
        <Route path="/ViewAccDetails/:id" element={<ViewAccDetails />} />
      </Routes>
          <IconsComponent/>
      <Footer />
    </>
  );
}

export default App;

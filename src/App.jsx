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
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Modal from './Components/Modal';
import Register from './pages/Register';
import Login from './pages/LoginForm';

function App() {
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
        <Route
          path="/"
          element={
            <>
              <ContainerComponent />
              <ProductList />
              <VideoComponent />
              <IconsComponent />
              <SpreadshopBanner />
            </>
          }
        />
        <Route path="/ViewWomenDetails/:id" element={<ViewWomenDetails />} />
        <Route path="/ViewAccDetails/:id" element={<ViewAccDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

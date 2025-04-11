import './App.css'
import SpreadshopBanner from './Components/SpreadshopBanner'
import ProductList from './Components/ProductList'
import VideoComponent from './Components/VideoComponent'
import IconsComponent from './Components/IconsComponent'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import ContainerComponent from './Components/ContainerComponent'
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Modal from './Components/Modal';
import Register from './pages/Register';
import Login from './pages/LoginForm'

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
    <ContainerComponent/>
    <Footer/>
    </>
  )
}

export default App

// src/App.js

import React, { useState } from "react";
import Modal from "./Modal";
import "./App.css";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <button className="open-modal-button" onClick={openModal}>
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Title</h2>
        <p>This is a minimal and eye-pleasing modal component.</p>
      </Modal>
    </div>
  );
};

export default App;

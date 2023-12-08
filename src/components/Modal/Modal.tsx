"use client"

// components/Modal.tsx
import { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: { name: string; cancerType: string }) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [cancerType, setCancerType] = useState('');

  const handleSubmit = () => {
    // Perform your API post request here with name and cancerType
    onSubmit({ name, cancerType });
    // Close the modal after submitting
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
      <div className="flex flex-col modal-overlay" onClick={onClose}></div>
      <div className="modal-container">
        <div className="modal-content">
          <form>
            <label className="text-2xl font-bold mt-5 mb-5">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 mb-4 border"
            />

            <label className="text-2xl font-bold mt-5 mb-5">Cancer Type</label>
            <input
              type="text"
              value={cancerType}
              onChange={(e) => setCancerType(e.target.value)}
              className="w-full p-2 mb-4 border"
            />

            <div className="flex justify-end">
              <button
                type="button"
                className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold px-4 py-2 rounded items-center"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="button"
                className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold px-4 py-2 rounded items-center"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ToastMessage Component
const ToastMessage = () => {
  const showToast = (message, type) => {
    switch (type) {
      case 'success':
        toast.success(message);
        break;
      case 'error':
        toast.error(message);
        break;
      case 'info':
        toast.info(message);
        break;
      case 'warning':
        toast.warn(message);
        break;
      default:
        toast(message);
    }
  };

  return (
    <div className='flex flex-col gap-2'>
      <button
        onClick={() => showToast('This is a success message!', 'success')}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Show Success Toast
      </button>
      <button
        onClick={() => showToast('This is an error message!', 'error')}
        className="bg-red-500 text-white px-4 py-2 rounded "
      >
        Show Error Toast
      </button>
      <button
        onClick={() => showToast('This is an info message!', 'info')}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Show Info Toast
      </button>
      <button
        onClick={() => showToast('This is a warning message!', 'warning')}
        className="bg-yellow-500 text-white px-4 py-2 rounded"
      >
        Show Warning Toast
      </button>
      <ToastContainer draggable />
    </div>
  );
};

export default ToastMessage



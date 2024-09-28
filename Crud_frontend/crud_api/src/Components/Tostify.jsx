import React, { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export default function Tostify({ message, type,resetToast }) {
  useEffect(() => {
    if (message) {
      showToast();
    }
  }, [message, type]);
  const showToast = () => {
    if (type === 'success') {
      toast.success(message);
    } else if (type === 'error') {
      toast.error(message);
    } else {
      toast.info(message);
    }
    resetToast();
  };
  return (
    <div>
      {/* <button onChange={showToast} className="hidden">Show Toast</button> */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </div>
  )
}

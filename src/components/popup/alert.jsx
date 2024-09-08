import React from 'react';
import './alert.css'; // Add some basic CSS for styling

const CustomAlert = ({open, onClose }) => {
  if (!open) return null;

  return (
    <div className="custom-alert-backdrop">
      <div className="custom-alert">
        <p>You must select atleat one option.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CustomAlert;

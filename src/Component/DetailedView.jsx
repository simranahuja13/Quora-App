// DetailedView.jsx
import React from 'react';
import "./css/DetailedView.css"

const DetailedView = ({ text, onClose }) => {
  return (
    <div className="detailed-view">
      <div>
        <p>{text}</p>
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default DetailedView;

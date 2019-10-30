import React from 'react';
import './style.css';

function Preloader({ show = false }) {
  if (!show) {
    return null;
  }
  return (
    <div className="spinner-loader">
      <div className="rect1" />
      <div className="rect2" />
      <div className="rect3" />
      <div className="rect4" />
      <div className="rect5" />
    </div>
  )
}

export default Preloader;


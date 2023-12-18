// Quora.js
import React from 'react';
import QuoraHeader from './QuoraHeader';
import QuoraBody from './QuoraBody';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notification from './Notification';
import { PostProvider } from './PostContext';

function Quora({ closeQuora }) {
  return (
    <>
      <PostProvider>
        <BrowserRouter>
          <QuoraHeader closeQuora={closeQuora} />
          <Routes>
            <Route path="/" element={<QuoraBody />} />
            <Route path="/QuoraBody" element={<QuoraBody />} />
            <Route path="/Notification" element={<Notification />} />
          </Routes>
        </BrowserRouter>
      </PostProvider>  
    </>
  );
}

export default Quora;

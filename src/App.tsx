import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Router from './router/Router';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Toaster position="bottom-right" reverseOrder={false} />
        <Router />
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;

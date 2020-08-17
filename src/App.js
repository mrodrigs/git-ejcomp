import React from 'react';
import Logo from './assets/images/logo.jpg';

import './App.css';

function App() {
  return (
    <div className="container">
      <img className="logo" src={Logo} alt="Logo" />
    </div>
  );
}

export default App;

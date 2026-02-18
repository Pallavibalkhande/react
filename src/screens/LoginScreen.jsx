package src/screens/LoginScreen.jsx
import React from 'react';
import Button from '../components/Button';

const LoginScreen = ({ onNavigate }) => (
  <div className="scaffold">
    <header className="app-bar">
      <h1>Login</h1>
    </header>
    <main>
      <Button label="Login" onClick={() => onNavigate('/home')} />
    </main>
  </div>
);

export default LoginScreen
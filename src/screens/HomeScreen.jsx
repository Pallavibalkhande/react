package src/screens/HomeScreen.jsx
import React from 'react';

const HomeScreen = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <span>Welcome Home</span>
    </div>
  );
};

export default HomeScreen;
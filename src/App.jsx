import React, { useState } from 'react';
import routes from './routes';
import './global.css';

function App() {
  const [currentRoute, setCurrentRoute] = useState('/');
  const onNavigate = (route) => setCurrentRoute(route);
  const Screen = routes[currentRoute] || (() => <div>Screen not found</div>);
  return <Screen onNavigate={onNavigate} />;
}

export default App
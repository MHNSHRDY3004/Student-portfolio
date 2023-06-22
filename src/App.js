import Home from './pages/HomePage';
import React from 'react';
import ResponsiveAppBar from './pages/navbar';
function App() {
  return (
    <div className='App'>
      {' '}
      <ResponsiveAppBar />
      <Home />
    </div>
  );
}

export default App;

import React from 'react';

import Tasks from './components/tasks';

import './App.css';

const App: React.FunctionComponent = () => {
  return (
    <div className="app">
      <Tasks />
    </div>
  );
};

export default App;

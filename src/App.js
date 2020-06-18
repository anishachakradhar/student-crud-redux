import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import logo from './logo.svg';
// import './App.css';
import './style/custom-style.css';

import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux';
import store from './store/store';


function App() {
  return (
    <div className="App">
      <Provider store={ store }>
        <Router>
          <Dashboard />
        </Router>
      </Provider>
    </div>
  );
}

export default App;

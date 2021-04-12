import React from 'react';
import logo from './nhl.png';
import './App.css';
import Teams from './components/fetchTeams';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Click the link below to check out some NHL Teams!</p>
        <a
          className="App-link"
          href="https://statsapi.web.nhl.com/api/v1/teams"
          target="_blank"
          rel="noopener noreferrer"
        >
          NHL Teams
        </a>
      </header>
      <body>More Styling to come!</body>
    </div>
  );
}

export default App;

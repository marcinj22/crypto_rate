

import './App.css';

import Crypto from './Crypto';

import logoBtc from './bitcoin.svg.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoBtc} className="App-logo" alt="logo" />
        <h1>Crypto Rate</h1>      
      </header>
      <Crypto />
    </div>
  );
}

export default App;

import './App.css';
import IsEthAvailable from './checkingEthWallet.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IsEthAvailable />
      </header>
    </div>
  );
}

export default App;

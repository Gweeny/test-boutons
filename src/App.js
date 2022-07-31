import logo from './logo.svg';
import './App.css';
import Buttons from './component/buttons';
import Data from './component/data';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test Buttons</h1>
        <Buttons />
        <Data />
      </header>
    </div>
  );
}

export default App;

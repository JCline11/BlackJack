import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  const [number, setNumber] = useState(0) 
  function buttonInc() {
    setNumber(number + 1)
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src="https://media.tenor.com/2gjvgYyOusYAAAAS/rocket-league-cosplay.gif" className="App-logo" alt="logo" /> */}
        <p>
          <button type="button" onClick={()=>buttonInc()}>Click Me!</button> 
          {number}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

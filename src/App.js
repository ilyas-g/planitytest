import logo from './logo.svg';
import inputs from './input.json';

import './App.css';

function App() {

  const sortable = (a, b) => {
    if (a.start < b.start) { return -1; }
    if (a.start > b.start) { return 1; }
    return 0;
  };

  return (
    <div className="App">
      <header className="App-header">
        {inputs.sort(sortable).map(input => {
          return (
            <div className="box">
              {input.id}
            </div>
          );
        })}

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

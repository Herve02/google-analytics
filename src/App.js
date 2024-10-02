import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';
import { useEffect } from 'react';

const TrackingID = 'G-91V1ZPK7W9';
ReactGA.initialize(TrackingID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Google analytics <code>src/App.js</code> added tracking ID for google analytics.
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

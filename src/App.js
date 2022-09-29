import logo from "./logo.svg";
import "./App.css";
import "./global.scss";
import reportWebVitals from "./reportWebVitals";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="zq">折秋</span>
        <img src={logo} className="App-logo" alt="logo" />
        <p>hello 大家好，我是折秋</p>
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

reportWebVitals(console.log);

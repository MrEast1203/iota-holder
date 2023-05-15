import logo from "./logo.svg";
import "./App.css";
import instance from "./api";

function App() {
  const createDID = (userName, password) => {
    instance
      .post("/createDID", {
        userName: userName,
        password: password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <button
          type="button"
          onClick={() => {
            createDID("kan-test1", "kan123");
          }}>
          我是按鈕
        </button>
      </header>
    </div>
  );
}

export default App;

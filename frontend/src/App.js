import logo from "./logo.svg";
import "./App.css";
import instance from "./api";
import FileUpload from "./components/FileUpload";
import GetDID from "./components/GetDID";
import GetVP from "./components/GetVP";

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
            createDID("kan-test3", "kan123");
          }}>
          CreateDID
        </button>
        <FileUpload />
        <GetDID />
        <GetVP />
      </header>
    </div>
  );
}

export default App;

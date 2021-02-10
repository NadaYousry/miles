import "./App.css";
import { Router } from "react-router-dom";
import { Routes } from "././router";
import history from "./history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        {Routes}
      </Router>
    </div>
  );
}

export default App;

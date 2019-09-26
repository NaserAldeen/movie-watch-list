import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WatchList from "./WatchList";
import AddField from "./AddField";
function App() {
  return (
    <div className="App container my-5">
      <div className="row">
        <div className="col">
          <AddField />
        </div>
        <div className="col"></div>
      </div>

      <div className="row">
        <div className="col">
          <WatchList type="1" />
        </div>

        <div className="col">
          <WatchList type="2" />
        </div>
      </div>
    </div>
  );
}

export default App;

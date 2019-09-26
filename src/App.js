import React from "react";

import "./App.css";
import WatchList from "./WatchList";
import AddField from "./AddField";

function App(props) {
  return (
    <div className="App container my-5">
      <AddField />

      <div className="row justify-content-between">
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

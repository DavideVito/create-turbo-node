import React from "react";
import "./App.css";
import { getGoogle } from "ceia-utils";

function App() {
  return (
    <div>
      3002
      <button
        onClick={() => {
          getGoogle().then(console.log);
        }}
      >
        Cliccami
      </button>
    </div>
  );
}

export default App;

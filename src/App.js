import React from "react";
import "./App.css";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Merriweather|Montserrat&display=swap"
        rel="stylesheet"
      />
      <Dashboard />
    </div>
  );
}

export default App;

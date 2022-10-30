import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

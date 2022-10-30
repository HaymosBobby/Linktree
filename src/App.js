import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./pages/NotFound";

import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

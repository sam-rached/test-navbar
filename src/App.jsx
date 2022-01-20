import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/utilisateur" element={<User />} />
          <Route path="/apropos" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

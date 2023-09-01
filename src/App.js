import "./App.css";
import Module from "./Module";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
function App() {
  return (
    <>
      <div className="int">
        <h1>Interview yourself</h1>
      </div>

      <BrowserRouter>
        <div className="App">
          <Module />
        </div>
        <Routes>
          <Route path="/Module" element={<Module />} />
          {/* <Route path="/Contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

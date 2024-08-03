import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Hero from "./compornent/Hero/Hero";

import Navbar from "./compornent/Navbar/Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route path="/home" element={<><Hero/></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

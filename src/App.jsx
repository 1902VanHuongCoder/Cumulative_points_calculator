// import { useState } from 'react';
import "./App.css";
import Greeting from "./components/Greeting";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/greeting" element={<Greeting />}></Route>
    </Routes>
  );
}

export default App;

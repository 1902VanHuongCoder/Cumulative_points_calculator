import "./App.css";
import Addsubject from "./components/Addsubject";
import Gpa from "./components/Gpa";
import Greeting from "./components/Greeting";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/greeting" element={<Greeting />}></Route>
      <Route path="/addsubject" element={<Addsubject />}></Route>
      <Route path="/gpa" element={<Gpa />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
}

export default App;

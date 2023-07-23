import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import One from "./components/One";
import Two from "./components/Two";
import Three from "./components/Three";
import Four from "./components/Four";
import Five from "./components/Five";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Footer";
import Six from "./components/six";

const App = () => {
  return (
    <div className="app">
      <Navbar2 />
      <Routes>
        <Route path="/" element={<One />} />
        <Route path="/code" element={<Two />} />
        <Route path="/short" element={<Three />} />
        <Route path="/cr" element={<Four />} />
        <Route path="/cert" element={<Five />} />
        <Route path="/dep" element={<Six />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
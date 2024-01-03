import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Achievements from "./views/Achievement";

export default function App() {
  return (
    <div className='App bg-black h-screen '>
      <BrowserRouter>
        <header className='App-header'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/achievements' element={<Achievements />} />
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

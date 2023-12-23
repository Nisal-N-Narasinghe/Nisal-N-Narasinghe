import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./views/Home";
import Projects from "./views/Projects";

export default function App() {
  return (
    <div className='App bg-black h-screen'>
      <BrowserRouter>
        <header className='App-header'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

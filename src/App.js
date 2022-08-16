import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Enterprise from "./Components/Enterprise";
import Home from "./Components/Home";
import Individuals from "./Components/Individuals";
import Router from "./Components/Router";
import Terms from "./Components/Terms";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Router/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>                      
          <Route path="individuals" element={<Individuals/>}></Route>                      
          <Route path="terms" element={<Terms/>}></Route>                      
          <Route path="enterprise" element={<Enterprise/>}></Route>                      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

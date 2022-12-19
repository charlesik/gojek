import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import Products from "./pages/Products";


function App() {
  return (
    <div>
<Routes> 
  <Route path="/" element={<MainPage/>}/>
  <Route path="products" element={<Products/>}/>
</Routes>
      
    </div>
  );
}

export default App;

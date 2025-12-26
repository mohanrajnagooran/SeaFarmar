import React from "react";
import Home from "./pages/Home/Home";
import Navbar from './components/Navbar/Navbar'
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import CookingMethods from "./pages/Cookingmethods/CookingMethods";
import Advantages from "./pages/Advantages/Advantages";
import Footer from "./components/Footer/Footer";


export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Home />
      <About/>
      <Products/>
      <CookingMethods/>
      <Advantages/>
      <Footer/>
    </div>
  );
}

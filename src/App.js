import React from "react";
import Footer from "./Components/Footer";
import HomeScreen from "./Pages/HomeScreen";
import Navbar from "./Components/Navbar";
import PostScreen from "./Pages/PostScreen";
import ContactScreen from "./Pages/ContactScreen";
import AboutScreen from "./Pages/AboutScreen";
import LoginScreen from "./Pages/LoginScreen";
import RegisterScreen from "./Pages/RegisterScreen";

import { Route, Routes, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <div class="max-w-screen-lg mx-auto">

      <Navbar />

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/post" element={<PostScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/header/Header";
import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Contact from "./Pages/contact/Contact";
import Footer from "./components/footer/Footer";
import "./App.css";

const App: React.FC = () => (
  <ThemeProvider>
    <Header />
    <div style={{ paddingTop: 80 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    <Footer />
  </ThemeProvider>
);

export default App;

import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { Navbar, ScrollToTop, Hero } from "./components";
import { useGlobalContext } from "../src/context/Context";
import {
  About,
  Contributors,
  Features,
  Gradientgenerator,
  TintsandShades,
  Footer,
  AllGradients,
  IndividualGradientPage,
  SavedGradients,
  NewGradient,
} from "./containers";

const App = () => {
  const { darkMode } = useGlobalContext();

  // Google Analytics

  return (
    <div className={`${darkMode && "dark"}`}>
      <Router>
        {/* <ScrollToTop /> */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />}>
            <Route path="/all-gradients" element={<AllGradients />} />
            <Route path="/saved-gradients" element={<SavedGradients />} />
            <Route path="/add-new-gradient" element={<NewGradient />} />
          </Route>

          <Route path="/gradient/:id" element={<IndividualGradientPage />} />
          <Route path="/gradient-generator" element={<Gradientgenerator />} />
          <Route path="/tints-shades" element={<TintsandShades />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

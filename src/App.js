import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { Navbar, ScrollToTop, Hero } from "./components";
import { Toaster } from "react-hot-toast";
import { useGlobalContext } from "../src/context/Context";
import useLocalStorage from "./utility/useLocalStorage";
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
  Category,
} from "./containers";
// aos
import Aos from "aos";
import "aos/dist/aos.css";

// animate.css
import "animate.css";

const App = () => {
  const { darkMode } = useGlobalContext();

  // saved gradients
  const [savedGradients, setSavedGradients] = useLocalStorage("saved", []);

  // Google Analytics

  Aos.init();
  return (
    <div className={`${darkMode && "dark"}`}>
      <div>
        <Toaster />
      </div>
      <Router>
        {/* <ScrollToTop /> */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />}>
            <Route
              path="/"
              element={
                <AllGradients
                  savedGradients={savedGradients}
                  setSavedGradients={setSavedGradients}
                />
              }
            />
            <Route
              path="/saved-gradients"
              element={
                <SavedGradients
                  savedGradients={savedGradients}
                  setSavedGradients={setSavedGradients}
                />
              }
            />
            <Route path="/add-new-gradient" element={<NewGradient />} />
          </Route>

          <Route
            path="/category/:id"
            element={
              <Category
                savedGradients={savedGradients}
                setSavedGradients={setSavedGradients}
              />
            }
          />
          <Route
            path="/gradient/:id"
            element={
              <IndividualGradientPage
                savedGradients={savedGradients}
                setSavedGradients={setSavedGradients}
              />
            }
          />
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

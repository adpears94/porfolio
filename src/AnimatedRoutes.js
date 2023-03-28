import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { About } from "./components/About2";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Home } from "./components/Homepage";
import { AnimatePresence } from "framer-motion";

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
};

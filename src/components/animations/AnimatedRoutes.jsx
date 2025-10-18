import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import {Home} from "../../containers/HomePage";
import {About} from "../../containers/AboutPage";
import {Contact} from "../../containers/ContactPage";
import AnimatedPage from "./AnimatedPage";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatedPage key={location.pathname}>
              <Home />
            </AnimatedPage>
          }
        />
        <Route
          path="/about"
          element={
            <AnimatedPage key={location.pathname}>
              <About />
            </AnimatedPage>
          }
        />
        <Route
          path="/contact"
          element={
            <AnimatedPage key={location.pathname}>
              <Contact />
            </AnimatedPage>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
    
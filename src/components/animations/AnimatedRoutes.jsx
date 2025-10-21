import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Contact } from "../../containers/ContactPage";
import AnimatedPage from "./AnimatedPage";
import { Home } from "../../containers/HomePage/HomePage";
import { About } from "../../containers/AboutPage/AboutPage";

export default function AnimatedRoutes() {
  const location = useLocation();
  const routes = [
    {
      path: "/home",
      component: <Home />,
    },
    {
      path: "/about",
      component: <About />,
    },
    {
      path: "/contact",
      component: <Contact />,
    },
    {
      path: "*",
      component: <Navigate to="/home" replace />,
    },
  ];

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {routes.map((route) => (
            <Route
              path={route.path}
              element={
                <AnimatedPage key={route.path}>{route.component}</AnimatedPage>
              }
            />
          ))}
        </Routes>
      </AnimatePresence>
{/* 
      <Routes location={location} key={location.pathname}>
        {routes.map((route) => (
          <Route path={route.path} element={route.component} />
        ))}
      </Routes> */}
    </>
  );
}

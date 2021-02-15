import "./App.css";
import { Router } from "react-router-dom";
import { Routes } from "././router";
import history from "./history";
import NavBar from "../components/Navbar";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

function App() {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("load", (e) => {
      if (window.innerWidth < 768) {
        setIsMobileScreen(true);
      } else {
        setIsMobileScreen(false);
      }
    });
    window.addEventListener("resize", (e) => {
      setCurrentWidth(window.innerWidth);
      if (window.innerWidth < 768) {
        setIsMobileScreen(true);
      } else {
        setIsMobileScreen(false);
      }
    });
  }, [currentWidth]);
  return (
    <div className="App">
      <NavBar isMobileScreen={isMobileScreen} />
      <Router history={history}>{Routes}</Router>
      <Footer/>
    </div>
  );
}

export default App;

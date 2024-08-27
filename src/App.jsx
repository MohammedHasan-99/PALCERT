import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import SideMenue from "./components/SideMenue.jsx";
import Landing from "./components/Landing.jsx";
import AdminForm from "./components/AdminForm.jsx";
import HEIForm from "./components/HEIForm.jsx";
import RecruiterForm from "./components/RecruiterForm.jsx";
import GraduateForm from "./components/GraduateForm.jsx";
import CertificateForm from "./components/CertificateForm.jsx";

import { useStateContext } from "./contexts/ContextProvider";
function App() {
  const { activeMenue, isMenueHovered } = useStateContext();

  return (
    <>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div
            className={`fixed bg-[#042331] transition-all duration-500 z-[1] ${
              activeMenue || isMenueHovered ? "w-72" : "w-[70px]"
            }`}
          >
            <SideMenue />
          </div>

          <div
            className="w-full"
            // className={`min-h-screen c
            // ${activeMenue ? " " : "flex-2"}`}
          >
            <div className="fixed w-full md:relative z-[2] bg-[#323233] dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            <div className="flex justify-center mt-16">
              <Routes>
                <Route path="/" element={<Landing />} />
                {/* <Route path="/connect" element={<>connect</>} /> */}
                <Route path="/administrator" element={<AdminForm />} />
                <Route path="/hei" element={<HEIForm />} />
                <Route path="/recruiter" element={<RecruiterForm />} />
                <Route path="/graduate" element={<GraduateForm />} />
                <Route path="/certificate" element={<CertificateForm />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

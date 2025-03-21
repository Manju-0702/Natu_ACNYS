import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";  // Import Layout to wrap pages
import Home from "./pages/Home/Home";
import AboutACNYS from "./pages/About/AboutACNYS/AboutACNYS";
import VisionMission from "./pages/About/VisionMission/VisionMission";
import Message from "./pages/About/Message/Message";
import Academics from "./pages/Academics/Academics";
import Contact from "./pages/Contact/Contact";
import ACNYS from "./pages/ACNYS/ACNYS";
import UG from "./pages/Department/UG/UG";
import PG from "./pages/Department/PG";
import Anatomy from "./pages/Department/UG/Anatomy/Anatomy";
import Physiology from "./pages/Department/UG/Physiology/Physiology";
import Pathology from "./pages/Department/UG/Pathology";
import Microbiology from "./pages/Department/UG/Microbiology";
import YogaResearch from "./pages/Department/UG/YogaResearch";
import Acupuncture from "./pages/Department/UG/Acupuncture";
import FastingNutrition from "./pages/Department/UG/FastingNutrition";
import DiagnosisGynecology from "./pages/Department/UG/DiagnosisGynecology";
import Hydrotherapy from "./pages/Department/UG/Hydrotherapy";
import ClinicalNaturopathy from "./pages/Department/UG/ClinicalNaturopathy/Clinical";
import Psychology from "./pages/Department/UG/Psychology";
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main Pages */}
          <Route index element={<Home />} />
          <Route path="about/acnys" element={<AboutACNYS />} />
          <Route path="about/vision-mission" element={<VisionMission />} />
          <Route path="about/messages" element={<Message />} />
          <Route path="academics" element={<Academics />} />
          <Route path="acnys" element={<ACNYS />} />
          <Route path="contact" element={<Contact />} />

          {/* Department Pages */}
          <Route path="department/ug" element={<UG />} />
          <Route path="department/pg" element={<PG />} />

          {/* UG Course Pages */}
          <Route path="department/ug/anatomy" element={<Anatomy />} />
          <Route path="department/ug/physiology" element={<Physiology />} />
          <Route path="department/ug/pathology" element={<Pathology />} />
          <Route path="department/ug/microbiology" element={<Microbiology />} />
          <Route path="department/ug/yoga-research" element={<YogaResearch />} />
          <Route path="department/ug/acupuncture" element={<Acupuncture />} />
          <Route path="department/ug/fasting-nutrition" element={<FastingNutrition />} />
          <Route path="department/ug/diagnosis-gynecology" element={<DiagnosisGynecology />} />
          <Route path="department/ug/hydrotherapy" element={<Hydrotherapy />} />
          <Route path="department/ug/clinical-naturopathy" element={<ClinicalNaturopathy />} />
          <Route path="department/ug/psychology" element={<Psychology />} />
        </Route>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;

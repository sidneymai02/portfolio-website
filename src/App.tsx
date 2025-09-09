import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ContactMe from "./Pages/ContactMe";
import Home from "./Pages/Home";
import ProfessionalExperience from "./Pages/ProfessionalExperience";
import Projects from "./Pages/Projects";
import DefaultTopNavBar from "./Components/NavBar";
import "./App.css";
import SiemLab from "./Pages/Projects/SiemLab";
import AimTrainer from "./Pages/Projects/AimTrainer";
import ShooterGame from "./Pages/Projects/ShooterGame";

function App() {
  return (
    <Router>
      <DefaultTopNavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/professional-experience" element={<ProfessionalExperience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/projects/siem-lab" element={<SiemLab />} />
        <Route path="/projects/aim-trainer" element={<AimTrainer />} />
        <Route path="/projects/shooter-game" element={<ShooterGame />} />
      </Routes>
    </Router>
  );
}

export default App;

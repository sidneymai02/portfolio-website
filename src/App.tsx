import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ContactMe from "./Pages/ContactMe";
import Home from "./Pages/Home";
import ProfessionalExperience from "./Pages/ProfessionalExperience";
import Projects from "./Pages/Projects";
import DefaultTopNavBar from "./Components/NavBar";
import "./App.css";

function App() {
  return (
    <Router basename="/portfolio-website">
      <DefaultTopNavBar />

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/professional-experience" element={<ProfessionalExperience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}

export default App;

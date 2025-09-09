import "../Pages-CSS/Projects.css";
import { Link } from "react-router-dom";

function Projects() {
    return (
        <div className="projects-container">
            {/* Header */}
            <section className="projects-header">
                <h1>My Projects</h1>
                <p>
                    Here's a showcase of projects I've built, reflecting my passion for technology and continuous learning
                </p>
            </section>

            <section className="projects-grid">
                <div className="project-card">
                    <h2>🔒 Personal SIEM Lab with Wazuh</h2>
                    <p>
                        This project demonstrates how I built a personal <strong>SIEM (Security Information and Event Management) lab</strong> using <strong>Wazuh</strong> to monitor and detect cyber threats.
                    </p>
                    <div className="project-links">
                        <Link to="/projects/siem-lab" className="more-info-button">More Info</Link>
                    </div>
                </div>
                <div className="project-card">
                    <h2>🚀 3D Aim Trainer</h2>
                    <p>
                        This is a timed aim trainer where the player gains points by shooting targets and finishing the map in a short amount of time.
                        This was built in Unity using C#.
                    </p>
                    <div className="project-links">
                        <Link to="/projects/aim-trainer" className="more-info-button">More Info</Link>
                    </div>
                </div>

                <div className="project-card">
                    <h2>🚀 2D Shooter Game</h2>
                    <p>
                        This is a 2D shooter game where the player has to fend of waves of enemies.
                        This was built in Unity using C#.
                    </p>
                    <div className="project-links">
                        <Link to="/projects/shooter-game" className="more-info-button">More Info</Link>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Projects;

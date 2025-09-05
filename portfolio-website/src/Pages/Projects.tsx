import "../Pages-CSS/Projects.css";

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
                    <h2>🚀 3D Aim Trainer</h2>
                    <p>
                        This is a timed aim trainer where the player gains points by shooting targets and finishing the map in a short amount of time.
                        This was built in Unity using C#.
                    </p>
                    <div className="project-links">
                        <a href="https://github.com/sidneymai02/3D-Aim-Trainer" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </div>
                </div>

                <div className="project-card">
                    <h2>🚀 2D Shooter Game</h2>
                    <p>
                        This is a 2D shooter game where the player has to fend of waves of enemies.
                        This was built in Unity using C#.
                    </p>
                    <div className="project-links">
                        <a href="https://github.com/sidneymai02/2D-Shooter" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Projects;

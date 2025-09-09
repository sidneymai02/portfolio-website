import { Link } from "react-router-dom";
import "../Projects-CSS/SiemLab.css"; // Reuse same styles

function AimTrainer() {
  return (
    <div className="project-detail">
      <h1>🚀 3D Aim Trainer</h1>

      <p>
        This is a timed aim trainer built in <strong>Unity</strong> using <strong>C#</strong>. Players shoot targets and race against time to complete the map.
      </p>

      <p>
        The game focuses on <strong>reaction speed</strong>, <strong>target tracking</strong>, and <strong>performance optimization</strong> for smooth gameplay.
      </p>

      <ul>
        <li>Built with Unity and C#</li>
        <li>Custom scoring and timing logic</li>
        <li>Optimized for low-latency input</li>
        <li>Designed for rapid iteration and replayability</li>
      </ul>

      <div className="tech-stack">
        <span className="tech-pill">Unity</span>
        <span className="tech-pill">C#</span>
        <span className="tech-pill">Game Design</span>
        <span className="tech-pill">Input Handling</span>
        <span className="tech-pill">Performance Tuning</span>
      </div>

      <div className="buttons-row">
        <a
          href="https://github.com/sidneymai02/3D-Aim-Trainer"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>

        <Link to="/projects">
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}

export default AimTrainer;
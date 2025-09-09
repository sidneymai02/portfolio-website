import { Link } from "react-router-dom";
import "../Projects-CSS/SiemLab.css"; // Reuse same styles

function ShooterGame() {
  return (
    <div className="project-detail">
      <h1>🚀 2D Shooter Game</h1>

      <p>
        This is a wave-based 2D shooter built in <strong>Unity</strong> using <strong>C#</strong>. Players fend off enemies using ranged attacks and strategic movement.
      </p>

      <p>
        The game emphasizes <strong>enemy AI</strong>, <strong>collision detection</strong>, and <strong>level progression</strong>.
      </p>

      <ul>
        <li>Built with Unity and C#</li>
        <li>Wave-based enemy spawning</li>
        <li>Custom projectile and damage system</li>
        <li>Basic UI and health tracking</li>
      </ul>

      <div className="tech-stack">
        <span className="tech-pill">Unity</span>
        <span className="tech-pill">C#</span>
        <span className="tech-pill">2D Physics</span>
        <span className="tech-pill">Enemy AI</span>
        <span className="tech-pill">Game Loop</span>
      </div>

      <div className="buttons-row">
        <a
          href="https://github.com/sidneymai02/2D-Shooter"
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

export default ShooterGame;
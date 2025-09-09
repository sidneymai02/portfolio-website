import { Link } from "react-router-dom";
import "../Projects-CSS/SiemLab.css";

function SiemLab() {
    return (
        <div className="project-detail">
            <h1>🔒 Personal SIEM Lab with Wazuh</h1>

            <p>
                This project demonstrates how I built a personal <strong>SIEM (Security Information and Event Management) lab</strong> using <strong>Wazuh</strong> to monitor and detect cyber threats.
            </p>

            <p>
                The lab simulates real-world <strong>Security Operations Center (SOC)</strong> workflows by:
            </p>

            <ul>
                <li>Collecting and analyzing logs from Windows endpoints and Ubuntu servers</li>
                <li>Detecting suspicious activity through custom Wazuh rules</li>
                <li>Visualizing security events in dashboards for rapid monitoring</li>
                <li>Responding to simulated attack scenarios, including brute-force attempts</li>
            </ul>

            <p>
                The project emphasizes <strong>forensic log analysis</strong>, <strong>SIEM rule authoring</strong>, and <strong>resilient infrastructure setup</strong>. It reflects my security-first mindset and ability to build production-grade monitoring systems from scratch.
            </p>

            <div className="tech-stack">
                <span className="tech-pill">Wazuh</span>
                <span className="tech-pill">SIEM</span>
                <span className="tech-pill">Log Analysis</span>
                <span className="tech-pill">Ubuntu</span>
                <span className="tech-pill">Windows</span>
                <span className="tech-pill">Security Monitoring</span>
                <span className="tech-pill">Custom Rules</span>
                <span className="tech-pill">Brute-force Detection</span>
            </div>

            <div className="buttons-row">
                <a
                    href="https://github.com/sidneymai02/SIEM-lab"
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

export default SiemLab;

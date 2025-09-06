import "../Pages-CSS/Home.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Home() {
    return (
        <div className="home-container">

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-text">
                    <h1 className="hero-name">Sidney Mai</h1>
                    <h3 className="hero-info">
                        Cybersecurity Professional & Software Engineer | M.S. Cybersecurity @ GaTech
                    </h3>
                    <section className="contact-info">
                        <a href="mailto:sidneymai.business@gmail.com" target="_blank" rel="noopener noreferrer" className="pill link-pill">
                            <FaEnvelope size={20} style={{ marginRight: "0px" }} />
                        </a>
                        <a href="https://www.linkedin.com/in/sidney-mai/" target="_blank" rel="noopener noreferrer" className="pill link-pill">
                            <FaLinkedin size={20} style={{ marginRight: "0px" }} />
                        </a>
                        <a href="https://github.com/sidneymai02" target="_blank" rel="noopener noreferrer" className="pill link-pill">
                            <FaGithub size={20} style={{ marginRight: "0px" }} />
                        </a>
                    </section>
                    <div className="roles-container">
                        <span className="role-pill">Cybersecurity Professional</span>
                        <span className="role-pill">Software Engineer</span>
                        <span className="role-pill">STEM Advantage Mentor</span>
                    </div>
                    <p className="hero-summary">
                        I am a Computer Science graduate from San Diego State University and currently a Cyber Security
                        Graduate student at Georgia Institute of Technology, fueled by a passion for technology and a commitment
                        to leveraging it to make a positive impact on the world. My curiosity and drive to explore the unknown have led me to
                        delve into the vast potential of computers and their applications.
                        With my innate abilities to learn and lead, I strive to be an innovator at the forefront of technological advancements.
                        I am always eager to learn and grow, and I am excited about the opportunities that lie ahead in the tech industry.
                        I am open to connecting with like-minded professionals and exploring new opportunities in software development and cybersecurity.
                    </p>
                </div>
                <div className="hero-image">
                    <img src="\src\assets\me.jfif" alt="Picture of me" />
                </div>
            </section>

            {/* Website Overview Section */}
            <section className="overview-section">
                <h2>What You'll Find Here</h2>
                <p>
                    This website showcases my projects, professional experience, and interests.
                    You'll find details about my background, the technologies I work with,
                    and ways to connect with me. Take a look around and explore!
                </p>
            </section>

        </div>
    );
}

export default Home;

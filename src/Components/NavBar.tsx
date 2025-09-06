import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "../Pages-CSS/Navbar.css";

function DefaultTopNavBar() {
    const location = useLocation();

    return (
        <Navbar expand="md" bg="dark" variant="dark" className="navbar-top" fixed="top">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            as={Link}
                            to="/home"
                            className={location.pathname === "/home" ? "active" : ""}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/professional-experience"
                            className={location.pathname === "/professional-experience" ? "active" : ""}
                        >
                            Professional Experience
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/projects"
                            className={location.pathname === "/projects" ? "active" : ""}
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/contact-me"
                            className={location.pathname === "/contact-me" ? "active" : ""}
                        >
                            Contact Me
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default DefaultTopNavBar;

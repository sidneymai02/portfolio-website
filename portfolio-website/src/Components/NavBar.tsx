import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "../Pages-CSS/Navbar.css";

function DefaultTopNavBar() {
    const location = useLocation();

    return (
        <Navbar expand="md" bg="dark" variant="dark" className="navbar-top" fixed="top">
            <Container>
                {/* ✅ Toggle button BEFORE the collapsed menu */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home" active={location.pathname === "/home"}>
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/professional-experience"
                            active={location.pathname === "/professional-experience"}
                        >
                            Professional Experience
                        </Nav.Link>
                        <Nav.Link as={Link} to="/projects" active={location.pathname === "/projects"}>
                            Projects
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact-me" active={location.pathname === "/contact-me"}>
                            Contact Me
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default DefaultTopNavBar;

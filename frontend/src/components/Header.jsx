import { Navbar, Nav, Container } from "react-bootstrap";
import { AiOutlineLogin } from "react-icons/ai";
import { FaSignInAlt } from "react-icons/fa";
//AiOutlineLogout
const Header = () => {
  return (
    <header>
      <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            {" "}
            <img
              alt=""
              src="vite.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            MERN
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/login">
                <AiOutlineLogin /> Log in
              </Nav.Link>
              <Nav.Link href="/signup">
                <FaSignInAlt /> Sign up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

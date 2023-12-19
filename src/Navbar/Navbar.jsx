import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form, Button } from 'react-bootstrap';
import "./Navbar.css"
import { Link, useSearchParams } from 'react-router-dom';

function NavBar() {
  const [,setSearch]=useSearchParams();

    return (
        <Navbar collapseOnSelect bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">

            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="https://react-bootstrap.netlify.app/img/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Home
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/routing'>Routing</Nav.Link>
                        <Nav.Link as={Link} to='/counter'>Counter</Nav.Link>

                    </Nav>

                    <Nav>
                        <Nav.Link href="login">Login</Nav.Link>
                        <Nav.Link eventKey={2} href="signup">
                            SignUp
                        </Nav.Link>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={(e)=>{setSearch({name:e.target.value})}}
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;

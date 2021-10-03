import React from 'react';
import { Container, Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../images/logo.png'

const Header = () => {
    return (
        <Navbar bg="secondary" expand="lg">
            <Container>
                <Navbar.Brand href="/"><img src={img} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto  fw-bold my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link><Link className='text-white text-decoration-none' to='/home'>Home</Link></Nav.Link>
                        <Nav.Link><Link className='text-white text-decoration-none' to='/todos'>Todos</Link></Nav.Link>
                        <Nav.Link><Link className='text-white text-decoration-none' to='/chart'>Chart</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
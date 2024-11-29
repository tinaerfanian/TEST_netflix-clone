import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Nav, Container } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" style={{ backgroundColor: "#141414"}}>
      <Container fluid>
        <Navbar.Brand href="https://www.netflix.com/browse"><img src="./" alt='logoNetflix' style={{width:"100px", height:"55px"}}></img> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#" className='fw-bold'>Home</Nav.Link>
            <Nav.Link href="#" className='fw-bold'>TV Shows</Nav.Link>
            <Nav.Link href="#" className='fw-bold'>Movies</Nav.Link>
            <Nav.Link href="#" className='fw-bold'>My List</Nav.Link>
          </Nav>
          <div className="d-flex align-items'center">
            <div id="kids" className="fw-bold" style={{marginRight: "1rem"}}>kids
              
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

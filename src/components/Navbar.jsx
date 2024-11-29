import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from "../components/assets/logo.png"
import kidslog from "../components/assets/kids_icon.png";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" style={{ backgroundColor: "#141414"}}>
      <Container fluid>
        <Navbar.Brand href="https://www.netflix.com/browse"><img src={logo} alt='logoNetflix' style={{width:"100px", height:"55px",marginLeft:"1rem"}}></img> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#" className='fw-bold'>Home</Nav.Link>
            <Nav.Link href="#" className='fw-bold'>TV Shows</Nav.Link>
            <Nav.Link href="#" className='fw-bold'>Movies</Nav.Link>
            <Nav.Link href="#" className='fw-bold'>My List</Nav.Link>
          </Nav>
          <div className="d-flex align-items'center">
            <div id="kids" className="fw-bold" style={{marginRight: "2rem"}}>KIDS Account
              <img src={kidslog} alt='kidslog' style={{width:"40px", height:"40px", marginLeft:"1rem"}}></img>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

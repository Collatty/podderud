import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const CustomNavBar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="#home">PODDERUD</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Bæsj" id="basic-nav-dropdown">
            <NavDropdown.Item>Bæsj</NavDropdown.Item>
            <NavDropdown.Item>Mer bæsj</NavDropdown.Item>
            <NavDropdown.Item>Enda mer bæsj</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Bæsjen over alle bæsjer</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="mr-right">
          <NavDropdown title="Om Oss" id="basic-nav-dropdown">
            <NavDropdown.Item href="#Håkon">Håkon</NavDropdown.Item>
            <NavDropdown.Item href="#Eirik">Eirik</NavDropdown.Item>
            <NavDropdown.Item href="#Toralf">Toralf</NavDropdown.Item>
            <NavDropdown.Item href="#Theo">Theodor</NavDropdown.Item>
            <NavDropdown.Item href="#7 Ball">7 Ball</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavBar;

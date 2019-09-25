import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

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
            <NavDropdown.Item>Håkon</NavDropdown.Item>
            <NavDropdown.Item>Eirik</NavDropdown.Item>
            <NavDropdown.Item>Toralf</NavDropdown.Item>
            <NavDropdown.Item>Theodor</NavDropdown.Item>
            <NavDropdown.Item>7Ball</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavBar;

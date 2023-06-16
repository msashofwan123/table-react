import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container
} from "reactstrap";
import Jasa from "./Componen/Function/Jasa";
import Pendaftaran from "./Componen/Function/Pendaftaran";

function NavbarApp(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        {...args}
        expand="sm"
        color="dark"
        dark={true}
        className="navbar-light"
        light={false}
      >
        <NavbarBrand href="/">IDBC</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/pendaftaran">Pendaftaran</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/kelas">Kelas</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarApp;

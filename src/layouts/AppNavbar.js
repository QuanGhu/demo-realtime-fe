import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default function AppNavbar() {

  return (
    <Navbar color="light" light expand="md">
        <NavbarBrand href="/">MY Web</NavbarBrand>
        <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">GitHub</NavLink>
            </NavItem>
        </Nav>
      </Navbar>
  );
}

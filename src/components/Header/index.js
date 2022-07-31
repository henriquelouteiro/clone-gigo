import Image from "next/image";
import React, { useState } from "react";
import {
  Button,
  Container,
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  NavbarBrand,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="header sticky ">
      <Navbar light expand="md shadow" style={{ flexWrap: "nowrap" }}>
        <Container className="container-nav">
          <div className="navbar-collapse-menu">
            <NavbarBrand href="#home">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={100}
                height={33}
                className="logo"
              />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
          </div>

          <Collapse isOpen={isOpen} navbar>
            <Nav className="navbar-menu" navbar>
              <NavItem>
                <NavLink href="#home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#produtos">Explore</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#service">Staking</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about">Pager</NavLink>
              </NavItem>
              <NavItem>
                <Button color="primary">Sing In</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

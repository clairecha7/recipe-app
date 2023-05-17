import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { Container, Stack } from "../UI";
import { Logo, Menu, MenuIcon, MenuLink, Nav } from "./Navbar.styles";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const { isAuth, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <Container>
        <Stack direction="row" align="center" justify="space-between">
          <Link to="/">
            {" "}
            <Logo />{" "}
          </Link>

          <MenuIcon onClick={() => setOpen(!open)}>
            <MdMenu />
          </MenuIcon>
          <Menu isOpen={open} onClick={() => setOpen(!open)}>
            <MenuLink to="/about"> About</MenuLink>
            <MenuLink href="https://github.com/" as="a" target="_blank">
              {" "}
              Github
            </MenuLink>
            {isAuth && (
              <MenuLink onClick={logout} to="/login">
                Logout
              </MenuLink>
            )}
            {!isAuth && <MenuLink to="/login">Login</MenuLink>}
          </Menu>
        </Stack>
      </Container>
    </Nav>
  );
};

export default Navbar;

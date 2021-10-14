import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';


const AuthActionsNav = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <Nav className="justify-content-end">
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </Nav>
  )
}

const AuthNav = () => {
  const { isAuthenticated } = useAuth0()

  if (!isAuthenticated) {
    return <div />
  }

  return (
    <Nav className="me-auto">
      <Nav.Link
        as={RouterNavLink}
        to="/account"
        exact
        activeClassName="router-link-exact-active"
      >
        Profile
      </Nav.Link>
    </Nav>
  )
}

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" bg="light" >
      <Container>
        <Navbar.Brand as={RouterNavLink} to="/" >TODO List</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <AuthNav />
        <AuthActionsNav />
      </Container>
    </Navbar>
  )
}


export default CustomNavbar

import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { getHomePath } from "./pages/routes.js";

function AppHeader(props) {
  return (
    <Navbar className="nav-header" variant="dark" expand="md">
      <Navbar.Brand href={getHomePath(props.routes)}>
        Modeling Representation <br className="d-xs-block d-sm-none" /> with
        Ranked Choice Voting
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="justify-content-end">
          {props.routes.reverse().map((route, i) => (
            <Nav.Item className="text-right" key={route.display}>
              <Nav.Link as={Link} to={route.path} key={i} href={route.path}>
                {route.display}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppHeader;

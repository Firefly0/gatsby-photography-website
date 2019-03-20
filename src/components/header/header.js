import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from "react-headroom"
import "./header.scss"
// import PrimarySearchAppBar from "./AppBar"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"

const linkStyle = {
  marginRight: "40px",
  marginLeft: "10px",
}

const Header = ({}) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <Headroom style={{ height: "80px" }}>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Ionut-Photography</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item>
                <Link style={linkStyle} to="/">
                  Acasa
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link style={linkStyle} to="/blogposts">
                  Blog
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link style={linkStyle} to="/">
                  Albume
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link style={linkStyle} to="/">
                  Despre
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Headroom>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

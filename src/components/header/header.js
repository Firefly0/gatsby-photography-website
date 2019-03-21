import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from "react-headroom"
import "./header.scss"
// import PrimarySearchAppBar from "./AppBar"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import logo from "../../images/logo.jpg"
import NavItem from "react-bootstrap/NavItem"

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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <img
            style={{ width: "100px", margin: "0" }}
            src={require("../../images/logo.jpg")}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item>
                <Link style={linkStyle} to="/">
                  Acasa
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link style={linkStyle} to="/blogposts">
                  Contact
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link style={linkStyle} to="/">
                  Natura
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link style={linkStyle} to="/">
                  Nunta
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link style={linkStyle} to="/">
                  Botez
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link style={linkStyle} to="/">
                  Sedinta foto
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link style={linkStyle} to="/">
                  Diverse
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

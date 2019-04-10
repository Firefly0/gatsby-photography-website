import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from "react-headroom"
import "./header.scss"
// import PrimarySearchAppBar from "./AppBar"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

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
        <Navbar bg="dark" expand="lg">
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
                <Link style={linkStyle} to="/">
                  Contact
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link style={linkStyle} to="/natura">
                  Natura
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link style={linkStyle} to="/nunta">
                  Nunta
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link style={linkStyle} to="/botez">
                  Botez
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link style={linkStyle} to="/sedintaFoto">
                  Sedinta foto
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

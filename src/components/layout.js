/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "./header/header"
import "./layout.css"
import "react-image-lightbox/style.css" // This only needs to be imported once in your app
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import { SocialIcon } from "react-social-icons"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
            integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
            crossorigin="anonymous"
          />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            backgroundColor: "black",
            minHeight: "100vh",
          }}
        >
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={5000}
            transitionLeaveTimeout={300}
            transitionAppear={true}
            transitionAppearTimeout={500}
          >
            <main>{children}</main>
          </ReactCSSTransitionGroup>
          >
          <div
            style={{
              margin: "auto",
              textAlign: "center",
              position: "fixed",
              left: "0px",
              bottom: "0px",
              height: "60px",
              width: "100%",
              background: "#999",
              padding: "5px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                maxWidth: "500px",
                margin: "auto",
              }}
            >
              <SocialIcon url="https://www.pinterest.com/ionutip/" />
              <SocialIcon url="https://www.facebook.com/diprilipceanuimage" />
              <SocialIcon url="https://www.instagram.com/ionutip/" />
            </div>
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

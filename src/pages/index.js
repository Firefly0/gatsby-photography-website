import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "react-bootstrap/dist/react-bootstrap.min.js"
// import "./index.css"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Despre = ({ data }) => {
  const despre = data.allContentfulDespre.edges[0].node
  return (
    typeof window !== "undefined" && (
      <Layout>
        <div style={{ maxWidth: 960, margin: "auto" }}>
          <SEO title="Despre" keywords={[`gatsby`, `application`, `react`]} />
          <div
            style={{
              height: "300px",
              overflow: "hidden",
              marginTop: "-40px",
              marginLeft: "auto",
            }}
          >
            <img src={despre.imagine.file.url} />
          </div>
          <div
            style={{
              margin: "40px",
              marginLeft: "auto",
              marginRight: "auto",
              paddingTop: "25px",
              color: "white",
            }}
          >
            {documentToReactComponents(JSON.parse(despre.text.text))}
          </div>
          <div style={{ maxWidth: "300px", margin: "auto" }}>
            <img src={despre.logo.file.url} />
          </div>
        </div>
      </Layout>
    )
  )
}

export default Despre

export const query = graphql`
  query DesprePageQuery {
    allContentfulDespre(limit: 1000) {
      edges {
        node {
          imagine {
            file {
              url
            }
          }
          text {
            text
          }
          logo {
            file {
              url
            }
          }
        }
      }
    }
  }
`

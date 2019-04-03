import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "react-bootstrap/dist/react-bootstrap.min.js"
// import "./index.css"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

class Nunta extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nunta: props.data.allContentfulNunta.edges,
    }
  }
  render() {
    return (
      <Layout>
        <SEO title="Nunta" keywords={[`gatsby`, `application`, `react`]} />
        {this.state.nunta.map((album, indexAlbum) => {
          return (
            <div style={{ marginTop: "20px" }}>
              <p
                style={{
                  textAlign: "center",
                  paddingTop: "22px",
                  color: "blue",
                }}
              >
                {album.node.title}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {album.node.imagini.map((element, indexPhoto) => {
                  return (
                    <img
                      className="imageAlbums"
                      src={element.file.url}
                      onClick={() => {
                        console.log(indexAlbum, indexPhoto)
                      }}
                    />
                  )
                })}
              </div>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default Nunta

export const query = graphql`
  query NuntaQuery {
    allContentfulNunta(limit: 1000) {
      edges {
        node {
          title
          imagini {
            file {
              url
            }
          }
        }
      }
    }
  }
`

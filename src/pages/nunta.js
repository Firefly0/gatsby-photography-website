import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "react-bootstrap/dist/react-bootstrap.min.js"
import Lightbox from "react-image-lightbox"

class Nunta extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nunta: props.data.allContentfulNunta.edges,
      photoIndex: 0,
      isOpen: false,
      indexAlbum: 0,
    }
  }
  render() {
    const { photoIndex, isOpen } = this.state
    const images = this.state.nunta[this.state.indexAlbum].node.imagini.map(
      element => {
        return element.file.url
      }
    )
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
                  justifyContent: "space-evenly",
                }}
              >
                {album.node.imagini.map((element, indexPhoto) => {
                  return (
                    <img
                      className="imageAlbums"
                      src={element.file.url}
                      onClick={() => {
                        this.setState({
                          indexAlbum,
                          photoIndex: indexPhoto,
                          isOpen: true,
                        })
                      }}
                    />
                  )
                })}
              </div>
            </div>
          )
        })}
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
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

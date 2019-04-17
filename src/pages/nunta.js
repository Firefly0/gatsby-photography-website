import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "react-bootstrap/dist/react-bootstrap.min.js"
import Lightbox from "react-image-lightbox"
import { Animated } from "react-animated-css"
import ScrollAnimation from "react-animate-on-scroll"

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
      typeof window !== "undefined" && (
        <Layout>
          <SEO title="Nunta" keywords={[`nunta`, `fotograf`, `iasi`]} />
          <div style={{ marginTop: "-40px", marginBottom: "30px" }}>
            {this.state.nunta.map((album, indexAlbum) => {
              return (
                <Animated
                  animationIn="slideInUp"
                  animationOut="fadeOut"
                  isVisible={true}
                >
                  <div key={indexAlbum} style={{ marginTop: "20px" }}>
                    <p
                      style={{
                        textAlign: "center",
                        paddingTop: "22px",
                        color: "azure",
                        fontSize: "32px",
                        fontStyle: "italic",
                      }}
                    >
                      {album.node.title}
                    </p>
                    {album.node.descriere && (
                      <p
                        style={{
                          maxWidth: "960px",
                          margin: "auto",
                          color: "white",
                          padding: "15px",
                        }}
                      >
                        {album.node.descriere.descriere}
                      </p>
                    )}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-around",
                      }}
                    >
                      {album.node.imagini.map((element, indexPhoto) => {
                        return (
                          <ScrollAnimation animateIn="fadeIn">
                            <div key={indexAlbum + "." + indexPhoto}>
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
                            </div>
                          </ScrollAnimation>
                        )
                      })}
                    </div>
                  </div>
                </Animated>
              )
            })}
            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex:
                      (photoIndex + images.length - 1) % images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })
                }
              />
            )}
          </div>
        </Layout>
      )
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
          descriere {
            descriere
          }
        }
      }
    }
  }
`

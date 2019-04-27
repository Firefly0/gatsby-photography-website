import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "react-bootstrap/dist/react-bootstrap.min.js"
import Lightbox from "react-image-lightbox"
import AlbumContent from "../components/albumContent"

class SedintaFoto extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sedintaFoto: props.data.allContentfulSedinte.edges,
      photoIndex: 0,
      isOpen: false,
      indexAlbum: 0,
    }
  }
  onClickForScrollAnimation = (indexAlbum, photoIndex) => {
    this.setState({
      indexAlbum,
      photoIndex,
      isOpen: true,
    })
  }
  render() {
    const { photoIndex, isOpen } = this.state
    const images = this.state.sedintaFoto[
      this.state.indexAlbum
    ].node.imagini.map(element => {
      return element.file.url
    })
    return (
      typeof window !== "undefined" && (
        <Layout>
          <SEO
            title="Sedinta Foto"
            keywords={[`albume`, `fotografie`, `foto`]}
          />
          <div style={{ marginTop: "-40px", marginBottom: "30px" }}>
            <AlbumContent
              photos={this.state.sedintaFoto}
              onClickForScrollAnimation={this.onClickForScrollAnimation}
            />
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

export default SedintaFoto

export const query = graphql`
  query SedintaFotoQuery {
    allContentfulSedinte(limit: 1000) {
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

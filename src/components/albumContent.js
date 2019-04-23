import React, { Component } from "react"
import { Animated } from "react-animated-css"
import ScrollAnimation from "react-animate-on-scroll"

class AlbumContent extends Component {
  render() {
    return (
      <div>
        {this.props.photos.map((album, indexAlbum) => {
          return (
            <Animated
              animationIn={this.props.animationIn}
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
                              this.props.onClickForScrollAnimation(
                                indexAlbum,
                                indexPhoto
                              )
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
      </div>
    )
  }
}

export default AlbumContent

import React, { Component } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from "../components/seo"
import { Animated } from "react-animated-css"
import ScrollAnimation from "react-animate-on-scroll"

import Layout from "../components/layout"

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      despre: props.data.allContentfulDespre.edges[0].node,
    }
  }
  render() {
    const { despre } = this.state
    return (
      typeof window !== "undefined" && (
        <Layout>
          <SEO title="Acasa" keywords={[`fotograf`, `bun`, `iasi`]} />
          <div style={{ maxWidth: 960, margin: "auto" }}>
            <div
              style={{
                height: "300px",
                overflow: "hidden",
                marginLeft: "auto",
                marginTop: "-40px",
              }}
            >
              <Animated
                animationIn="slideInUp"
                animationOut="fadeOut"
                isVisible={true}
              >
                <img src={despre.imagine.file.url} />
              </Animated>
            </div>
            <ScrollAnimation
              delay={1000}
              animateIn="fadeIn"
              initiallyVisible={false}
            >
              <div
                style={{
                  margin: "40px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  paddingTop: "25px",
                  color: "white",
                  textAlign: "justify",
                }}
              >
                {documentToReactComponents(JSON.parse(despre.text.text))}
              </div>
            </ScrollAnimation>
            <div style={{ maxWidth: "300px", margin: "auto" }}>
              <img src={despre.logo.file.url} />
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontStyle: "italic",
                  color: "white",
                }}
              >
                <p style={{ marginBottom: "-2px", fontFamily: "auto" }}>
                  Contact:
                </p>
                <p style={{ marginBottom: "-2px", fontFamily: "auto" }}>
                  Mobil: {despre.mobil}
                </p>
                <p style={{ marginBottom: "-2px", fontFamily: "auto" }}>
                  Gmail: {despre.gmail}
                </p>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1146.2247420686274!2d27.55020268915944!3d47.17284617914398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d47.1730417!2d27.5493028!5e0!3m2!1sen!2sro!4v1555396573545!5m2!1sen!2sro"
                  style={{
                    width: "800",
                    height: "650",
                    frameborder: "0",
                    style: "border:0",
                    allowfullscreen: "true",
                  }}
                />
              </div>
            </div>
          </div>
        </Layout>
      )
    )
  }
}

export default Index

export const query = graphql`
  query IndexQuery {
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
          mobil
          gmail
        }
      }
    }
  }
`

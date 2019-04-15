import React, { Component } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from "../components/seo"

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
          <div style={{ maxWidth: 960, margin: "auto" }}>
            <div
              style={{
                height: "300px",
                overflow: "hidden",
                marginLeft: "auto",
                marginTop: "-40px",
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
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div
                style={{
                  fontWeight: "bold",
                  fontStyle: "italic",
                  color: "white",
                }}
              >
                <p>Contact:</p>
                <p>Mobil: {despre.mobil}</p>
                <p>Gmail: {despre.gmail}</p>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3992.3032159030977!2d27.550406203587556!3d47.171034880908465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e2!4m0!4m0!5e0!3m2!1sen!2sro!4v1555331513961!5m2!1sen!2sro"
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

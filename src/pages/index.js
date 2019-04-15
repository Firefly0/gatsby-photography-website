import React, { Component } from "react"
import Coverflow from "react-coverflow"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from "../components/seo"
import { SocialIcon } from "react-social-icons"

import Layout from "../components/layout"

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      acasa: props.data.allContentfulAcasa.edges,
      despre: props.data.allContentfulDespre.edges[0].node,
    }
  }
  render() {
    const { despre } = this.state
    return (
      <Layout>
        <div style={{ marginTop: "-40px" }}>
          <Coverflow
            width={960}
            height={480}
            displayQuantityOfSide={2}
            navigation={false}
            enableHeading={false}
          >
            {this.state.acasa[0].node.imaginiPentruCarousel.map(element => {
              return <img src={element.file.url} alt="title or description" />
            })}
          </Coverflow>
        </div>
        <div style={{ maxWidth: 960, margin: "auto" }}>
          <SEO title="Despre" keywords={[`gatsby`, `application`, `react`]} />
          <div
            style={{
              height: "300px",
              overflow: "hidden",
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
  }
}

export default Index

export const query = graphql`
  query IndexQuery {
    allContentfulAcasa(limit: 1000) {
      edges {
        node {
          id
          imaginiPentruCarousel {
            file {
              url
            }
          }
        }
      }
    }
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

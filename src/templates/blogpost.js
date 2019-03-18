import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const BlogPost = ({ data }) => {
  const { title, body, image, tags } = data.contentfulBlogPost
  return (
    <Layout>
      <SEO title={title} />
      <div className="blogpost">
        <h1>{title}</h1>
        {/* <img alt={title} src={image.file.url} /> */}
        {/* <div className="tags">
          {tags.map(tag => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div> */}
        <span>
          <div>{documentToReactComponents(JSON.parse(body.body))}</div>
        </span>
        <Link to="/blogposts">View more posts</Link>
        <br />
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      body {
        body
      }
      image {
        file {
          url
        }
      }
      tags
    }
  }
`

import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"

var kebabCase = require("lodash.kebabcase")
const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
  location,
}) => (
  <Layout location={location} title={title}>
    <SEO
      title="all tags"
      keywords={[`blog`, `gatsby`, `javascript`, `react`]}
    />
    <div>
      <h1>Tags</h1>
      <h3>Search Tags:</h3>
      <div id="activities">
      <input class="search" placeholder="Search for tags.."/>
      <ul class="list">
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link class="act" to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </div>
  </Layout>
)

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

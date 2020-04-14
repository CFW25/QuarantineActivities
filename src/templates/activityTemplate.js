import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

export default function Template({
    data,
}) {
    const { markdownRemark } = data 
    const { frontmatter, html } = markdownRemark
    return (
    <div className="activity-post-container">
      <div className="activity-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="activity-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
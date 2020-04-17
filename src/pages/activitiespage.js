import React from "react"
import { Link, graphql } from "gatsby"
import ActivityCard from '../components/activities/activitycard'
import GlobalStyle from '../components/globalstyle'
import styled from 'styled-components'
import Navbar from '../components/navbar'

const ActivityPageCont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(-45deg, #febf01 0%, #fdffa8 100%);
`
const ActivityCont = styled.div`
  margin-bottom:2.5rem;
`
const ActTitle = styled.h1`

`
const IndexPage = props => {
  const { data } = props
  const posts = data.allMarkdownRemark.edges

  return (
    <ActivityPageCont>
      <GlobalStyle/>
      <Navbar/>
      {/* in my site I wrap each page with a Layout and SEO component which have 
    been omitted here for clarity and replaced with a React.fragment --> */}
      <ActTitle>Activities</ActTitle>
      

      {posts.map(({ node }) => {
        const { excerpt } = node
        const { title, time, date, path, tags, equipment} = node.frontmatter
        return (
          <ActivityCont>
            <ActivityCard title={title} time={time} excerpt={excerpt} link={path} tags={tags} equipment={equipment}/>
          </ActivityCont>
        )
      })}
      
    </ActivityPageCont>
  )
}


export default IndexPage 

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }
    filter: {fileAbsolutePath: {regex: "/(activity)/"  }}
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            time
            path
            title
            date(formatString: "MMMM DD, YYYY")
            tags
            equipment
          }
        }
      }
    }
  }
`
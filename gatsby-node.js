/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const kebabCase = require("lodash.kebabcase")
const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const activityTemplate = path.resolve(`src/templates/activityTemplate.js`)
  const tagTemplate = path.resolve("src/templates/tags.js")
  const questionTemplate = path.resolve("src/templates/questionTemplate.js")

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              tags
            }
          }
        }
      }
    }
  `)
  let tags = []
  // Iterate through each post, putting all found tags into `tags`

    result.data.allMarkdownRemark.edges.forEach(edge => {
  if (edge.node.frontmatter.tags) {
    tags = tags.concat(edge.node.frontmatter.tags)
  }
  })
  // Eliminate duplicate tags

  var uniq = arrArg => {
  return arrArg.filter((elem, pos, arr) => {
    return arr.indexOf(elem) == pos
  })
  }
  tags = uniq(tags)
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${kebabCase(tag)}/`,
      component: tagTemplate,
      context: {
        tag,
      },
    })
  })


  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: activityTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}
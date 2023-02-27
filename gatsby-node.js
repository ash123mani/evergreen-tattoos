const path = require(`path`)
const kebabCase = require("./src/utils/kebab-case")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const categoryDetailsPage = path.resolve(
    "./src/templates/tattoo-category-details.js"
  )

  const result = await graphql(`
    query {
      allContentfulTattooCategories {
        edges {
          node {
            id
            categoryName
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allContentfulTattooCategories.edges.forEach(({ node }) => {
    createPage({
      path: `/tattoo-category-details/${kebabCase(node.categoryName)}`,
      component: categoryDetailsPage,
      context: {
        categoryName: node.categoryName,
        slug: kebabCase(node.categoryName),
      },
    })
  })
}

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your site has been built!`)
}

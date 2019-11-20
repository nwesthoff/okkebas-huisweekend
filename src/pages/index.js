import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'
import { isAfter } from 'date-fns'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <p>
          Jullie zullen gedurende de aankomende week en het huisweekend meer
          hints, tips, tricks, aanwijzingen, inlichtingen en instructies
          ontvangen.
        </p>
        {posts
          .filter(node => {
            const { releaseDate } = node.node.frontmatter
            return releaseDate && isAfter(new Date(), new Date(releaseDate))
          })
          .map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const subtitle = node.frontmatter.subtitle
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    style={{ boxShadow: `none`, color: '#B54D49' }}
                    to={node.fields.slug}
                  >
                    {title}
                  </Link>
                </h3>
                <h4
                  style={{
                    marginBottom: rhythm(1 / 2),
                    marginTop: rhythm(1 / 4),
                  }}
                >
                  {subtitle}
                </h4>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            releaseDate
            title
            subtitle
          }
        }
      }
    }
  }
`

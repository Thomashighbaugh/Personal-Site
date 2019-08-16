import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PageTransition from 'gatsby-plugin-page-transitions';
import Footer from '../components/Footer';
import Header from '../components/Header';
class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
<PageTransition>
<Header />
<SEO title="All posts" />
      <div id="projects">
        <div className="projects-page">
        <h1>Projects</h1>
          <aside>
            <h4>[ description ]</h4>
            <p>Listed here are some of the projects that demonstrate my capacity and flare as a developer.</p>
            <p>The projects listed here range from BASH scripts for Linux-based OSes to my Web Development efforts.</p>
          </aside>
        </div>
<main>
        <section>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug} >
              <h3>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
        </section>
</main>
      </div>
<Footer />
      </PageTransition>
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
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                    }
                }
            }
        }
    }
`

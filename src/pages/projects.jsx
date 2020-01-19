/*
 * This page is the showcase page that renders markdown files into articles about
 * each listed project
 */
// @TODO - add links to all the projects in their markdown files
// @TODO - add new projects and update links
// @TODO - pull awesome window manager configuration and put it in its own repo
import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout/index';
import SEO from '../components/SEO';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout>
        <SEO
          title="Projects"
          description="Projects by TLH with links to additional descriptions written in Markdown then rendered into pages by Gatsby"
        />
        <div className="card" id="projects">
            <aside className="projects-intro">
              <div className="blurb">
              <h1 className="blurb-title">Projects</h1>
                <hr />
                <p>
                  These are some of the projects I have worked on recently.
                </p>
              </div>
            <div className="blurb">
                <h4 className="blurb-title" id="sub">This Page</h4>
                <hr />
                <p className="information">
                  The pages for each project are rendered from Markdown files
                  using the power of GraphQL and Gatsby, the Static Site
                  Generator responsible for rendering the React and SASS I wrote
                  for this site into the HTML and CSS it exists as on Netlify's
                  server.
                </p>
            </div>
          </aside>
            <main>
              <ul>
                {posts.map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug;
                  return (
                    <li className="post" key={node.fields.slug}>
                      <Link className="link-heading" to={node.fields.slug}>
                        {title}
                      </Link>
                      <hr />
                      <small>{node.frontmatter.date}</small>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </li>
                  );
                })}
              </ul>
            </main>
          </div>
      </Layout>
    );
  }
}

export default BlogIndex;

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
`;

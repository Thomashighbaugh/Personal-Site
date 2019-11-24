/*
 * This page is the showcase page that renders markdown files into articles about
 * each listed project
 */
// TODO - add links to all the projects in their markdown files
// TODO - standarize the writing in each article using format from SaarJanak
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
        <div id="projects">
          <div className="projects-page">
            <aside>
            <h1>Projects</h1>
              <h4>[ description ]</h4>
              <p>
                These are some of the projects I have worked on recently.
                Clicking the title will take you to a description of the project
                with information about what it does, why I made it and links to
                the source code as well as any hosted web presence that exists
                for that particular project.
              </p>
              <br/>
              <p>
                The projects listed range from those purely web development
                related to those that focus on the administration of my
                workstation using DevOps methodology.
              </p>
            </aside>
          </div>
          <main>
            <section>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug;
                return (
                  <div className="post" key={node.fields.slug}>
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
                );
              })}
            </section>
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

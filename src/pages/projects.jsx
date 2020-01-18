/*
 * This page is the showcase page that renders markdown files into articles about
 * each listed project
 */
// @TODO - add links to all the projects in their markdown files
// @TODO - standarize the writing in each article using format from SaarJanak
// @TODO - add new projects and update links
// @TODO - pull awesome window manager configuration and put it in its own repo
// @TODO - link all dat on Gitlab
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
          <div className="card">
            <aside className="projects-intro about-card">
              <div className="card-header">
            <h1 className="card-title">Projects</h1>
              <hr/>
              </div>
<div className="card-body">
              <p>
                These are some of the projects I have worked on recently.
                Clicking the title will take you to a description of the project
                with information about what it does, why I made it and links to
                the source code as well as any hosted web presence that exists
                for that particular project.
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
                    <hr/>
                    <small>{node.frontmatter.date}</small>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </li>
                );
              })}</ul>
          </main>
          </div>
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

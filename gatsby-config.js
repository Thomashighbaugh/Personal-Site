'use strict';
const siteConfig = require('./config');
module.exports = {
  siteMetadata: {
    title: siteConfig.url,
    description: `An interactive demonstration of the web development, design and overall technical prowess of Thomas Leon Highbaugh`,
    author: siteConfig.author.name,
    siteUrl: siteConfig.url,
    social: {
      twitter: siteConfig.author.contacts.twitter,
      linkedIn: siteConfig.author.contacts.linkedin,
      github: siteConfig.author.contacts.github,
      gitlab: siteConfig.author.contacts.gitlab,
      dribbble: siteConfig.author.contacts.dribbble,
      instagram: siteConfig.author.contacts.instagram,
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 2400,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2400,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `thomas-leon-highbaugh-development-portfolio`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        // A selector to set react-modal's app root to, default is `#___gatsby`
        // See http://reactcommunity.org/react-modal/accessibility/#app-element
        appElement: '#___gatsby',

        // Object of props that will be passed to the react-modal container
        // See http://reactcommunity.org/react-modal/#usage
        modalProps: {
          closeTimeoutMS: 500,
        },
      },
    },
  ],
};

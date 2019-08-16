<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Thomas Leon Highbaugh's Web Development Portfolio
</h1>
# Thomas Leon Highbaugh Portfolio

> The portfolio site of Thomas Leon Highbaugh built with React, Redux, Webpack and SASS in a structured, modular form.

This repository serves to host the source code of the developer portfolio of Thomas Leon Highbaugh. The site that is presented here is built primarily with React, thus serving as a living testament to the web development prowess of TLH, and includes functionality from Redux, SASS and WebPack to improve the site's UI and DX (developer experience).

This site replaces TLH's former portfolio, Resurgens, and its associated branding as a means of demonstrating the increasing maturity of TLH as a developer while conforming it more to the traditional portfolio site's standards without compromising in regards to its style.
![](screen.png)

## Table of Contents
[Introduction](#thomas-leon-highbaugh-portfolio)

[Installation](#installation)
   - [Run Dev Server](#run-dev-server)
   - [Usage Example](#usage-example)

[Technology Stack](#technology-stack)
 - [Development (Web)](#web-development)
    - [Webpack](#webpack)   
    - [React](#react)
    - [Redux](#redux)
    - [SASS](#sass)
        - [Include Media](#include-media)

- [Deployment](#deployment)
    - [Hosting - Netlify](#hosting---netlify)    

[Credits](#credits)

--- 
## Installation

To install this site locally, assuming that you mean to adapt it to your own purposes, one simply needs to clone the repository locally and install its dependencies.

```bash
git clone https://github.com/Thomashighbaugh/thomas-leon-highbaugh-portfolio
cd thomas-leon-highbaugh-portfolio
npm install
```

### Run Dev Server
One perk of using Gatsby instead of the original build's use of React + WebPack is that it includes a baked in _Development Server_ for seeing what your site would look like when hosted. Unlike the Webpack Dev Server without Gatsby, there are several features Gatsby provides that make that part of the process more seamless, such as suggesting alternative ports (instead of exiting with an error code buried in lines of hardly human-readable techno-babble) and greater consistency with what the site will look like in production. 

To use the development server simply enter:


```bash
yarn develop
# or 
npm run develop 
```
If all is well, the server will give you a port number off of your local host (8000 by default) to navigate to so you can preview all your changes live. If there is an error that must first be addressed, Gatsby will point to the file and depending on what it is a suggestion or two on addressing that error. 

### Usage example

This site is being used as a portfolio for the development efforts of TLH for viewing by potential customers and employers of TLH.

While the intended purpose is rather specific, this site can easily be adapted or used as a sort of extra-stylish boilerplate for your own purposes as well. The code base works with the latest node (no need to set NVM to version 8)

## Design Considerations

### Style 
The portfolio itself was stylized to capture the professional tone of my work without compromising on the signature flare I bring to my web development projects. The result is a site that is both easy to look at, regardless of outdoor lighting conditions, with the *neon* flare of its predecessors.  

### Component Reusibility and Modularity
Object Orientation is useful to developers for a number of reasons, in writing the three React sites I produced these past few weeks has made it clear to me that it would enable me to reuse my code across projects. Having written React components and JS functions useful to me in making these sites, I have attempted to create reuseable portions of the source code that I could take out of them and use later if they become useful again.  

All of these components will (eventually) be available for public use through Bit, freely of course. 
## Technology Stack


### Web Development 

#### Gatsby
The static site generator that enables the generation of sites from React components. It handles the routing of the project's pages, the Webpack related functions and allows for the easy addition of various modules (called plugins) to increase the functionality of the site in various ways. The plugins used here include

- gatsby-plugin-sass - enables the use of SASS to style the site 
- gatsby-plugin-react-helmet - enables modification of the head element on the generated HTML files 
- gatsby-plugin-manifest 
- gatsby-transformer-sharp 
- gatsby-plugin-sharp
- gatsby-source-filesystem

#### React
The basic underpinnings of this entire effort and its two associated sites was in this JS framework/library. Used primarily for its powerful application and the manner in which it must be structured that provides PHP-like splitting of various functionality into its own file. This makes the process of maintaining and managing the code base far simpler as less time is spent scrolling through unruly JS files.

The other utility of using React was its application of **JSX** which is a syntax for code that the transpiler will render as HTML that looks and behaves very much like it is (X)HTML, meaning the skills learned earlier as prerequistes for reaching this stage have renewed utility as well as a more comfortable developer experience. 
#### SASS
This variant of CSS allows for code structure that is similar to React and makes the code reuseable across projects with less adaptation as many CSS only stylesheets would have to be. It also includes such features as variables and mixins, that make it easier to change aspects of the site quickly and reuse values across the style sheets without need for search-and-replace functions or other refactoring tools that are generally less reliable. 

### Web Resources 

#### GitHub -> GitLab
The VCS I used was Git, specifically with [GitHub](https://github.com/Thomashighbaugh/thomas-leon-highbaugh-portfolio) being the remote repository I commit to and [GitLab](https://gitlab.com/ThomasLeonHighbaugh/thomas-leon-highbaugh-portfolio) being configured to back up the repository automatically thanks to the latter's suite of useful features for creating pipelines between itself and GitHub. 

#### Bit 

[Bit.dev](https://bit.dev) allows developers and organizations to create reuseable components out of there React code (or other JS frameworks/libraries) and reuse them in the future. Even without pulling any components from *Bit* I was able to use it to tease out my application logic by examining the pieces while backing them up and correct several issues I noticed in the process that may have lead to unexpected consequences. 

#### UI ZOO
Like Bit, UI ZOO allows for a simple way to get commonly used components for your site without need for rewriting the same components over, only this is not a collection of various developer's work but instead generates the needed code for you using its handy UI. While an NPM package and local environment are available, it is possible to use the website to simply generate the same content and drop it into the site as needed. While more limited in options than Bit, the UI ZOO approach is a more flexible option for speeding up development time 
### Deployment 

#### Netlify 

> Note I am not paid for these opinions, just impressed with the service

[Netlify](https://netlify.com) is the premier serverless hosting option available to the modern web developer, which I am fiercely loyal to simply because it provides a stable, reliable and featureful alternative to GitHub Pages while being **totally free** while offering **a custom subdomain for each site***. 

Having tried other options that were themselves excellent, I have noticed no slow down or glitching since moving [thomasleonhighbaugh.me](https://thomasleonhighbaugh.me) to 
Netlify. In fact, they even provided a **free SSL certificate** for the site.  

I actually host copies of my old developer sites, the front pages to various projects and the many, many example sites that I make on Netlify and have never once paid a dime! 

## Credits
In addition to a hearty "thank you" to those responsible for the above listed technologies, I would also like to credit the following:

### Articles

-   [Front-End Development with JavaScript using Reactjs , Redux , Sass and Webpack](https://itnext.io/front-end-development-with-javascript-using-reactjs-redux-sass-and-webpack-1a2fdd46daba)

-   [Fast and modern front-end setup with webpack, react, redux, router, saga and postcss, part 1](https://itnext.io/fast-and-modern-front-end-setup-with-webpack-react-redux-router-saga-and-postcss-1360e9715d17)
    
    [Part 2](https://itnext.io/fast-and-modern-front-end-setup-with-webpack-react-redux-router-saga-and-postcss-part-2-9ae7ad4e7cb2)
    
    [Part 3](https://itnext.io/fast-and-modern-front-end-setup-with-webpack-react-redux-router-saga-and-postcss-part-3-27ac4bc3f969)

-   [React, SCSS and Webpack](https://medium.com/@joshuacrass/react-scss-and-webpack-ae9bd84b9e43)

-   [Roll your own tiny React environment using Webpack, Babel, and Sass](https://www.codementor.io/valentinrad/roll-your-own-tiny-react-environment-using-webpack-babel-and-sass-ei70wyhjl)

-   [Creating a Node app with React, Webpack 4, Babel 7, Express and Sass ](https://dev.to/kedar9/creating-a-node-app-with-react-webpack-4-babel-7-express-and-sass-3mae)

- [React : Babel + Webpack + Sass boilerplate application](http://blog.marcnuri.com/react-babel-webpack-sass-application/)

---
### Boilerplate

Due simply to the unavailablity of any previous project which had enough specific functionality I was looking for when composing this site, 
I built this site from the Gatsby Basic Starter available when using the Gatsby CLI. 

To obtain your own Gatsby Basic Starter, use the following command 

```bash
npm i -g gatsby-cli
gatsby new [name of your project here]
```
The starter contains a basic set of files that are sufficient to build a more complex project on top of with a nice 
selection of features, including helpful error dialog, for a multitude of use cases. If interested in structuring your own 
project with varying needs from this one, I would reccomend examining Gatsby to make the process of deploying a static (or mostly static) 
site with the benefits of React and far fewer problems of other tech stacks. 

---
And a big thank you to my dog tolerating me during the
process of bringing you this site! 


## Meta

Thomas Leon Highbaugh – [Github](https://github.com/Thomashighbaugh) – thighbaugh@zoho.com

Distributed under the MIT license.

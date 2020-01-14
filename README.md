<div align="center" style="background-color: #343a40; outline: #669933 solid 5px;">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="200" />
  </a>
</div>
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

[To Do](#to-do-list)

[Installation](#installation)

- [Run Dev Server](#run-dev-server)
- [Usage Example](#usage-example)
- [ Technical Highlights and Considerations](#technical-highlights-and-considerations)
  - [React](#react)
  - [SASS](#sass)
  - [Netlify](#netlify)

[Note On My Development Environment](#note-on-my-development-environment)
[License](#license)

---

## To-Do-List

Like all projects, much can still be done. With this site, I have moved to releasing features and components of the site in a "rolling" fashion instead of completely rebuilding my portfolio, especially now that Iam comfortable and competent using React, Webpack, Gatsby and associated tools to create web interfaces and have a well ordered dev environment in which to craft these experiences. Below are the features I am aware need to be addressed promptly [and kujeky am already toiling with]

### Deployment

- [x] deploy devlog
- [x] deploy portfolio site
- [x] link sites

### Structure

- [x] migrate to new SASS structure and integrate Bismuth Library Functionality as early staging/proving grounds
- [x] Investigate various organizational models and determine what works best (SASS in sass directory with inline styling in Atomic fashion where it is fitting)
- [x] determine appropiate method of isolating functional blocks of components (components directory, page directory)

### Meta

- [ ] icons replacing social names, clevefr but generic ones for devlog and gallery
- [x] gray hover effect for buttons

### About Page

- [x] deal with card display on mobile (make width:100% at mobiler breakpoint)
- [x] adjust button and text responsiveness
- [ ] deal with the ongoing nightmare the modals for the skills section has become

### Resume Page

- [x] fix title font color
- [ ] fix references name color
- [ ] languages font color
- [ ] internal buttons to gray style
- [ ] tel number link copy-to-clipboard on click
- [ ] add devlog to contact/personal sites
- [ ] specific adjustments to fonts for page
- [ ] add blurb at end about JSONresume basis
- [ ] remove whatever is causing some sections to align center, change to left for this page.
- [ ] create specific classes and ids for page

### Projects Page

- [ ] Add repository and hosted links to each project
- [ ] add additional projects to showcase
- [ ] implement a system of categorization to projects allowing users to sort by involved skills
- [ ] reduce description width for mobile, prioritize projects
- [ ] create complete descriptions for all listed projects

### Gatsby Config

- [x] optimize plugins, remove duplicates and ineffecencies

### Responsiveness

- [x] further optimize site for mobile/tablet/vertically-split-tiling-wm widths
- [x] achieve consistent animation effects
- [x] remove unneeded animations from mobile experiences
- [x] fix header button display

## Installation

To install this site locally, assuming that you mean to adapt it to your own purposes, one simply needs to clone the repository locally and install its dependencies.

```bash
git clone https://github.com/Thomashighbaugh/thomas-leon-highbaugh-portfolio
cd thomas-leon-highbaugh-portfolio
npm install
```

### Run Development Server

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

This site is the first of the sites I am reponsible for that I am using as the basis for the Bismuth SASS Library, which I hope to be a consistent SASS library somewhat like Bootstrap that enables quick stylization within React utilizing classes (which are being developed here, so bare with me) that roll in my rather opinionated opinions of SASS based web stylization thus enablig the user to set it and forget it much like Bootstrap enables. The primary goal is making things easier on myself and fighting with SASS less when making sites thus we shall see how much others find my opinions helpful....

### Component Reusibility and Modularity

Object Orientation is useful to developers for a number of reasons, in writing the three React sites I produced these past few weeks has made it clear to me that it would enable me to reuse my code across projects. Having written React components and JS functions useful to me in making these sites, I have attempted to create reuseable portions of the source code that I could take out of them and use later if they become useful again.

All of these components will (eventually) be available for public use through Bit, freely of course.

## Technical Highlights and Considerations

These are some interesting features or otherwise noteworthy aspects of the technologies that went into this site that I felt necessary to mention in the Readme for the sake of anyone porting this site for their own use.

#### Gatsby Plugins

These are all included, with configuration and at times their own plugins, within the Gatsby configuration file `gatsby-config.js` in the project's root directory.

| Plugin                     | What It's Doing                                                                                                                                     |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| gatsby-plugin-sass         | enables the use of SASS to style the site                                                                                                           |
| gatsby-plugin-react-helmet | enables modification of the head element on the generated HTML files                                                                                |
| gatsby-plugin-manifest     | keeps track of all the other stuff going on in here, creating a manifest for the underlaying generator of additional actions it will be rolling in. |
| gatsby-transformer-sharp   | enables the transmuting of Markdown to React to HTML/CSS in Gatsby's process rendering static site from the numerous components it is made of.      |
| gatsby-plugin-sharp        |                                                                                                                                                     |
| gatsby-source-filesystem   | enables accessing local resources from within the filesystem                                                                                        |

#### React

Obviously, Gatsby uses React to compile static sites in HTML CSS, so the entire web application is written in React, with SASS as its stylization due to my particular taste and quest for a independent and opinionated SASS library tenatively called the Bismuth SASS Library (as well as my distaste for the camel casing of Styled Components).

#### SASS

Or in my usage its properly known as SCSS, as I prefer that syntax for my own projects for organizational purposes. I have deliberately eschewed any styling within the files or other aspects of Atomic Design as I am using this site as the basis for a SASS library I am writing that would in theory allow for more Atomic Designs than even the "directory with its own stylesheet" method as only class names would be needed to style the bare JSX once completed. Thus all of the relelvant SASS is found in the styles directory and called by the gatsby-browser.js file meaning no component even calls it directly thus eliminating some of the quriks of using a monolithic library as has I had been experiencing it.

### Netlify

Ask anyone, Netlify does for free what most hosting services don't do for any amount of money. Sure other services exist for static sites but none have the smooth interface, ease of deployment and consistent functionality of Netlify so the choice is natural to host example sites or even my main web presence (this site) on a platform that takes the pain out of hosting as well as **the cost**.

---

## Note on My Development Environment

I made all of this, in fact I have exclusively written code only on, Linux. Specifically this project has been entirely written while I have utilized Manjaro Linux. For my specific configurations, see [my dotfiles](https://github.com/Thomashighbaugh/dotfiles)

## License

This site is distributed under the MIT license. I offer no guarentees of anything other than a reminder that there is only two things certain in programming, frustration and swearing.

` And a big thank you to my dog tolerating me during the process of bringing you this site! His patience is a model for even saints to aspire to. ``And a big thank you to my dog tolerating me during the process of bringing you this site! His patience is a model for even saints to aspire to. `

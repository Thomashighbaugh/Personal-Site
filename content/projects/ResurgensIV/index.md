---
title: ResurgensIV
date: '2019-08-05'
description: The fourth version of my portfolio site, written mainly in React with MaterialUI and Styled Components, the first site I wrote in React and an excellent example of the acceleration in my learning process, which since becoming comfortable with React, has only increased even more.
image: '../../assets/Opitx.png'
tags: html5, css3, resurgens, portfolio, design
---

### Subtitle

![Resurgens IV](/content/assets/resurgensiv.png)

## Links

## Problem

The fourth reconstruction of my portfolio site was inteded to address the following:

- Use React and JSX to construct majority of the site
- Use SASS/SCSS as the primary method of styling the site
- Incorportate icons into the design of the site to add visual flare
- Attempt to utilize Material Design in the design of the site

## Solution

- The usage of React in the creation of this site actually made the process 
easier to comprehend due to the manner in which React is developed. Having components
of the site in their own files makes for a much more sane and orderly debugging process
and helps break down the site into relatively logical chunks that once one fully 
understands the syntax and its functions, the process of development is simplified using
React. 
- JSX is essentially XHTML in standards and form, in any effective measure at least,
thus its usage is rather seemless for those with the full understanding of HTML I had
spent time acquiring first. While not quite the ridgid standards of HTML5 and its shift
to semantic blocks that Ihad come to know and love, having an awareness of these further improved
the process of writing out and debugging the JSX that the site is composed of. 
- SCSS, the variant syntax of SASS I prefer, is a lot like CSS3 with some useful functionality
built in, like variables which make the changing of various aspects of the site much more seamless
and less tedious. While using the find and replace commands in VIM does speed up that 
process as well, having variables that enable me to shift large portions of the style 
easily is invaluable as is the `@extend` feature that allows one to create bases from 
which various components can than be built on top of. 

## Notes on Source Code

- Material Design, or at least my implementation of it, did not improve but actually took
away from the site the stylistic edge that I like my sites to have while also being a 
relatively fickle library to utilize in this particular instance that I feel is a little
overkill and too limiting for practical purposes. The reason I again remade the site, which 
is now on a rolling release model and what you have before you now, is because of my displeasure 
with how this variant turned out. While doing what it was the site needed to, its visual 
flare was lost and I was a little too hesitant with React as I had not had the experience that
this site and the three rebuilds of it I have done were still to be had.  

<button className="nav-btn">
   <a href="https://github.com/Thomashighbaugh/resurgensiv">
   [github]
   </a>
</button>
<button className="nav-btn">
 <a href="https://not-another-devlog.netlify.com/">
   [hosted]
   </a>
</button>

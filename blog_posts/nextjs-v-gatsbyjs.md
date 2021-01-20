---
title: Next.js vs. Gatsby.js
date: "2021-01-13"
subtitle: "A Tale of Two node_modules"
banner: dogpatchcircuit.png
alt_text: "Static Site Generators and Dependency Hell"
tags: [React]
promoted: false
---


# Next.js vs. Gatsby.js
## A Tale of Two node_modules

Next.js and Gatsby.js are both static site generators that convert React (and friends) into HTML + CSS for purposes of rendering websites fast with minimal hardware overhead on the server and client, because nothing is more performant that HTML and CSS after all. Both are excellent tools that wrap a certain set of WebPack functionality into a convenient bow that is significantly less troublesome that using WebPack itself or other less specific tools to achieve the same result. Both have relatively wide acceptance in various front-end niche communities and integrate flawlessly into cloud hosting platforms like Vercel (who make Next.js) and Netlify. 

When compared to doing these things manually or even using WebPack they are wicked fast but when one considers them in comparison to one another, there is some substantial functionality differences that I will illuminate in this post for the benefit of the audience in selecting one of them to use for their next project that calls for a static site generator. 

## Gatsby: Where the Plugins Play

Gatsby has a lot of plugins and extra function that can be added into the site by including the package within the `package.json` and `gatsby-config.js` files in the root directory of the site. There are a lot of options one can mount into the Gatsby config, in fact there is also the possibility of using three other `gatsby-*.js` files as part of the configuration process. These files end up being somewhat messy and chaotic, linking the GraphQL queries togehter, ennumerating plugins, configuring various options within the plugins and all sorts of other useful functionality that make for a rich ecosystem that one may employ in a wide array of use cases. 

### BUT...

The plugin ecosystem is an awesome element of using Gatsby to generate your static web sites, but it has some significant draw backs. One of which is in the debugging process where the admixture of GraphQL at the bottom of pages,up to 4 configuration files and the dependency hell that emerges from the plugins being included can make for transient and irritating hiccups in the development cycle. 

An example being in my recent rebranding and polishing of a stater I wrote for Gatsby that in order to get the development server to even run, required deleting the repository then cloning it again and then it would run. I tried everything I could think of but nothing seemed to address the error it would throw when attempting to run it a second time, it would spit back an error in a GraphQL query that the production site seemed unconcerned with as it did when first run. 

The other big drawback, which I mentioned above in passing, is the dependency hell that emerges with the plugins. Though its a drawback all its own when considering the overhead it requires on top of being so fickle as to almost necessiate deleting the `yarn.lock` file and the `node_modules` directory with each restart of the dev server. The Crazy-Wise starter has ~14,000 packages it pulls in and its relatively simple at its core and doesn't include a UI library or anything that can account for all that except for the things each plugin requires, etc. It also means finding a node version that works and sticking to it. While partially an issue with the dystopic mess that is node packages, it seems that the Gatsby community would be wise to bake into their plugin development efforts some mutual consensus to mitigate this before `dependenabot	` goes on strike as this sort of massive package throughput means lots of security issues arise and package updates that need to be merged.

## Next!

I wrote a variant of my portfolio site in Gatsby, but found the overall set up a little too fickle and ridgid, despite really loving the Gatsby community. About that time I discovered Vercel and inherently Next.js, which is written by Vercel. It is similar to Gatsby and on a basic level does the same things. It doesn't have as much in the way of examples, starters or community support as Gatsby and functions a little more like pure WebPack but I gave it a shot to see how it was and figured it probably integrated well with Vercel's cloud hosting. I also have to admit that part of what lured me to try Next.js, other than its use of React for purposes of static site generation, was I really like the branding Vercel uses as it is a minimalism that is not overly stark and uses plush typography. 

But I digress... Next has a similar configuration pattern to Gatsby, both derive from the Webpack pattern obviously, but I currently have only one `next.config.js` file and it is all of 20 lines unlike the 134 in the Gatsby configuration file, 201 in the `gatsby-node.js` file and 8 in the `gatsby-browser.js` file. Needless to say, determining what went wrong and how is a litte easier with a smaller configuration to forget a curly brace or comma in. While my `package.json` is about as big as one for a Gatsby-based site, it pulls in only ~~1900 or so packages in the installation portion and goes from freshly cloned to running dev server in about a fifth of the time (not a precise measure) with error messages that are more useful and plays well with my overly complicated SCSS nested stylesheets (that I am likely going to strip mostly down in favor of more Styled Components for sake of my sanity). 

Like Gatsby, there are a lot of useful components that Next provides, such as one to handle links, but since I don't have to add in voluminous configurations and add a transformer and plugin package to get images to work, the developer experience is a lot smoother. The build process is seemingly faster and more robust in handling issues without terminating itself in some frustrating way and the Vercel platform is actually much nicer than Netlify for reasons that are out of the scope of this article but essentially it is nice to use a platform and static site generator written within the same firm as the hiccups are fewer and thus the integration of the site from its repository is less likely to lead to billing disputes as Vercel seemingly doesn't care as much about charging you for compute time as some of their competition. 

Next suffers somewhat for want of easily bolted in extensions, however it seems one can add in a lot from WebPack if they are so inclined and don't mind getting some dirt on their sleeves 

## At the End of the Day 

When the site is situated on the host platform, whatever platform it is, the end results are fast loading, low overhead sites regardless if you go for Gatsby with its prefab plugin ecosystem or decide to waste less time going back and forth with dependencies and more time coding with Next.js. Both tools produce HTML and CSS files, which are always going to be blazing fast but also make these tools less than suitable for web applications that require a little more interactivity, limiting their use cases to a narrower band than say React in general. Unlike Vue, which I have experimented extensively with in pursuit of a personal knowledge base, I find React's syntax a lot more natural and the organizational pattern it uses (which reminds me of PHP) to be easier to keep straight in my head, thus am glad I didn't need to veer away from React to replace Gatsby. 
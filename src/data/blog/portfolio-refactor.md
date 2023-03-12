---
banner_alt: A photo of a forest overlooking the bright white sky in the background
banner: 
title_prefix: Introducing
title: Portfolio Overhaul
description: I decided to do a complete rewrite of my portfolio site again, this time motivated mainly by the exciting new changes to Tailwind.css and Next.js
date: '2021-10-22'
---

## Why A Complete Overhaul?!

---

A few reasons:
  1. I had been bad about updating both the blog and project rolls. This version eliminates the project rolls and fetches my projects as the list of my repositories recently contributed to from both my personal and organization accounts on Github, enabling me to automate one neglected element of this site thus I need only to update my blog roll regularly and `bam!` things will stay fresh locally as I push my work to GitHub as part of my usual workflow 
  2. I wanted to refresh the site's navigation for a more mobile friendly and less cluttered experience navigating the site while keeping its design and user experience as cutting edge as possible. The navigation bar at the top of the screen and footer at the bottom was wasting space that is better occupied by the content of the site and unnecessary when menus provide the same functionality on demand while loaning themselves more naturally to mobile view ports independent of the user's platform.
  3. Include more functional programming patterns in the source code that makes for a more modern and easily maintained code base that showcases my growing fondness for functional programming I have derived from my work with the Lua programming language used in configuring Awesome Window Manager and the NeoVim text editor. 
  4. Introduce new and interesting features that I haven't had a chance to work with yet such as adding click sounds to the site (which can be disabled)

## Tech Stack

---

The [project](https://github.com/Thomashighbaugh/Personal-Site) was built using the following tools & frameworks:

-   [React](https://reactjs.org/) / [Preact](https://preactjs.com/) (For Production)
-   [Next.js](https://nextjs.org/)
    -   [next-seo](https://github.com/garmeeh/next-seo)
    -   [next-themes](https://github.com/pacocoursey/next-themes)
-   [EmotionCSS](https://emotion.sh)
-   [Twin.macro](https://github.com/ben-rogerson/twin.macro) (For [Tailwind CSS](https://tailwindcss.com/))
-   [Tailwind UI](https://tailwindui.com/)
-   [Feather Icons](https://feathericons.com/)
-   [Hookstate](https://hookstate.js.org/)
-   [react-use](https://github.com/streamich/react-use)

## :sparkles: Features

---

With this new ground up re-build comes a whole host of new features & improvements.

### Preact

---

When `Vercel` handles building and deploying the site from the time it is pushed into its Git repository, it is easy to overlook bundle size. This is fine for my personal projects, but unfortunately I am not going to get paid just doing those and personally I just like making things more efficient and lower in resource consumption (alpine linux > ubuntu in docker containers for instance)

In summary, my Next.js project is configured to replace [React](https://reactjs.org/) with Preact in production builds.

```js:next.config.js
webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
        Object.assign(config.resolve.alias, {
            'react': 'preact/compat',
            'react-dom/test-utils': 'preact/test-utils',
            'react-dom': 'preact/compat',
        });
    }

    return config;
},
```



### Projects 

---

My new [projects page](/projects) has been redesigns to utilize server-side rendering for a very unique purpose.
The page will show a select number of projects that are publicly available on my GitHub repository. However, the way they are selected is very unique.

Every request made for the page (That isn't already cached) will return a newly server-side rendered page that is later hydrated on the client (As all SSR does).
When performing the render, the server will go out and fetch all of my available GitHub repositories & then filter down all of them based on a number of filters.
These include the following:

-   The repository isn't archived
-   Contains the `portfolio` topic in the repository meta data

From there we then strip out the emoji suffix used in the repository description (This is a common practice I do to add a touch of color :rainbow:) so it can then be used as the project icon, with the description then being returned with that stripped out emoji.
The rest of the data returned is pretty standard (Homepage URL, GitHub repository URL, etc).

With this I can update the contents of my projects page by using GitHub as a form of CMS. All I will need to do to add a project to my projects page page is add the `portfolio` tag to any of my repositories.

![Screenshot of the projects page](/blog/hello_world/projects.png 'Screenshot of the projects page')

<XButton href="/projects" icon="feather:external-link" label="Go to Projects" />

### :clock1: Timeline

---

When planning out my re-design I explored hundreds of portfolio websites. Some from big well known developers, to smaller less known devs. To very successfull designers, to students who have some really amazing looking sites so early on.

To quickly name a few that helped me a lot:

-   [jmswrnr.com](https://jmswrnr.com)
-   [leerob.io](https://leerob.io)
-   [maximeheckel.com](https://maximeheckel.com)
-   [phineas.io](https://phineas.io)
-   [wojtek.im](https://wojtek.im)
-   [www.joshwcomeau.com](https://www.joshwcomeau.com)
-   [www.stuart.re](https://www.stuart.re)
-   [www.twanmulder.com](https://www.twanmulder.com)

That last one in particular I wanted to thank for this feature as I found it as a really nice way to track & record big events without having to do a blog post every time.
With a bit of technical planning & building I was able to put together a simple JSON structure that would allow me to simply add a new object with simple data about the event to add it to my timeline page. Most of the heavy lifting of which is done by [Next.js's static site generation (SSG)](https://nextjs.org/blog/next-9-3#next-gen-static-site-generation-ssg-support).

<XButton href="/timeline" icon="feather:external-link" label="Go to Timeline" />

### :link: Referrals

---

A lot of companies now days offer a referral system. Everyone from big companies like Amazon & Tesla (Sadly they just ended it), to smaller startups like [FreeTrade](https://freetrade.io/) & [Klima](https://klima.com/).

With more & more companies offering referral rewards, what better place to share mine than on my personal website ¯\\\_(ツ)\_/¯

This page is built almost identically to my [timeline](/timeline) page whereby a JSON structure is used to store the data that is then compiled at build time into a static page.

![Screenshot of the referrals page](/blog/hello_world/referrals.png 'Screenshot of the referrals page')

<XButton href="/referrals" icon="feather:external-link" label="Go to Referrals" />


## Theme Refresh

---
Thankfully, there is now more variety in the default colors offered by Tailwind and one of them worked perfectly for the site, thus I didn't did to tinker **as much** with the tailwindcss file as normal. Awesome work on the parts of the dev team behind tailwind for adding the `zinc` color scheme. 


### :speaker: Sound

---

A fair few of the portfolio websites I looked at always had a nice touch of flair & one such touch I always found that I really liked was sound. Nothing crazy like playing music in background the whole time, but instead just subtle sound effects like button clicks, etc.

It's a small addition, built using [`use-sound`](https://github.com/joshwcomeau/use-sound), that adds some depth & makes the site feel much more interactive.

Currently the click sound is the only sound effect... For now. In the future I would like to experiment adding more sound effects to the site to continue expanding the feature. One such sound effect I have in mind I plan on looking into in the future is a envelope opening sound for when opening a blog post, or something similar? Not too sure yet but a nice idea I feel.

### :wheelchair: Accessibility

---

While always taken seriously in my work, especially in `web technologies`, there is always room for improvements in everything and when it comes to improving access to the internet for those who would otherwise be unable to access it, there is no reason I shouldn't really do whatever I can to make those improvements. 

So I spent some time researching and thinking about accessibility which yielded the following: 


#### Keyboard Navigation

---

Useful for accessibility purposes and in some Linux environments and alternative, vim-like browsers, being able to navigate using a mouse is not possible and so I opted to insure that all the elements on screen can easily be navigated to using the `<Tab>` key. 

In order to indicate the focused element, which is hard to do with the default browser included highlight ring if there is not plain text within the element, I have included focus rings like Discord uses that make the focused element visually striking and thus makes the site easier to use and more ergonomic. 
---

While not complete coverage, I aimed to offer complete or near complete keyboard navigation as it can aid with accesibility systems by ensuring that all items both can be navigated to at all, but also in the order you need.

![Focus ring switching between buttons](/blog/hello_world/keyboard_nav.gif 'Focus ring switching between buttons')

#### Reduced Motion

---
For those preferring less motion, a toggle for the background animations is provided in the settings menu accessed by pressing the `gear` icon in the upper right hand corner of the screen. This will stop the background animations and the transition animations that are used between page transitions. 

### Settings Dropdown 

---

Following from the reduced motion toggle mention above, the settings dropdown, which is always located in the top right of the screen, also contains toggle buttons (Both displaying an icon to represent the icon as well as a checked icon to represent its current state) for toggling between light & dark theme, as well as to toggle sound effects.

### Caveats

---

While I have tried to put in a good amount of time trying to add accessibility options & be as accomadating as possible, it is still not perfect.

Here are some ways I still want to eventually improve the accessibilty even further:

-   Reduced motion event listener updates settings `animations` state
-   Improve animated background performance by using `GPGPU` from [`ogl`](https://oframe.github.io/ogl/examples/)
-   Set theme back to using system theme instead of user override
-   Many more to come

I will always try to improve accessibility where possible. If you feel I am missing a key feature of accessibility, please reach out, let me know & educate me on its importance so I can try enforce its use in future & in other projects.

## The Result

---

And with all of that, we have the final result of what you are looking at right now!

![A screenshot of thomasleonhighbaugh.me](/blog/hello_world/screenshot.png 'A screenshot of thomasleonhighbaugh.me')

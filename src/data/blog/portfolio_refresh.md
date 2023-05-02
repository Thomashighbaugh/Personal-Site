---
banner_alt: "A banner announcing the portfolio site's redesign"
banner: /blog/portfolio/banner_portfolio.png
title_prefix:
title: Portfolio Refresh
description: "I have redesigned and updated my portfolio website, where this blog is hosted from. This post describes some of the new features and my motivation for this update."
date: '2023-01-30'
---

As a web developer, I have always been passionate about creating visually appealing and accessible websites. Recently, I have been thinking about redesigning my portfolio site to incorporate the latest web technologies and improve accessibility for all users. With the rapid advancements in web development, it's important to stay up-to-date with the latest trends and techniques. By leveraging the latest technologies like CSS Grid, CSS Flexbox, and responsive design, I can create a website that is not only visually stunning but also highly functional and accessible to all users, including those with disabilities. Ultimately, my goal is to create a website that showcases my skills and abilities while providing a seamless user experience for all visitors.

## Solution(s)

The solution is the site this blog post is being hosted on! Below I will discuss some of the new features I have included as well as my motivations in changing the design and means of visually navigating the site. 

### New Navigation Paradigm 

Most sites have a footer and header providing the navigation elements one needs to access the various pages or portions of the site. This works well when the pages content requires scrolling, but can get funky on a site that has an SVG graphic landing page as this oen does. So I have opted for another common alternative, using dropdown menus that are triggered by two buttons at either end of the header portion of the site. This provides a more neat experience visually, while enabling a more comprehensive navigation panel than including the links as header buttons. Additionally, this is a more responsive, mobile-first experience that eases the use of the site on mobile without fickle usage of breakpoints that can only target certain sized screens whereas this way the navigation experience is the same on any screen size. 

#### Footer Replacement 

The footer of most sites includes the links to various social platforms or other information provided by the author or company, however recently I wrote a site specifically to serve as a `link in bio` style social landing page in the vein of [Link Tree](https://linktr.ee/) but free and with additional capabilities as it is my code. Therefore a link in the navigation menu is sufficient to remove the need for the footer altogether. This further eliminates elements crowding the site's content while leveraging work I have already done, thus saving me time and energy I devoted to working on streamlining this site. 

#### Navigation Accessibility Improvements

Additionally, for those who are unable to use a mouse and require keyboard navigation options, I have enabled this on the buttons in the site. This simple accessibility improvement helps those unable to use a mouse and is a simple improvement added to the mouse component of the site that helps significantly improve their experience using the site.

The navigation improvement is triggered by the use of the <kbd>Tab</kbd> key and a highlight outline indicates what is in-focus in a different color than the elements outline. The user can then trigger the focused element with the <kbd>Enter</kbd> key. Testing still has to be done to make sure this works with keyboard focused browsers like [qutebrowser](https://qutebrowser.org/) and [luakit](https://luakit.github.io/) but works with standard browsers out-of-the-box (**recommendation**: Firefox users should turn on `caret browsing` in [about:preferences](about:preferences) to enable a similar functionality across the browser window).

------

### Added Elements of New Design Trends

In creating this site, I wanted to include some elements of the new design trends that I have come across and used in other projects. While neumorphism poses accessibility challenges, I have styled much of the site using the related design paradigm `glassmorphism` to give additional visual flare to the site's elements such as the menus and page content. This flare comes in the form of outlines around each menu and content box, as well as some transparency applied to each which I have carezfully insured did not impact the readablity of the content. 

#### New SVG Background 

Thanks to my discovery of [Pattern Monster](https://pattern.monster/), I have found a fresh SVG image to replace the one provided by [Hero Patterns](heropatterns.com/) that helps keep the design looking fresh and visually interesting. The `Pattern Monster` pattern provided came as an `SVG` file, which I copied into the site's `background:` CSS attribute in the same manner that the `Hero Patterns` option was, which took a little finesse but worked perfectly and even works well in both light and dark mode due to the added transparency. 

---

### GitHub's API 

I found using the GitHub API to query for personal and organizational repositories is a great way to showcase my coding projects on my portfolio website. With the GitHub API, I can access information about my repositories, such as their names, descriptions, and URLs, and display them in a visually appealing manner on my website. I can also customize the display of my repositories by adding filters, sorting options, and pagination. This API allows me to showcase my coding skills and experience in an efficient and organized way, while also giving visitors the ability to browse and interact with my projects. Overall, integrating the GitHub API into my portfolio website is a great way to showcase my coding prowess and demonstrate my commitment to my craft.

#### On Redesigning the Projects Section 

By leveraging the GitHub API, I am display real-time information about my latest projects and highlight the full range of my coding skills and experience. Visitors to my portfolio can view detailed information about each project, including its name, description, and repository link, giving them a clear understanding of my work and accomplishments. This approach also makes it easy to keep my portfolio up-to-date, as new projects are automatically added and removed as they are created or retired. Overall, redesigning the projects section of my portfolio to pull GitHub information and link to the repository is an effective way to showcase my software development skills and experience and impress potential employers and clients.


### Code Base Refactoring 

Reorganizing my portfolio website's code into a `src` directory containing subdirectories for components, data, layouts, lib, pages, and types can help clean up the top level of the repository and make it more organized and manageable. By separating my code into these distinct directories, I can better compartmentalize my codebase and make it easier to navigate and find specific files. The `components` directory can contain reusable React components, while the `data` directory can hold any data files or configurations needed by my application. The `layouts` directory can contain reusable layout components, and the `lib` directory can contain any utility functions or third-party libraries used by my application. The `pages` directory can hold my Next.js pages, and the `types` directory can contain any TypeScript type definitions used throughout the codebase. By adopting this organization, you can create a more modular and maintainable codebase, enabling easier collaboration with other developers and improving my overall productivity.
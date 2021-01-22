---
title: Styled Components
date: "2020-07-29"
subtitle: "Or How I Learned to Stop Fearing and Start Loving Internal Stylesheets"
banner: dots.jpg
alt_text: "Styled Components"
tags: [CSS]
promoted: false
---

After learning HTML and practicing with it for a few months, I happened to take a class
on it and CSS that really helped mold me as a web developer. One of the side effects
was having a certain set of best practices burned into my mind, in particular was
the standardc caution against internal stylesheets that I share with many developers.

After learning React, this academic prejudice still stuck and I instead expanded into
CSS pre-processors like SCSS and LESS to achieve my ever advancing needs in terms of styling
my websites. Then I used a template to build a Gatsby.js blog with Styled Components
and I decided that stripping them out would take too long and in the spirit of atomic
design thought it wouldn't hurt to try and...

### WOW I GET IT NOW

It is a powerful way to go and without a central stylesheet to muck things up it can be
very consistent in how it styles the site, at least if it is just you coding the site.

### Everything Has Its Time and Place

I am hardly stripping out all of my well nested SCSS stylesheets though. There is still a place for them in providing a
consistent platform upon which the component is styled on. However, I am going to look to incorporate more elements
of Atomic Design in my sites, including this one, as time goes on and it makes sense for the project before me.

It makes sense from the Atomic Design perspective to use Styled Components, they allow the
styling and component to be naturally grouped together. This is great so long as there is
some consistency sought by the dev but can be a challenge in teams.

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog], at least in spirit if not always in literal form!

Note that the changes listed below any date or range of dates reflect efforts from those days and not single commits, often these datum points represent work during a time frame on the project that generally span multiple commits as is my style of backing up my work on personal projects to mitigate disasters and need to rewrite the same code multiple times.

## [Unreleased]

- more banner images, including crossover with the Github Profile README.md's banner images
- additional projects, including the almost finished ISO project
- more blog posts

## 2021-08-03

Recovering from a severe illness that struck in the middle of my work on the site earlier last week, I am returning to finish up as much of the modifications to the site as possible as they have long been nagging at me in the background and this site if any project requires the optimal amount of my attention as it is the front end of my entire effort as a developer.

### Changed

### Deprecated

### Removed

### Fixed

### Added

- neovim blog post

---

## 2021-07-31

<!-- ### Added -->

### Changed

- merged dependabot and other automated dependency pull requests that cleared all tests.
- adjustment to speed of gallery component
- blog roll background for the articles to the more subtle light gray for the light variant (just noticed, I usually work with the dark version and dark modes generally)

### Deprecated

- Removing the about page, it seems unnecessary and a little ego centric to even have, but consigning it to deprecated for now to mull it over first

### Removed

- Whiny eslint plugin offering little helpful and complaining a lot.

### Fixed

- fixed banner display issues
- my tailwind config vanished somehow (I blame me not being careful cutting not copying it for use elsewhere) which obviously spurned a host of issues that once restored, absolved themselves
- slick gallery module css imports (awesome project, bad documentation) preventing index from loading the banner images.
  - CSS required loading from the index page itself to render the slick gallery (need to rewrite entire component myself if much more goes wrong for stability purposes)
  - now all images are showing, finally, and the kinks involving the component module are mostly ironed out though adjustments need to be made still.
- fix font on footer
- fix responsiveness
  - specifically make thinner screens have taller UI elements without increasing the width.
  - add additional padding/margin for thinner screens

### Security

- handled the insecure package alerts

---

## [0.0.1] - A While Ago

- This change log and the paradigm are themselves newer to my discipline as a developer than this site,
  - but I am not going to try to back date it or add in a bunch of semi-intelligable git commits as back filled changelog items.
  - Instead just recognize a lot has gone into this project prior to the beginning of this log but hence forth I am going to try to maintain this log to make continuing my work on this site a more informed and less spastic process.

<!-- Links -->

[keep a changelog]: https://keepachangelog.com/en/1.0.0/

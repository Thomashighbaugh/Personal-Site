---
title: Personal Knowledge Wiki
date: '2019-11-03'
description: My notes on all things tech related, featuring custom CSS.
tags:
---

### Even better than a devlog

## Problem

Keeping notes in order is hard enough, especially without VCS and learning a new markup language to create a wiki seemed like an unnecessary tangent for me at this time.

I had settled on the wiki format because it enables one to link between notes, creating a sort of web of notes and interrelated ideas that would better reflect my growing knowledge than a directory full of markdown files or an org-mode list of such.

## Solution

I am fortunate that someone else has addressed most of these needs, as the Gollum project exists. It renders a wiki from source files in various markup languages much like emacs renders org-mode, in fact it even supports org-mode which has become my favorite mark-up for notes due to its capacity for nesting and robust feature set.

## Notes on Source Code

- **A SERIES OF FILES** - this project does not feaure any original code by me other than my custom css stylesheet that styles the site as it is hosted on my local machine. It is instead a **series of org-mode files containing my notes on various things I am learning, tutorials I am working through and associated thoughts**.
- **GOLLUM PORTABLE** In order to host the site locally, with automatic commits for each file change, I have opted to use the variant of Gollum called Gollum Portable. It comes with a Dockerfile and setup script that create a container hosting the wiki locally using the `docker-compose` command.
- **VCS** - Using Gollum enables me to save all of the files in my notes in a single Git repo that is quickly reporducible if on a new system and with the power of Git, I have access to file histories in case some notes that I delete turn out to be useful later!.

## TODO List

- [ ] rewrite Dockerfile to use Arch Linux instead of Ubuntu as the base OS

## Links

<button style="width:50%" class="nav-btn"><a href="https://github.com/Thomashighbaugh/Personal-Knowledge-Wiki">GitHub</a></button>

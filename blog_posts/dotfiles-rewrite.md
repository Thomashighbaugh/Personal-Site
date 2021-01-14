---
title: Dotfiles
author: Thomas Leon Highbaugh
date: "2020-01-03"
subtitle: A general guide for using git to backup files, especially dotfiles.
alt_text: "git"
banner: gitx.png
tags: [Dotfiles, Git]
---

# Dotfiles 

Nothing have I rewritten from scratch more times than my dotfiles. Generally the causis belli of such an arduous task is because I am modifying my overall color scheme or changing how I set them up on my system. I somewhat enjoy the former but the later is migraine inducing just to consider. Nonetheless, I recently found a repository that used loops in the z-shell configuration at the same time I was considering using bash scripts for the installation and provisioning processes and next thing I knew I was neck deep in another rewrite of my all encompassing and important dotfiles. 

## Dotfiles Are Meant to be Modular
Forget Holman, don't just fork my dotfiles repo for your own sake, those configurations are highly specific to me and crafted according to my rather uncommon taste that you will probably hate. Though Holman was right in suggesting we should share our dotfiles, but when you are using *[insert dotfiles management software or paradigm]* they are rather hard to break apart and try incorporating within your environment. This is especially true of window manager configurations where there are scripts referenced from outside that specific subdirectory of `.config` (or where ever the configuration file is symlinked to within your `home` directory). 

Instead of ignoring this annoyance I can't hope to change in the many dotfiles repos scattered about Github, I have taken it upon myself to be the change I want to see in the world and begun writing my configurations in as modular a format as I possibly can. This is not to say I am done with this process nor that it won't probably change several hundred times, just that I am trying to make them easy for you to pull out the pieces you want and drop them into your local environment to check them out or what have you. 

## No Submodules Zone
Detached Heads suck and they ruin the use case of submodules for me in keeping my larger configuration subdirectories out of my main dotfiles repo. My AwesomeWM configuration is 50 extra files that are honestly better off in their own repo and I don't want to reattach the head to the repo each time I change some minor setting in that configuration. That is a pain, the whole point is to reduce those not double them. 

Instead I have opted to `git clone` the separate repos that are part of my dotfiles but fitting of their own repository instead of the submodules disaster that has already cost me precious work after a reinstall. I wrote up a quick little update script that's in the project's root directory that goes through each of these repositories where they were cloned to on the system and goes through the `git add .`, `git commit` and `git push` cycle thus reducing the amount of places I have to remember to do that in. Sure it means a more limited set of commit messages than I would prefer but that's a price I am more than willing to pay to avoid forgetting some critical upload as I am preparing to reinstall my OS again. 

## So Long Makefile

For about a year, I was a fan of using Makefile for the provisioning of my systems, including linking in my dotfiles, however I came to scrap that entirely in the last rewrite of my dotfiles for a simple reason, I discovered BASH functions. With these nuggets of syntax goodness I probably should have already noticed would work for such a task, I don't need to fight with another syntax (Makefile's) or read anymore of what GNU thinks is passable as documentation. I use the conceptual and functional blocks of the BASH function to isolate each relevant program I want to install or provision on my system that are run individually from within another function specific to the system I am provisioning. I even included a BASH menu to select which system the user is provisioning which is far in excess of what Makefile considers `user experience`. Even if it is just for me, I also like decent interfaces and am no where near the level of the `emacs as a window manager` crowd at this time. 

## Looping Structures 

I have long known about looping and employed loops for all sorts of tasks in a variety of languages, including the installation script's menu, but for some reason never thought to include them in my shell configuration. Were my system slower, I could see why I would avoid them as they seem to slow things down a bit at shell startup but offer a lot of room to change things without needing to adjust several scripts or have the dreaded monolithic nightmare file of thousands of lines so easy to get lost in. 

Adding loops to my z shell and general shell configurations means I can have a directory full of aliases, for example, and within it files specific to the aliases, which then means if I want to add a new alias all I have to do is add a new file. No need to modify my `.profile` or `.aliases` file to include the new file because the loop will handle that when the shell starts. 
---
banner_alt: Void Linux Logo
banner: /blog/brave_on_void/void.png
title_prefix: Guide To
title: Installing Brave Browser on Void Linux
description: An inductive discussion about the means of accessing out-of-repo packages on Void Linux
date: '2021-12-28'
---
> Note: This is a cross post with a response I made to someone on the Void Linux subreddit who was looking for a way to install Brave Browser on Void. I installed it, as stated below, to verify 2/3 methods were functional personally, then wrote this up after the discussion had died as a means of providing help to those who at some later date find themselves scouring the internet looking for an answer to this same question. See it as a gist [here](https://gist.github.com/Thomashighbaugh/ffee6596b04f6236c44caac625c88c11).

## Installing Brave Browser on Void Linux

For anyone curious in the future:

Yes, you can relatively easily install brave browser on void linux, if that is somehow a non-negotiable for you fear not. There are three methods that I am aware of:

1. Add [this template file](https://notabug.org/reback00/void-goodies/src/master/srcpkgs/brave-bin) to your fork of `void-packages` locally and build the `./xbps-src` package like any other.

2. Use flatpak, which I need not explain since instructions are on the flathub listing itself. (Note: will be isolated from the system which can be a bit of a pain, especially using things like keepassxc)

3. using the utility script `xdeb` [located here](https://github.com/toluschr/xdeb) to convert the `.deb` of Brave [found here](https://github.com/brave/brave-browser/releases) to a `xbps` package which the utility spits out a command for you to copy-paste to install it.

I have tried both 2&3 personally, tested the browser functions and then uninstalled it as I have 0 desire to use it for anything (and it looks awful with my GTK theme) due to using a heavily modified (CSS & JS) Firefox.

---

### Why It Will Not Be in the XBPS Repos Anytime Soon

The developers are somewhat hostile to using build-server infrastructure to build any additional forks of Chromium or Firefox, as well as generally citing more variable reasons with the former ranging from patched code to the difficulty of packaging a browser and followed by warnings to those who would maintain (and cross compile) the thing.

These reasons are rather good, and we are ever so thankful for their efforts with maintaining the madhouse that is the repos after all. What they fail to mention is the above three alternatives maybe because its not recommended by them (I wouldn't know) or maybe because they don't know these are options.

Whatever the case may indeed be, even with some dramatic musical chairs going on at the center of `void-linux` this policy has been stable, and unless significant changes occur involving the costs of build-server time or the Frankenstein's monsters that modern browsers are under-the-hood, don't expect any changes on this front and please spare them the unneeded issues raised (or comments posted) on the `void-packages` Github repo, after all we don't want them getting discouraged providing us such a wonderful service out of the kindness of their hearts as is now the case.

---

Just thought I would leave a clear and helpful blurb up for the community.
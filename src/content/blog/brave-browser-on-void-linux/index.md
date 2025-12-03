---
title: "Installing Brave Browser on Void Linux"
description: "A comprehensive guide to installing Brave browser on Void Linux using three different methods: building from source, Flatpak, and xdeb utility."
summary: "Learn how to install Brave browser on Void Linux through three proven methods: building from source, using Flatpak, or converting .deb packages with xdeb utility."
date: "Dec 28 2021"
draft: false
tags:
- Linux
- Void Linux
- Brave Browser
- Package Management
---
# Installing Brave Browser on Void Linux: A Guide

![Void Linux logo](./void.png "Void Linux operating system logo")

For those diving into the exciting world of Void Linux and craving the Brave browser experience, you're in luck. While Void Linux might not have Brave in its official repositories, there are a few methods you can employ to bring Brave into your Void Linux environment. In this article, we'll explore these methods and provide you with valuable insights into why Brave might not make its way into the official XBPS repositories anytime soon.

## Three Ways to Get Brave on Void Linux

### Method 1: Build from Source

One of the primary ways to install Brave on Void Linux is by building it from source. Here's how you can do it:

1. Start by adding [this template file](https://notabug.org/reback00/void-goodies/src/master/srcpkgs/brave-bin) to your fork of `void-packages` locally.

2. Build the `xbps-src` package just like you would with any other package. This method gives you control over the build process and allows you to customize it to your liking.

### Method 2: Using Flatpak

Flatpak provides another avenue to install Brave. Instructions can be found directly on the [Flathub listing](https://flathub.org/apps/details/com.brave.Browser). However, be aware that using Flatpak will isolate Brave from your system, which might lead to some inconveniences when using certain system-integrated tools like KeePassXC.

### Method 3: xdeb Utility

The third method involves the use of the `xdeb` utility, available [here](https://github.com/toluschr/xdeb). This nifty tool lets you convert the `.deb` package of Brave, found on their [official GitHub releases page](https://github.com/brave/brave-browser/releases), into an `xbps` package.

Using `xdeb` is a breeze. Simply follow the provided instructions, and the utility will generate a command for you to copy-paste and install Brave. It's a quick and straightforward solution if you prefer convenience over building from source.

I personally tested methods 2 and 3, ensuring the browser functions correctly before moving on. However, my preferences led me back to my heavily customized Firefox, thanks to CSS and JavaScript modifications.

## Why Brave Won't Be in XBPS Repos Anytime Soon

While it would be convenient to have Brave readily available in the XBPS repositories, there are a few significant reasons why it's not likely to happen soon.

1. **Hostility to Building Additional Forks:** The developers behind Void Linux express reluctance when it comes to using build-server infrastructure to create additional forks of Chromium or Firefox. They cite issues like patched code and the complexity of packaging a browser. This position is understandable, given the complexities involved.

2. **Stable Policy:** Despite some shifts in the Void Linux landscape, this policy remains stable. Unless there are substantial changes concerning the costs of build-server time or the intricate nature of modern web browsers, we shouldn't expect any shifts in this stance.

3. **Alternatives Exist:** The three methods we've explored here are viable options for obtaining Brave, even if they aren't officially endorsed by Void Linux. While the developers may not officially recommend these alternatives, they are indeed options for users who want Brave on Void Linux.

In conclusion, while we might wish for Brave to be readily available in the XBPS repositories, it's crucial to appreciate the hard work and dedication of the developers behind Void Linux. They provide us with an outstanding service out of the kindness of their hearts, and we shouldn't deter them with unnecessary issues or comments on the `void-packages` GitHub repo.

This article aims to offer clarity and guidance for the Void Linux community, making it easier for users to access Brave while respecting the principles and practices of the Void Linux ecosystem.

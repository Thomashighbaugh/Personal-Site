---
title: Decommissioner
date: '2019-07-05'
description: BASH-Inception. A script for Ubuntu-based systems that generates installation scripts based on a system's currently installed packages and PPAs.
tags: bash, linux,
---

### BASH-inception
<button className="nav-btn  ml-2">
   <a href="https://github.com/Thomashighbaugh/decommisioner">
   [github]
   </a>
</button>
<button className="nav-btn ml-2">
 <a href="https://decommisioner.netlify.com/">
   [hosted]
   </a>
</button>

## Problem 
In order to reinstall systems after something happens to them, I found it hard to replicate the exqct same configuration as I had before. Remembering all the package names was impossible and simply having a list of them made for a tedious provisioning process. 

## Solution 
This script takes the package names of the installed packages, then appends the installation command to the front of them and creates an installation script for all of the 
PPAs installed on the system. 

## Notes on the Source Code
- **UBUNTU BASED** - this script works on Ubuntu and its variants that use the apt package manager, which is the command appened to the package names. 
- **PPAs** - It creates a script based on the current system that enables the rapid reinstallation of the PPAs the system was using to pull in packages 
that the official PPAs do not offer. 
- **EASY** - this script makes copying one configuration to another a seamless process. 

## To Do

- [x] create a landing page
- [ ] create Pacman variant 

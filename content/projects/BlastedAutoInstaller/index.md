---
title: Blasted-Auto-Installer
date: "2019-08-05"
description: Scripts that I use to quickly provision my systems after fresh installs
image: "../../assets/Opitx.png"
tags: bash, linux, shell-scripting
---
### Scripts for Quick Provisioning of a Fresh Install

## Problem 
I reinstall my OS somewhat often, due to my tinkering with its internals. While this has engendered in me the natural inclination to back everything up several times, and other great habits, it means reinstalling programs became a real nightmare. I could use Ansible, but my workstation isn't something I am going to remotely provision from another PC, considering any such provisioning would be from that computer and spending money on a digital ocean ansible host is not possible at the moment, nor is running another PC simply for this purpose. Enter Blasted Auto Installer. 

## Solution 
The scripts contained in the git repo all provision specific things that I often use. Each of them perform a different task, ennumerated below, and can all be called individually or from a central script that asks the user if they want to install the script and takes the command from the keypress, no enter required (which is easier than Ansible for these purposes let's be real)

Scripts and description thereof 
- black - installs the Black Arch Repo and All Programs (if you need them all)
- manjaro - central script that will call the others
- pacman - uses pacman package manager to install files (--noconfirm means no additional input should be needed unless I missed that flag on a package)
- gedit - provisions Gedit's settings 
- dots - calls in my dotfiles and installs them in the home directory
- github = packages pulled in from Github with automation of the next steps 
- spacemacs - installs spacemacs over emacs and starts it for initial configuration
- install-snap - the reason I am using Manjaro over Arch 
- nvm - for installing the node version manager 
- yay - using YAY, available through the manjaro repos, this installs AUR packages 

## To Do 

- [ ] add zenity gui for manjaro
- [ ] create templates script 
- [ ] cleanup the repo
- [ ] zsh/powerlevel10k script 
- [ ] add script for installing EvoPopDark

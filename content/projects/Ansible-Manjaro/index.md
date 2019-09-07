---
title: Manjaro Workstation Ansible Playbook
date: '2019-08-20'
description: A playbook for provisioning my workstation that was written as a response to increasing frustrations with the other solutions.
tags: bash, linux, shell-scripting
---

### And the Value of Structured Examples

Initially I was resistant to using **Ansible** to provision anything other than virtual
systems I use for development purposes, as I was under the impression there was need for
a central server (what my workstation or the hypervisor system work as) and I had not
seen great examples of well structured **Ansible** playbooks from watching and reading the
jargon heavy, cringe-worthy documentation available for the project. While my frustrations
with the documentation is likely to become a blog post soon, it is worth noting here that
I value well structured projects to a point I had not realized before having a word for the
concept of neaty organizing, topical directories. In frustration with an attempt to make a
GUI for the Blasted Auto Installer, I looked up **Ansible** playbooks for pacman-based systems and
found an example that has changed my opinion about using **Ansible** completely.

The Spark playbook, unrelated to **Ansible** Spark, structured itself in a way that was similar to
the approach I have recently started taking with SASS and React, where each role is separated
into its own directory. This is in opposition to a monolithic role file or set of haphazardly
arranged role files that were part of my prior confusion. Having some experience with **Ansible**
from before, I used it as the basis for writing a playbook to provision my workstation and am
corrected in my dismissal of deploying **Ansible** for that purpose. Instead of being an unnecessary
pain to deploy in the context of a single machine and requiring a server (which when I
read the docs lasted seemed imperative), I was able to set the target machine to the
localhost! While the reader may be thinking, "Well DUH!" this was not inherently obvious to
me before and since my knowledge of all things tech has been rapidly expanding recently, I
won't be too hard on myself. Nonetheless, I now have an even more automated way to provision
my workstation that also features modular components, allowing for the creation of new playbooks
rapidly without re-writing code.

### Modularization is Key

The value of modularizing the components of a project like a Playbook may be less obvious
due to the extremely helpful error codes **Ansible** offers the user, but this is an
exceptionally rare feature in my other efforts. By comparison, the most helpful Webpack
wrapper I have used, Gatsby, does not have nearly as reliable or helpful error codes
_and it is the most helpful I have seen!_ When writing code that can be segmented as this Playbook, I like
writing it accordingly because it makes for a less frustrating debug process regardless of error codes.

The other aspect of modular source code that draws me to using that paradigm almost exclusively,
if possible, is that I can assess the entire function occuring in that file more easily if I am
not first forced to scroll through some massive file to find what I need. While for some scrolling
through a directory with a lot of files may be harder, I find myself distracted by all the other
things I have to fix if I am scrolling through code and do not have that issue when that code
is not in front of me. Or in the words of many,

> > > Out of sight, out of mind

## To Do

-[ ] Create extension to wrap the `sudo aura -Ax` command (used to install AUR packages without needing an AUR user or other work around for YAY not running for root) -[ ] refine deployment of Firejail to wrap less programs -[ ] add firejail wrapper to virt-manager -[ ] debug using fresh installs -[ ] create more elegant wrapper for dotbro (dotfile manager) -[ ] make branchs for my laptop, server and hypervisor systems

---
title: Manjaro Ansible Playbooks
date: '2019-08-20'
description: A playbook for provisioning my workstation that was written as a response to increasing frustrations with the other solutions.
tags: bash, linux, shell-scripting
---
### Unattended Provisioning for Any System

## Problem
The BASH scripts that I had used, as well as the colt45 GUI, are no longer 
useful as I have switched from Ubuntu to Manjaro and they use radically 
different package management systems. Thus I took the oppurtunity to explore 
using Ansible to provision my systems instead. 

## What is Ansible?
Ansible is a CLI application that takes scripts, or sets there of called `playbooks`, and
uses them to provision systems based on the `plays` contained there within. 
These `playbooks` are written in YAML format, which makes reading and writing
them relatively easy to do and there is a bounty of documentation available about the various 
`plays` that come with Ansible. 

Essentially it enables one to write provisioning scripts that can be run from 
remote machines, or `hosts`, on any number of systems. Ansible also installs
and provisions on top of the system running so there is no threat to a current
system inherent in running these `plays`. 

## Notes on Source Code
- **MULTIPLE VARIANTS** There are several variants of these playbooks, which reflect the machines
they were used on. While the definition of `roles` within the playbook would
have enabled their consolidation into a single playbook, I found this method
the easiest way to properly segregate the configurations in a reliable way. 

- **NESTING** Like many projects I undertake, I prefer heavily nesting the components within 
subdirectories as a means of keeping track of things and to make a return to the 
project later less daunting as I find this an easy way to understand the internal
structure of a project. 

- **DEPRECIATED** I have since moved on from using Ansible to using Makefile to provision my 
systems, thus I no longer maintain these playbooks other than as a testament 
to my ability with this technology.

<button className="nav-btn  ml-2">
   <a href="https://github.com/Thomashighbaugh/manjaro-workstation-playbook">
   [workstation]
   </a>
</button>
<button className="nav-btn ml-2">
   <a href="https://github.com/Thomashighbaugh/manjaro-hypervisor-playbook">
   [hypervisor]
   </a>
</button>

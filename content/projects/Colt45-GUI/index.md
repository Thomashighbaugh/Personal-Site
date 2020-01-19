---
title: Colt-45-GUI
date: '2019-08-05'
description: A GUI application installer for Ubuntu based distros
tags: bash, linux, shell-scripting
---

### System Provisioning Fast!

## Problem
This application and Blasted-Auto-Installer both answer for a similar need. The Colt45 
application answers the multi-pronged needs of installing applications on a system  
that has Ubuntu installed on it. Before I switched to using pacman based systems,  
I became frustrated with the many steps that setting up my Ubuntu workstations  
took and, as in the case of the Blasted Auto Installer, I found Ansible to be  
overkill. So I made some install scripts that evolved into this form. 

## Solution & Features

The program is a lot less targeted than the Blasted Auto Installer, as it is 
intended to be useful to a broader audience and takes the place of the program 
installer than some distros come with. It adds PPA packages when necessary and 
uses a rather complicated system of looping through the users selection to achieve 
the desired installation script. It also includes SNAP package support, which it 
manages to do all of while presenting a single menu with radio boxes that the user 
may select.

#### Zenity GUI

The application uses Zenity to render the GUI screen presented to the user. This makes 
for a relatively "quick and dirty" UI that wasn't heavily modified due to the nature 
of its use cases making excessive design a cumbersome and unneeded process. The use 
of Zenity as the basis was perfect for my needs in writing it, however developing the 
program in Python would have probably made it a little more stylish and still able to 
affect as much on a Linux system.

## Deprecation

This program is no longer actively maintained, due to my using other OSes at the moment. If I go back to Ubuntu Budgie, it is useful to have around however the reason it is offered here in my portfolio is due to its relatively interesting internal structure, demonstrating competence with Linux and because it will likely be used as the shell for the rewrite of the Blasted Auto Installer in the near future.


<button className="nav-btn  ml-2">
   <a href="https://github.com/Thomashighbaugh/colt45gui">
   [github]
   </a>
</button>
<button className="nav-btn ml-2">
 <a href="https://colt45gui.netlify.com/">
   [hosted]
   </a>
</button>

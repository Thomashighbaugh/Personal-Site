---
title: Decommissioner
date: '2019-07-05'
description: BASH-Inception. A script for Ubuntu-based systems that generates installation scripts based on a system's currently installed packages and PPAs.
tags: bash, linux,
---
# Decommisioner 
### BASH-inception

## The Answer to Package Installation on Virtual Systems 

When provisioning virtual systems, it is often the case that there will be a precise set of packages you wish to install on that virtual system to achieve whatever task it is you are using the system for. Remembering a long list of packages is often rather hard, especially when your primary focus is that task that you are doing with those virtual systems. While Docker images are a possible way around this dilemma, there are times when containers are simply not enough and you need the entire virtualized system, which is why I wrote this script. 

### Other Use Cases
This script is also useful in the situation where I want to install the precise packages that are currently installed on my OS that include some not reflected in my auto-installation programs (or in an Ansible playlist if that is your thing). 

It can also be useful when you achieve that perfect workstation configuration and want a back up for later installation. 

##### And A Whole Lot More!

## What It Does
**Process**
##### Ubuntu 
- make-script.sh 
	- creates a bash script to reinstall the PPAs installed 
	- creates a text file with the names of the installed packages (called the manifest)
	- creates an array of the names of those packages stripped of extra information (using regular expressions)
	- creates a file (with a proper shebang) to add package install dialog to
	- adds each package name to a line starting with "sudo apt-get install -y"
	- creates a file with both the PPAs and Packages on them for a single install scripts 
	- moves the generated install scripts and manifest to a new directory 
	- creates a tarball out of the directory
	- cleans up

## Built With 
This project was built with just BASH scripts and was a short detour into understanding more about Regular Expressions. Being motivated by a desire to simplify a process, which is of particular frustration due to the nebulous nature of Ubuntu (my primary OS when I wrote this originally), there was no GUI generated or even CLI echo statements. 

## Landing Page
The landing page is an early example of me using effects in SCSS, which at the time it was written I was only beginning to dabble in the use of, it is not an interactive or featureful site but serves the purpose of giving the project some web presence and as a playground served its function. 

## To Do 
[x] create a landing page 
[ ] create echo statements enabling determination of where in the process the script is or failed
[ ] create a GUI to confirm the process and output to the user where the scripts where saved

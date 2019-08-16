---
title: Opitx
date: "2019-08-01"
description: Opitx is a minimal markdown editor that I made so I could save my files where I want to on my local directory. The first effort I have made that employs Electron as well as being the second major React project.
tags: electron, react, markdown, desktop, packaging, webpack, prismjs
---
# Opitx
### Minimal Markdown Editor
![Screenshot of Opening Page of Opitx](https://raw.githubusercontent.com/Thomashighbaugh/Opitx/master/Opitx.png)
## Problem
None of the Markdown Editors had save functions that were simple like other word processors or the text editor that comes with your OS. Most options either save in some database format, which can lead to being left with a mess of backups with random strings as the file names. 

## Solution 
An Electron application that uses the system standard menu options, the power of React to create the interface and Prismjs for syntax highlightings and creating the live preview mode. 

### Packages Generated 
To install and use Opitx, which I warn you is still a work in progress but does its primary objective possible, I have packaged it in RPM DEB and APPIMAGE formats. Download the one you want from the Github Repo and BAM!

## To Do
The application is not getting the attention I would prefer due to my time being consumed elsewhere, however it is going to receive some major renovations soon. They include:

- [ ] Theme switcher allowing users to change primsjs theme on the editor tab
- [ ] Better ReadME
- [ ] Fixed Menu
- [ ] Open from last file used feature
- [ ] Keybindings 
- [ ] Refreshed visuals 

## Documentation Site && Repository 
To see the documentation for the program see:    <button className="nav-btn  ml-2">
                                                                                          <a href="https://opitx-docs.netlify.com">
                                                                                              [ opitx docs]
                                                                                          </a>
                                                                                      </button>
 
 See the source code on   <button className="nav-btn   ml-2">
                                                                    <a href="https://github.com/Thomashighbaugh/Opitx">
                                                                        [github]
                                                                    </a>
                                                                </button>

---
banner: /blog/git/octocat.png
banner_alt: The octocat in education apparel
title: Get the Git
description: >-
  A quick, down and dirty introduction to the Git version control system and its
  usage within thecontext of Github
date: '2019-09-05'
---
# Get the Git

Whether you're a Linux enthusiast safeguarding your precious dotfiles or simply seeking an efficient way to back up your data, you'll find Git to be a versatile and developer-friendly solution. This tutorial will guide you through the process of using Git to secure your configurations efficiently.

> **Note**: Before we embark on this journey, ensure you have Git installed. For Linux users, Git installation varies by package manager, so consult your distro's documentation. As for Windows and Mac users, the installation process can be easily found through a quick online search.

## Step 1: Get an Account

First things first, you'll need a Git storage provider. There are several free options, each with its pros and cons. For this tutorial, let's assume you're going with the crowd favorite: GitHub. It's user-friendly and widely adopted, and you'll often spot the Octocat logo.

## Step 2: Initialize Your Git Repository

If you haven't set up a Git repository for your project directory or any subdirectories yet, don't worry; it's simple. Just navigate to your project directory and run:

```bash
git init
```

This command initializes a new Git repository in your current directory.

## Step 3: Add Files to Git

Adding your files to the Git repository is a crucial step. For simple dotfile storage, this might seem a bit peculiar, but it'll become clear if you use Git for more extensive version control. To add your files, you can choose one of the following methods:

- For individual files:
  ```bash
  git add <filename>
  ```

- For everything in the current directory:
  ```bash
  git add .
  ```

## Step 4: Commit Your Changes

Committing your changes is Git's way of making your modifications public. A commit message is required, and while it might seem arbitrary, it's essential to provide a concise and descriptive message.

- With a message in the command:
  ```bash
  git commit -m 'Your descriptive message'
  ```

- Providing a message using your text editor:
  ```bash
  git commit
  ```

## Step 5: Add a Remote

This step is pivotal because it establishes the connection between your local repository and your GitHub account. Without this, all your previous efforts would be in vain.

1. Create a new repository on GitHub (click the plus symbol in the top right).
2. Follow the fourth command in the list provided (ignore the part about the README; we've got that covered).

```bash
git remote add origin <url provided>
```

## Step 6: The Grand Finale - Pushing Your Changes

"Pushing" your changes might sound cryptic, but it merely means uploading your changes to the specified remote repository. This is the last step in building your Git backup.

```bash
git push
```

You may be asked for your GitHub username and password.

## Downloading the Repository on Another System

You've successfully backed up your configurations. Now, let's explore how to use these configurations on another system.

**It's remarkably simple:**

```bash
git clone https://github.com/<YourUserName>/<YourRepoName>
```

## Embrace the Simplicity

Git can be a rabbit hole of jargon and complex commands, but it doesn't have to be. The key takeaway here is this: **don't get bogged down by the jargon** and **Git isn't that complicated** once you bypass the esoteric language.

In the world of development, clarity and simplicity often trump convoluted explanations. So remember, with Git, your backup process can be straightforward and efficient. Happy coding! 🚀

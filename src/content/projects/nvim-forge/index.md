---
title: "Nvim-Forge: My Neovim Setup That Actually Works"
summary: "A seriously customized Neovim configuration that I've been tweaking and perfecting for years. Built in Lua with all the modern development tools you'd want in an IDE, but still fast and keyboard-driven like Vim should be."
date: "Nov 14 2024"
draft: false
tags:
  - Neovim
  - Lua
  - Development Environment
  - Text Editor
  - IDE
  - Tooling
repoUrl: https://github.com/Thomashighbaugh/nvim-forge
---

I've been working on this Neovim configuration for way longer than I probably should admit. It started as a simple attempt to replace VS Code, but somehow turned into this comprehensive development environment that I can't imagine coding without anymore.

## What Makes This Different

**Everything's in Lua**: I got tired of fighting with Vimscript, so this whole thing is built using Neovim's native Lua API. It's faster, more readable, and honestly just makes more sense if you're coming from a programming background.

**Lazy Loading Everything**: Uses `lazy.nvim` to make sure plugins only load when you actually need them. My startup time is under 50ms, which is pretty satisfying when you're used to waiting for VS Code to boot up.

**Language Support That Actually Works**: LSP integration for pretty much every language I use - JavaScript, TypeScript, Python, Rust, Go, you name it. Code completion, diagnostics, go-to-definition, refactoring - all the IDE stuff you'd expect, but without the bloat.

## The Tools I Actually Use Daily

**Fuzzy Finding with Telescope**: This is probably the feature I use most. Finding files, searching code, browsing Git history - it's all lightning fast with fuzzy matching that usually finds what I want with just a few keystrokes.

**Treesitter for Smart Highlighting**: Way better than regex-based syntax highlighting. It actually understands the structure of your code, so you get better colors, smarter text objects, and selection that works with code blocks.

**Git Integration**: Shows changed lines in the gutter, blame annotations, diff view, conflict resolution - basically everything you need without switching to a separate Git GUI.

## The Workflow Stuff

**Terminal Integration**: Built-in terminal that I can toggle with a keypress. No more switching between windows to run commands or tests.

**Debugging Support**: Debug Adapter Protocol support means I can set breakpoints, step through code, and inspect variables right in the editor. Works with most languages through their respective debug adapters.

**Snippet System**: Tons of snippets for boilerplate code that I got tired of typing over and over. They're smart too - they adapt based on the file type and context.

## Why I Bothered Building This

Look, there are plenty of pre-made Neovim configs out there. But I kept running into little annoyances and missing features with the existing ones. So I started with a basic setup and just kept adding things as I needed them.

The result is something that feels exactly how I want to code. Every keybinding makes sense to me, every plugin serves a purpose, and nothing gets in my way when I'm trying to focus.

**Custom Keybindings**: I've organized everything around leader keys that make sense - `,f` for finding files, `,g` for Git operations, `,l` for LSP actions. It's all designed to minimize the mental overhead of remembering random key combinations.

**File Management**: Both tree-style file browser and oil.nvim for when I want to edit directories like buffers. Different tools for different tasks.

**Status Line**: Shows everything I need to know at a glance - Git branch, LSP status, file encoding, line endings, diagnostics count. But it's not cluttered with stuff I don't care about.

## The Languages I Actually Code In

The config includes specific setups for all the languages I work with regularly:

- **Web Development**: JavaScript, TypeScript, React, Vue, HTML, CSS, Tailwind
- **Systems Programming**: Rust, C, C++
- **Backend**: Python, Go, Node.js
- **JVM**: Java, Kotlin (because sometimes you have to)
- **Markup**: Markdown, LaTeX, various config formats

Each language gets its own formatter, linter, LSP server, and debugging setup. It's all configured to work together seamlessly.

## Performance Obsession

I spent way too much time optimizing startup and runtime performance. The whole thing loads in milliseconds, and operations like file searching, code completion, and syntax highlighting are all snappy. Because if your editor is slow, everything else feels slow.

The lazy loading is pretty aggressive - plugins only activate when you actually need them. So if you're just editing a simple text file, most of the IDE features stay dormant.

This isn't just a config dump - it's the result of years of daily use and constant tweaking. Every feature exists because I actually use it, and every keybinding has been optimized through muscle memory.

If you're looking to try it out, the README has installation instructions. But honestly, you'll probably want to fork it and make it your own. That's kind of the whole point of having a personalized development environment.

**Repository**: [github.com/Thomashighbaugh/nvim-forge](https://github.com/Thomashighbaugh/nvim-forge)

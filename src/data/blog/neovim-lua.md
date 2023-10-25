---
image: /blog/neovim/neovim.png
title: NeoVim Bleeding Edge Installation
description: A guide for how to set up NeoVim with all of its really awesome new features, like Lua configuration that makes NeoVim much faster and true rival to an IDE.
date: 2021-07-04
---

NOTE: I now use NixOS, which makes very little easy but it at the very least makes this process as simple as installing NeoVim, but for many distros this is still not true, so this may still help you.

# Mastering NeoVim: Get the Latest Git Version

NeoVim, a beloved choice among developers, offers a powerful and customizable environment for coding. If you're keen on using Lua as your configuration language, you'll need to install the bleeding-edge version of NeoVim. This guide walks you through the process, ensuring you're up to date with the latest features and improvements.

**Installing NeoVim from Git**

To get started, follow these simple steps:

```bash
$ git clone https://github.com/neovim/neovim

$ cd neovim

$ sudo make CMAKE_BUILD_TYPE=Release install
```

Now, it's time for some clean-up:

```bash
$ cd ..

$ rm -rf neovim
```

Alternatively, you can make life even easier by using my installation script:

```bash
bash <(curl -s https://raw.githubusercontent.com/Thomashighbaugh/nvim/main/bin/install-latest-neovim.sh)
```

## Handling Dependencies

NeoVim has dependencies that vary based on the programming language you work with. Ensure you install the required dependencies locally before running NeoVim.

For Python 3, use:

```bash
pip install neovim pynvim --user
```

For Python 2, try:

```bash
pip2 install neovim pynvim --user
```

If you're into Ruby, install it with:

```bash
gem install neovim
```

For Node.js enthusiasts, use either of these:

```bash
npm i -g neovim
# Or
yarn global add neovim
```

## Configuring Your NeoVim

To harness the full power of NeoVim's Lua-based configuration, you'll need to create an `init.lua` file in your configuration directory, typically found at `$HOME/.config/nvim`. Consider adding a `lua` subdirectory for storing additional files, especially if you plan to use Packer, the package manager of choice for NeoVim.

## Explore Prebuilt Configurations

There are several prebuilt configurations available in the NeoVim community, making it easy to kickstart your coding journey. Here are some Lua-centric examples to explore:

- [NvChad](https://github.com/siduck76/NvChad): A sleek setup with frequent updates.
- [LunarVim](https://github.com/LunarVim/LunarVim): A Lua-based setup with a classic directory structure.
- [Doom-Nvim](https://github.com/NTBBloodbath/doom-nvim): A port of the Doom-Emacs framework to NeoVim.
- [nv-ide](https://github.com/crivotz/nv-ide): Ideal for language server protocols (LSPs).
- [VaporVim](https://github.com/hackorum/VapourNvim): A robust configuration with an old-school directory layout.
- [StarVim](https://github.com/ashincoder/StarVim): A highly regarded configuration for a platform-agnostic experience.
- [My Own](https://github.com/Thomashighbaugh/nvim): My personal setup with Xresources-based themes and Vimwiki tooling.

## Installing a Specific Configuration

To install my NeoVim configuration, follow these steps:

```bash
cd ~
$ git clone https://github.com/Thomashighbaugh/nvim .config/nvim

$ git clone https://github.com/wbthomason/packer.nvim ~/.local/share/nvim/site/pack/packer/start/packer.nvim

$ nvim -u "$HOME"/.config/nvim/init.lua +PackerInstall
```

Alternatively, you can use my handy script:

```bash
bash <(curl -s https://raw.githubusercontent.com/Thomashighbaugh/nvim/main/bin/install-latest-neovim.sh)
```

## Explore More Resources

If you're looking for additional NeoVim resources, check out the [Awesome NeoVim](https://github.com/rockerBOO/awesome-neovim) repository. It focuses on the Lua side of NeoVim and provides an extensive collection of links to plugins, colorscheme generators, and more.

Embrace the power of NeoVim and craft your ideal coding environment! 🚀

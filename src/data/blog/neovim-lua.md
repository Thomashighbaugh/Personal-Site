---
banner_alt: My (old) neovim configuration
banner: /blog/neovim/neovim.png
title_prefix: Guide To 
title: NeoVim Bleeding Edge Installation
description: A guide for how to set up NeoVim with all of its really awesome new features, like Lua configuration that makes NeoVim much faster and true rival to an IDE.
date: '2021-07-04'
---

While other uses of Lua are not so great **cough** awesomewm **cough**, in the context of configuring NeoVim it offers a significant speed advantage to vimscript with the added benefit of being easier to understand and does a lot of heavy lifting for you.

## Installing NeoVim's Bleeding Edge Version

To employ Lua as the configuration language, you will need to install the latest git version, which I have detailed below for your convenience.

```bash
$ git clone https://github.com/neovim/neovim

$ cd neovim

$ sudo make CMAKE_BUILD_TYPE=Release install

#Clean Up Time
$ cd ..

$ rm neovim

```

or you can use my script available here `bash <(curl -s https://raw.githubusercontent.com/Thomashighbaugh/nvim/main/bin/install-latest-neovim.sh)`

NeoVim also has dependencies that are dependent on the language you are seeking to use/write in, which you probably also want to get installed locally before running it for the first time.

```bash
# Python 3
 pip install neovim pynvim --user
 # Python 2
 pip2 install neovim pynvim --user
 # Ruby
gem install neovim
# Node.js
npm i -g neovim
## Or
yarn global add neovim
```

## Configuration

In order to configure your NeoVim editor in Lua you will need to create a `init.lua` file in the directory where your configuration is stored which on Linux is often `$HOME/.config/nvim`. I also add in a subdirectory called `lua` where additional files will be stored, like the plugin list for Packer, the package manager I use in NeoVim.

## Prebuilt Configurations

### Some Lua-Centric Examples

| Link                                                   | Notes                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| [NvChad](https://github.com/siduck76/NvChad)           | Pretty slick set up, I used an old variant of this for my set up in the past but have since moved on. Be warned it changes often and substantially, is moving towards in house plugins that work well but lock you in to their choices. Last month it seems that something is always broken or not even initialized |
| [LunarVim](https://github.com/LunarVim/LunarVim)       | Another nice Lua based set up, more traditional in arrangement of subdirectories. Great color scheme                                                                                                                                                                                                                |
| [Doom-Nvim](https://github.com/NTBBloodbath/doom-nvim) | Port of the Doom-Emacs Framework to Neovim. A bit bloated.                                                                                                                                                                                                                                                          |
| [nv-ide](https://github.com/crivotz/nv-ide)            | Awesome tooling for LSPs. Not so wonderful colorscheme.                                                                                                                                                                                                                                                             |
| [VaporVim] (https://github.com/hackorum/VapourNvim)    | Hardy configuration of the archiac style of directory layout that is probably better than any of the projects with larger dev teams                                                                                                                                                                                 |
| [StarVim](https://github.com/ashincoder/StarVim)       | By far the best of the large configurations I have evaluated, the same one I used as the basis for my own configuration, since NVChad is moving towards a form of platform lock with its internal plugins                                                                                                           |     |
| [my own](https://github.com/Thomashighbaugh/nvim)      | My set up, using the Xresources colors for its theme and with tooling for vimwiki included.                                                                                                                                                                                                                         |

Now if you wanted to install my specific NeoVim configuration, this final set of steps and you are home free, (if you do be sure to star the repository when you get a chance please!)

```bash
cd ~
$ git clone https://github.com/Thomashighbaugh/nvim .config/nvim

$ git clone https://github.com/wbthomason/packer.nvim ~/.local/share/nvim/site/pack/packer/start/packer.nvim

$ nvim -u "$HOME"/.config/nvim/init.lua +PackerInstall

```

or use my other script ;] `bash <(curl -s https://raw.githubusercontent.com/Thomashighbaugh/nvim/main/bin/install-latest-neovim.sh)`

## Resources

[Awesome NeoVim](https://github.com/rockerBOO/awesome-neovim#preconfigured-configuration) - seems primarily focused on the Lua side of NeoVim and is loaded with great links to plugins, colorscheme generators and more.
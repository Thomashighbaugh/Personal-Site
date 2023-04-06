---
title_prefix: Guide To
title: AwesomeWM Remember Geometry
description: Using client.connect_signal you can insure that after maximizing a window, it will be restored to its original size and position. Doing this doesn't require much in terms of code but is a quality of life feature you'll be glad to have.
date: '2021-09-01'
banner: '/blog/remember-geometry-awesomewm/aweesome-geo.png'
banner_alt: A screenshot of AwesomeWM with floating windows on screen
---

When switching between Maximized and Regular floating in AwesomeWM, it is a pain to have to adjust your window after unmaximizing it, so why not store that size and return to it when the window is unmaximized?

We can do this with `client.connect_signal` and without too much lua. This guide assumes you are somewhat familar with AwesomeWM's implementation of Lua.

## Guide

To start make a file in your AwesomeWM configuration directory, for me that's `$HOME/.config/awesome` and the file I named `remember-geometry.lua`.

The first lines should call in the necessary libraries

```Lua
local awful = require('awful')
local client = client
local tag = tag
local ipairs = ipairs
```

Now we create the connect signal, which will fire when the window changes its state to maximized

```lua
--  Remember client size when switching between floating and tiling.
client.connect_signal(
    'maximize',
    function(c)
        -- max if
        --- both are false
        --- only one is true
        local max_h = c.maximized_horizontal
        local max_v = c.maximized_vertical
        local max = (not max_h and not max_v) or not (max_h and max_v)
        c.remember_geometry.maximized_manual = max
        c.maximized_horizontal = max
        c.maximized_vertical = max
        c.maximized = max
    end
)

```

Next we want to create the variables at the time of the client's creation so we can access them with the above signal, then forget them when the window ceases to exist.

```lua
client.connect_signal(
    'manage',
    function(c)
        c.remember_geometry = {
            floating_geometry = c:geometry(),
            maximized_manual = false,
            maximized_horizontal = c.maximized_horizontal,
            maximized_vertical = c.maximized_vertical
        }
    end


client.connect_signal(
    'unmanage',
    function(c)
        c.remember_geometry = nil
    end
)

```

Now in order for these variables to even access our client when its floating we should probably pass along the c.remember_geometry function and link that to our layout property. Below that, let's make sure we have things set up to allow the mouse to resize our windows from a maximized state and thus loose that state.

```lua
client.connect_signal(
    'property::floating',
    function(c)
        if c.floating and c.remember_geometry then
            c:geometry(c.remember_geometry.floating_geometry)
        end
    end
)

tag.connect_signal(
    'property::layout',
    function(t)
        if t.layout == awful.layout.suit.floating then
            for k, c in ipairs(t:clients()) do
                c:geometry(c.remember_geometry.floating_geometry)
            end
        end
    end
)
client.connect_signal(
    'request::geometry',
    function(c, context)
        if context == 'mouse.resize' and not c.fullscreen then
            c.maximized_horizontal = false
            c.maximized_vertical = false
        end
    end
)

```

Now comes the heavy lifting, we want to set up what the geometry signal even is and get that wired together, otherwise what were we even doing in the first place?

Its important to remember that our window can be maximized vertically and horizontally, which we will separate below to enable a more fine grained window sizing control.

```lua
client.connect_signal(
    'property::geometry',
    function(c)
        local is_floating = c.floating or (c.first_tag and c.first_tag.layout == awful.layout.suit.floating)
        if c.remember_geometry and is_floating and not c.fullscreen and not c.minimized then
            -- if client is almost maximized then set it to maximized.
            -- if client was maximized before allow to go back to normal view.
            cgeometry = c:geometry()
            sgeometry = c.screen.workarea
            c.remember_geometry.floating_geometry = cgeometry
            -- horizontal
            if not c.maximized_horizontal then
                diffWidth = sgeometry.width - cgeometry.width - c.border_width
                xpos = sgeometry.x - cgeometry.x
                if not c.remember_geometry.maximized_horizontal and diffWidth == 0 and xpos == 0 then
                    c.remember_geometry.maximized_horizontal = true
                    c.maximized_horizontal = true
                else
                    c.remember_geometry.maximized_horizontal = false
                end
            end
            -- vertical
            if not c.maximized_vertical then
                diffHeight = sgeometry.height - cgeometry.height - c.border_width
                ypos = sgeometry.y - cgeometry.y
                if not c.remember_geometry.maximized_vertical and diffHeight == 0 and ypos == 0 then
                    c.remember_geometry.maximized_vertical = true
                    c.maximized_vertical = true
                else
                    c.remember_geometry.maximized_vertical = false
                end
            end
        end
    end
)

```

Last but not least we should probably also make sure to define what we mean by fullscreen in this context just in case AwesomWM decides to be... well its buggy little self.

```lua

client.connect_signal(
    'property::fullscreen',
    function(c)
        if c.floating and not c.fullscreen then
            c:geometry(c.remember_geometry.floating_geometry)
            if c.remember_geometry.maximized_manual then
                c.maximized_horizontal = true
                c.maximized_vertical = true
            end
        end
    end
)


```

Since this is hooking in to the signal system, we won't be needing a return statement and so your final file should look alot like this (minus the comment bars I use to keep things organized):

```lua
-- Remembers geometry when switching between floating and tiled, in case that
-- matters to anyone, I am not sure I care much but its is somewhat useful
-- from https://github.com/basaran/awesome-remember-geometry

local awful = require('awful')
local client = client
local tag = tag
local ipairs = ipairs
-- ########################################################################
-- ########################################################################
-- ########################################################################
--  Remember client size when switching between floating and tiling.
--
client.connect_signal(
    'maximize',
    function(c)
        -- max if
        --- both are false
        --- only one is true
        local max_h = c.maximized_horizontal
        local max_v = c.maximized_vertical
        local max = (not max_h and not max_v) or not (max_h and max_v)
        c.remember_geometry.maximized_manual = max
        c.maximized_horizontal = max
        c.maximized_vertical = max
        c.maximized = max
    end
)
-- ########################################################################
-- ########################################################################
-- ########################################################################
client.connect_signal(
    'manage',
    function(c)
        c.remember_geometry = {
            floating_geometry = c:geometry(),
            maximized_manual = false,
            maximized_horizontal = c.maximized_horizontal,
            maximized_vertical = c.maximized_vertical
        }
    end
)
-- ########################################################################
-- ########################################################################
-- ########################################################################
client.connect_signal(
    'unmanage',
    function(c)
        c.remember_geometry = nil
    end
)
-- ########################################################################
-- ########################################################################
-- ########################################################################
client.connect_signal(
    'property::floating',
    function(c)
        if c.floating and c.remember_geometry then
            c:geometry(c.remember_geometry.floating_geometry)
        end
    end
)
-- ########################################################################
-- ########################################################################
-- ########################################################################
tag.connect_signal(
    'property::layout',
    function(t)
        if t.layout == awful.layout.suit.floating then
            for k, c in ipairs(t:clients()) do
                c:geometry(c.remember_geometry.floating_geometry)
            end
        end
    end
)
-- ########################################################################
-- ########################################################################
-- ########################################################################
client.connect_signal(
    'request::geometry',
    function(c, context)
        if context == 'mouse.resize' and not c.fullscreen then
            c.maximized_horizontal = false
            c.maximized_vertical = false
        end
    end
)
-- ########################################################################
-- ########################################################################
-- ########################################################################
client.connect_signal(
    'property::geometry',
    function(c)
        local is_floating = c.floating or (c.first_tag and c.first_tag.layout == awful.layout.suit.floating)
        if c.remember_geometry and is_floating and not c.fullscreen and not c.minimized then
            -- if client is almost maximized then set it to maximized.
            -- if client was maximized before allow to go back to normal view.
            cgeometry = c:geometry()
            sgeometry = c.screen.workarea
            c.remember_geometry.floating_geometry = cgeometry
            if not c.maximized_horizontal then
                diffWidth = sgeometry.width - cgeometry.width - c.border_width
                xpos = sgeometry.x - cgeometry.x
                if not c.remember_geometry.maximized_horizontal and diffWidth == 0 and xpos == 0 then
                    c.remember_geometry.maximized_horizontal = true
                    c.maximized_horizontal = true
                else
                    c.remember_geometry.maximized_horizontal = false
                end
            end
            if not c.maximized_vertical then
                diffHeight = sgeometry.height - cgeometry.height - c.border_width
                ypos = sgeometry.y - cgeometry.y
                if not c.remember_geometry.maximized_vertical and diffHeight == 0 and ypos == 0 then
                    c.remember_geometry.maximized_vertical = true
                    c.maximized_vertical = true
                else
                    c.remember_geometry.maximized_vertical = false
                end
            end
        end
    end
)
-- ########################################################################
-- ########################################################################
-- ########################################################################
client.connect_signal(
    'property::fullscreen',
    function(c)
        if c.floating and not c.fullscreen then
            c:geometry(c.remember_geometry.floating_geometry)
            if c.remember_geometry.maximized_manual then
                c.maximized_horizontal = true
                c.maximized_vertical = true
            end
        end
    end
)


```
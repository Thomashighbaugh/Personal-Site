---
title: Mastering Layouts in AwesomeWM
description: >-
  The bling library is great, but I find a lot of it is unnecessary for my uses
  and while I love the mstab layout, I don't love the tab bar it provides.
  Instead let's make our own layout without the tab bar or bloat!
date: '2021-09-01'
banner: /blog/stack-layout-awesomewm/aweesome-stack.png
banner_alt: Awesome Stack Layout in Action
---
# Mastering Layouts in AwesomeWM: Create Your Own Tabless mstab

The AwesomeWM `bling` library offers a world of layout possibilities, but sometimes it feels like you're drowning in options. If you love the `mstab` layout but want to ditch the tab bar and trim down the bloat, you're in the right place. Let's roll up our sleeves and craft our own custom layout that puts you in control!

## Crafting Your Layout

Let's start by importing the necessary functionality. In the AwesomeWM world, it's always best to work smartly.

```lua
local math = math
local screen = screen

local stack = {}
```

AwesomeWM layouts are specific to the tag they are called from. We'll begin by getting variables assigned to our present tag.

```lua
local function arrange(p, dir)
    local t = p.tag or screen[p.screen].selected_tag
    local wa = p.workarea
    local cls = p.clients

    if #cls == 0 then
        return
    }
```

Unfortunately, AwesomeWM insists on using the `master-slave` naming convention, which might not be your cup of tea. However, it's best to stick with conventions to keep everything consistent.

Let's assign variables related to the two sides of the screen - one for the master window and one for the slave window that stacking will occur on.

```lua
    local mstrWidthFact = t.master_width_factor

    local mstrWidth = math.floor(wa.width * mstrWidthFact)
    local mstrHeight = math.floor(wa.height)

    local slavesNumber = #cls - 1
    local slavesWidth = math.floor(wa.width - mstrWidth)
    local slavesHeight = math.floor(wa.height)

    if slavesNumber == 0 then
        mstrWidth = wa.width
    end
```

Now, it's time to assign positions for the master and slave. The direction ("right" or "left") will determine where the stacking occurs.

```lua
    -- Places master
    local c, g = cls[1], {}

    g.height = math.max(mstrHeight, 1)
    g.width = math.max(mstrWidth, 1)

    g.y = wa.y
    g.x = (dir == "right") and (wa.x) or (wa.x + slavesWidth)

    if slavesNumber == 0 then
        g.x = wa.x
    end

    p.geometries[c] = g
```

Now, to limit the screen to showing the two windows and ensuring the stacking happens on the right side.

```lua
    if #cls == 1 then
        return
    end

    -- Places slaves
    for i = 2, #cls do
        local c, g = cls[i], {}

        g.height = math.max(slavesHeight, 1)
        g.width = math.max(slavesWidth, 1)

        g.y = wa.y
        g.x = (dir == "right") and (wa.x + mstrWidth) or (wa.x)

        p.geometries[c] = g
    end
end
```

Lastly, let's define the name of each layout variant and add the return statement at the end. This way, we can require this layout in the file where we append layouts to the default list. You're free to organize custom layouts as you see fit; I prefer to keep them in their directory.

```lua
stack.name = "stack"
function stack.arrange(p)
    return arrange(p, "right")
end

stack.left = {}
stack.left.name = "stackLeft"
function stack.left.arrange(p)
    return arrange(p, "left")
end
```

## Conclusion

With the comment bars included, your final source code should look like this. You'll need to add this file to wherever you append layouts to your configuration. I often keep custom layouts in their own directory, but you can organize it your way.

```lua
local math = math
local screen = screen

local stack = {}

local function arrange(p, dir)
    local t = p.tag or screen[p.screen].selected_tag
    local wa = p.workarea
    local cls = p.clients

    if #cls == 0 then
        return
    end

    local mstrWidthFact = t.master_width_factor

    local mstrWidth = math.floor(wa.width * mstrWidthFact)
    local mstrHeight = math.floor(wa.height)

    local slavesNumber = #cls - 1
    local slavesWidth = math.floor(wa.width - mstrWidth)
    local slavesHeight = math.floor(wa.height)

    if slavesNumber == 0 then
        mstrWidth = wa.width
    end

    -- Places master
    local c, g = cls[1], {}

    g.height = math.max(mstrHeight, 1)
    g.width = math.max(mstrWidth, 1)

    g.y = wa.y
    g.x = (dir == "right") and (wa.x) or (wa.x + slavesWidth)

    if slavesNumber == 0 then
        g.x = wa.x
    end

    p.geometries[c] = g

    if #cls == 1 then
        return
    end

    -- Places slaves
    for i = 2, #cls do
        local c, g = cls[i], {}

        g.height = math.max(slavesHeight, 1)
        g.width = math.max(slavesWidth, 1)

        g.y = wa.y
        g.x = (dir == "right") and (wa.x + mstrWidth) or (wa.x)

        p.geometries[c] = g
    end
end

stack.name = "stack"
function stack.arrange(p)
    return arrange(p, "right")
end

stack.left = {}
stack.left.name = "stackLeft"
function stack.left.arrange(p)
    return arrange(p, "left")
end

return stack
```

There you have it! You've mastered a custom layout in AwesomeWM, taking control of your workspace without the extra fluff. Happy customizing!

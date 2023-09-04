---
banner_alt: Firefox Logo
banner: "/blog/firefox-customization/banner.jpg"
title_prefix: Guide to
title: Firefox userChrome.js Modification
description: A response to a Reddit question that surveys the world of Firefox userChrome.js customization which I have spent way too much time on.
date: "2023-03-15"
---

# Firefox Customization

**Note:** This began as answer to a Reddit post, listed below, which is why it is framed the way it is. Being an expansive answer which addresses something I have put plenty of work into and being related to working with code which this blog exists to document, I treated it like a blog prompt and included it here as a blog post. [Reddit Post](https://www.reddit.com/r/FirefoxCSS/comments/x04k1b/what_is_the_difference_between_userjs_and/)

## Question Addressed

**Post Title:**

> What is the difference between user.js and userChrome.js?

**Post Body**:

> I can find a lot of posts on the difference between userChrome.js, userChrome.css and userContent.css, but none of them mention user.js, and talk about userChrome.js like it fills the same role.

> But at the same time I see a lot of management scripts for userChrome.js that I can't quite understand yet, and if they are the same thing, why can't you just put all your scripts in user.js? So is there a difference or not?

## My Response

For those in the future interested in a thorough, easily parsed and interpreted answer to this inquiry, as I so often find myself in desire of on other questions I end up on Reddit while researching, let me be the change I wish to see in the world and provide such an answer to this topic which I know **oh too well**.

# user.js vs. userChrome.js

---

## user.js

---

`user.js` as has been said is a means of providing the options one wants the browser to have set, with the intended (typically non-default) settings provided in lines of Javascript that call the `user_pref()` function.

These settings are the settings one finds when navigating to `about:config` to modify settings specifically, using the same names found on that page. This is not to be confused with the settings one finds when using the browser menu to the `about:preferences` settings most are probably more familiar with.

The `user.js` file is place within the profile that is running when you use Firefox, which you can navigate to the directory of by entering `about:profiles` and clicking '**Open Directory**' regardless what platform you are using as this differs wildly between the OS you probably are using and my own, thus OS specific instructions on finding that folder I cannot provide to you as I would not know.

### Example user.js Setting

For an example to enable loading userChrome.css files in your profile, in the `user,js` you would place the following line: `user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);`

### Example user.js File

While I now use NixOS and configure Firefox as part of its declarative configuration using the Nix language, here is the user.js file I used when still using Artix Linux and having a need to back this up as part of my Firefox modification repo (now deprecated but still available for the interested public on Github).

[user.js](https://github.com/Thomashighbaugh/firefox/blob/master/user.js)

---

## userChrome.js

`userChrome.js` refers to the use of Javascript files (or scripts :wink:) to modify the browser and its behavior in a more substantial way than is typically possible through `userChrome.css` files which provide styling to the browser's window or `user scripts` that run using an extension and modify the content of the browser usually to theme websites or provide additional functionality to websites.

At one time, this sort of modification was evidently supported by Mozilla and thus acquired the name it is known by (`userChrome.js`) but that is no longer the case. Thus in order to modify the browser and its behavior, one has to **inject a userChrome.js loader into the browser's system-wide _Program Directory/Folder_**.

Doing this introduces the potential of **security vulnerabilities** as most loading engines will load any script in the specified directory you configure it to look for in the profile which a malicious actor may exploit. For the record I have had no issue with personally **but your mileage may vary, _especially if using a more common OS_**.

### userChrome.js Loading Engines

Here are some loading engines one may use to load `userChrome.js` files in their browser:

-   [fx-autoconfig](https://github.com/MrOtherGuy/fx-autoconfig) - the one many people currently or recently into this sort of thing seem to prefer, including myself. The instructions are pretty... _exhaustive_ and describe the installation process well enough I need not further explain it other than to say that I recommend this engine over the other options.

-   [alice0775's loader](https://github.com/alice0775/userChrome.js) - I have no experience using this other than a single, ill-fated trial. You will need an extension to translate the page unless you read Chinese, which I do not. It seems an equally capable loader, I just lack experience with it but if `fx-autoconfig` isn't working for you, maybe it will.

### userChrome.js scripts and Firefox Customization Repositories

The loaders, like `user script` extensions, require certain front matter for the Javascript files they will load and have other features I will refer to their `README.md`s for specifics on that front but think its best to look at actual code written by others when available to deduce how to write these sorts of scripts out (if that's necessary, I had all of my needs available either by using scripts I found or modifying them _slightly_ except for one or two specific situations that required a more in-depth writing process). Here are some sources for scripts I have found useful:

-   [xiaoxiaoflood's firefox-scripts](https://github.com/xiaoxiaoflood/firefox-scripts) - great source for less opinionated scripts that work with the `fx-autoconfig` loader and allow for plenty of customization while not lacking on features. My first stop when I was working on this sort of thing to find scripts either to use as skeletons or to see examples of working with Firefox's API to achieve a certain effect.

-   [benzBrake's FirefoxCustomize](https://github.com/benzBrake/FirefoxCustomize) - with a translation extension, the documentation of this repository is really helpful and is a good example of using the Alice0775 loader, which as I have stated I know little about using. Includes a table of what scripts work with the loader it uses, coded with emojis even, in its documentation. Great work, even if stylistically not my cup of tea.

-   [dotiful's firefox-scripts](https://github.com/dotiful/firefox-scripts) - uses Gulp to package the customizations together, which I find obtuse and have not dove deeper into this code than that but **really appreciate the resources linked here in its `README.md`**

-   [Quantum Nox Firefox Dark Full Theme](https://github.com/Izheil/Quantum-Nox-Firefox-Dark-Full-Theme) - A great example of someone's customization needs exceeding the possibilities of CSS alone and expanding into `userChrome.js` modification, which is one potential use you may have for exploring this sort of thing. Has some cool scripts, like multi-row tabs and custom scrollbars, worth checking out as is what was not possible for the author to theme with CSS alone and how that is addressed in the code. Can be installed via the **AUR** for Arch Linux (and its derivatives like Manjaro or Artix Linux) for those who want to see it in action but not follow the installation instructions. Note: **now archived due to author's time constraints but seems to still work last I checked.**

-   [alice0775's scripts](https://github.com/alice0775/userChrome.js) - same repository from which the engine comes, also has tons of scripts that work with the engine. Repository is a bit messy but the code itself is good and can be an instructive place to see how someone else accomplished something you intend to.

-   [Endor8's userChrome.js](https://github.com/Endor8/userChrome.js) - this repository (which is in German, which I force myself to figure out for practice with that language, but for most will require a translation extension) has comprehensively arranged scripts that are within directories representing the version of Firefox they are compatible with, helpful for the Neo-Luddites out there especially. Have had great success with many of these scripts and appreciate the documentation demoing the script's effect on the browser.

-   [aminomancer's uc.css.js](https://github.com/aminomancer/uc.css.js) - this is a great source of other links and information too, as he puts `fx-autoconfig`'s instructions and me to shame in how _***exhaustive***_ (and exhausting tbh) his explanations are, both for the whole project as well as individual scripts (recommend setting `word-wrap` to true for any scripts from this repository you work with locally, otherwise you'll be reading a single line that could wrap around the Earth as clearly the author also uses word-wrap in writing the **Description** section of the front matter).

---

## Why Do Some Posts Treat user.js and userChrome.js as Filling the Same Role

Because with `user.js` one can modify the browser to achieve specific effects that otherwise would require a `userChrome.js` script to achieve were it not for Mozilla providing such functionality, even if it is buried in the `about:config` page.

If diving into to `userChrome.js`, it is always wise to make sure that there isn't an option to achieve a certain effect and many scripts do exist that duplicate effort that simply toggling a setting would have more easily provided.

Also worth noting, with `userChrome.js` scripts you can make settings that can be toggled in your `user.js` file, often external scripts or those intending to be consumed by others you have added in will include these sorts of settings and are a nice touch.

---

## Conclusion

What is awesome about Firefox is that so much can be done with the browser, as you can see from the above. The maintaining of `userChrome.css` alone makes it a lot more of an attractive option for me over Chromium based browsers, (..._if I could just deduce how to have Vivaldi's `Tab Tiling` feature in Firefox_...) which is in no small part due to its open sourced code base and the open source code uploaded on GitHub giving us some sense of how to work with it that so far Mozilla has tolerated and allowed to flourish. So please **at least star repos you find helpful so Mozilla at least knows that people like these options and refrains from destroying the potential to make the browser totally our own**. Starring these repos also helps encourage the authors since its always nice to know other people value your work at least enough to press a button :wink:.

# Good Luck!

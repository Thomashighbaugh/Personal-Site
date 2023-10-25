---
title: "doas v sudo"
description: "A discussion about the sudo alternative doas comparing the two and why I switched to doas."
date: '2023-04-29'
image: '/blog/sudo/sudo.jpg'

---


The command-line interface is the battleground of Unix-like operating systems, where users and permissions reign supreme. At the heart of it all lies the trusted guardian: `sudo`. But there's a contender in the ring, a newcomer called `doas`, ready to challenge the status quo. In this article, we'll delve into the epic showdown between `sudo` and `doas` and explore why I made the switch to the underdog of the terminal world.

## The Tale of `sudo` and `doas`

First, let's introduce the contenders:

### `sudo`

`sudo` is a seasoned veteran in the world of Unix-like operating systems. It's the go-to tool for managing permissions, allowing users to execute commands with administrative privileges. `sudo` operates by enabling users to run commands as another user, usually the all-powerful root.

### `doas`

Enter `doas`, the up-and-coming star. A lightweight utility, `doas` serves the same purpose as `sudo` but with a fresh perspective. Originally crafted for OpenBSD, it has since found its way into other Unix-like operating systems. It's making waves due to its simplicity, security, and portability.

## Advantages of `doas`

Now, let's step into the ring and see why `doas` might just win the match.

### 1. **Simplicity**

`doas` boasts a straightforward configuration file that's a breeze to understand and modify. In contrast, `sudo` can be quite complex to configure and manage, making `doas` a winner for systems administrators who crave simplicity.

### 2. **Security**

Security is a top priority for `doas`. It logs all command executions, aiding in the swift detection of security breaches. The syntax for specifying command restrictions is simpler in `doas`, enhancing the ability to create secure configurations.

### 3. **Portability**

`doas` is a nomad, comfortably settling in different Unix-like operating systems. For organizations managing multiple operating systems, `doas` is a consistent, portable choice for permissions management.

### 4. **Lightweight**

With a small footprint and minimal system resource consumption, `doas` shines in resource-constrained environments or where performance is paramount.

### 5. **Ergonomics**

While seemingly minor, the act of typing `doas` versus `sudo` can be a game-changer. For exclusive Linux users like myself, the comfort of typing `doas` becomes a noteworthy advantage.

## In Conclusion

In the battle between `sudo` and `doas`, the latter emerges as a compelling contender. Its advantages in simplicity, security, portability, lightweightness, and ergonomics make it a worthy choice for systems administrators and Linux enthusiasts alike. While `sudo` remains a staple tool for managing permissions, don't underestimate the potential of `doas`. It might just be the perfect fit for your organization, ensuring a secure and seamless terminal experience.

If you're a fan of Linux and adore the elegance of `doas`, give it a try and see if it aligns with your terminal-centered lifestyle. The terminal awaits, and the choice is yours!





































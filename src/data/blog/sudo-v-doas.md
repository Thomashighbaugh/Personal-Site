---

title_prefix: Guide To
title: "doas v sudo"
description: "A discussion about the sudo alternative doas comparing the two and why I switched to doas."
date: '2023-04-29'
banner: '/blog/sudo/sudo.jpg'
banner_alt: it is a very bad idea to run that command, it means delete the whole file tree of the system and is a commonly discussed novice mistake we all make at some point using Linux.

---

# `sudo` v. `doas`

Apparently `sudo` is removing the flare of character that its warnings about an incident being reported were, which is arbitrary unrelated to its functionality but maybe this stirred up an interest in its alternatives. When moving to NixOS, I opted to try out one alternative called `doas` and found it better for my purposes thus have moved to it on my systems. The following discusses `doas` in relation to `sudo` and tries to give users a sense of why I was willing to change such a vital command in my everyday terminal centered life.

Unix-like operating systems rely heavily on the concept of users and permissions to ensure security and stability. One of the most common tools used to manage permissions is `sudo`, which allows a user to execute commands with administrative privileges. However, there is a newer and potentially better alternative to `sudo` called `doas`. In this blog post, we will discuss the advantages of replacing `sudo` with `doas`.

> What are `sudo` and `doas`?

`sudo` is a command-line utility that allows users to execute commands with administrative privileges. It is commonly used in Unix-like operating systems to manage permissions and limit the risk of security breaches. `sudo` works by allowing users to run commands as another user, usually the root user.

`doas`, on the other hand, is a more recent alternative to `sudo` that is becoming increasingly popular. It is a lightweight utility that provides a simple way to run commands with elevated privileges. `doas` was originally developed for OpenBSD, but it has since been ported to other Unix-like operating systems.

Advantages of using `doas`

## Simplicity

One of the main advantages of `doas` is its simplicity. Unlike `sudo`, which can be complex to configure and manage, `doas` has a straightforward configuration file that is easy to understand and modify. This makes it a great choice for systems administrators who want a lightweight and easy-to-use tool for managing permissions.

## Security

Another advantage of `doas` is its security. `doas` was designed with security in mind and includes a number of features that make it more secure than `sudo`. For example, `doas` logs all command executions, making it easier to track down security breaches. `doas` also supports a simpler syntax for specifying command restrictions, making it easier to create more secure configurations.

## Portability

`doas` is also highly portable, meaning it can be easily installed and used on a wide variety of Unix-like operating systems. This makes it a great choice for organizations that use multiple operating systems and want a consistent way to manage permissions.

## Lightweight

`doas` is a lightweight utility, meaning it has a small footprint and uses minimal system resources. This can be particularly beneficial for systems with limited resources or where performance is a concern.

## Ergonomics

I find typing `doas` a lot more ergonomic than typing `sudo`, which is an incredibly minor point but I use Linux exclusively so I spend a lot of my time arguing with terminals that makes that an advantage for me.

Conclusion

In conclusion, `doas` offers several advantages over `sudo`, including simplicity, security, portability, lightweightness, and ergonomics. While `sudo` is still widely used and considered a standard tool for managing permissions in Unix-like operating systems, `doas` offers a compelling alternative that is well worth considering. If you're a systems administrator or IT professional or crazy that likes Linux such as I am, it's worth taking a closer look at `doas` and seeing if it's the right choice for your organization.

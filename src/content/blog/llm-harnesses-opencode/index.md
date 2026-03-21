---
title: "LLM Harnesses and the Case for OpenCode"
summary: "On the emerging category of LLM harnesses, a year of living with OpenCode, and how agentic AI turned a painful NixOS refactor into something almost enjoyable."
date: "Feb 26 2026"
draft: false
tags:
  - AI
  - OpenCode
  - NixOS
  - Developer Tools
  - Workflow
---

There's a tool type that's quietly become central to how I work, though people use different names for it: "AI coding assistants," "agentic CLI tools," and so on. I call them LLM harnesses. They sit between you and a model, give the model access to your files, your shell, and your project context, and let it actually make changes instead of only suggesting them.

Claude Code is a well-known example, and Cursor and Windsurf add similar features inside editors. Over the past year I've used [OpenCode](https://opencode.ai) the most, so that's what I'll focus on here.


## What an LLM harness does

A chatbot answers questions. A harness acts. It can read files, run builds, edit source, and iterate on results. The model provides the suggestions; the harness decides how to apply them to your project.

Using a bare API often means copy-pasting snippets in and out of a browser. With a harness, you get a partner that can work inside your repo and perform multi-step changes. That changes workflows in practical, not mystical, ways.

Anthropic shipped the early approach: give a model practical tool access and the interaction stops being purely conversational. OpenCode follows that idea but in an open-source, configurable package. You can point it at different model providers or self-hosted endpoints, which matters if you care about cost or privacy.


## A year with OpenCode

I started using OpenCode about a year ago. It wasn't the slickest option at first, but it did the practical things I needed. It's terminal-native, can read and write files, run commands, and orchestrate multi-step workflows. It supports multiple providers, including free inference endpoints, which matters if you run a lot of small queries across projects.

Free or cheap inference lowers the barrier to using these tools for throwaway tasks: quick questions, small refactors, or a sanity check on code you haven't touched in months. When that friction goes away, your usage changes — you treat the harness like another editor feature instead of a scarce resource.

## The NixOS Refactor That Should Have Been Miserable

Here is where this gets concrete.

I run NixOS. If you know, you know. If you do not — NixOS is a Linux distribution built on the Nix package manager, where your entire system configuration is declared in a functional language called Nix. It is powerful, reproducible, and occasionally maddening. The language has its own ideas about evaluation, laziness, and error reporting, and those ideas do not always align with what a human being would consider helpful.

My flake configuration had grown organically over time, the way these things do. It worked, but the architecture was what I would generously call "activate by import" — meaning that every module was pulled in directly, and if you wanted a capability, you imported the file that provided it. Simple enough at small scale. Fragile and opaque at the scale my configuration had reached.

I wanted to move to an "activate by enable option" paradigm: import modules up front and toggle features with options like `services.myThing.enable = true`. That's how upstream modules work — it's more composable and easier to reason about when many modules interact.

The problem is that this refactor touches *everything*. Every module needs to be restructured. Every consumer of those modules needs to be updated. The option declarations, the config blocks, the imports — all of it shifts. And Nix's error messages, while they have improved, still have a tendency to point you three layers of abstraction away from the actual problem. A missing semicolon in one file surfaces as a type error in an unrelated attribute set. A misplaced `lib.mkIf` gives you an infinite recursion trace that scrolls for pages.


Doing this by hand would have been tedious and slow. I've spent weeks on refactors like that before: most time goes to chasing side effects and confusing errors, not to the design decisions that actually matter.


## Configuring OpenCode for Nix

Nix has quirks, so a generic assistant won't cut it. OpenCode lets you define custom agents with tailored prompts, tool access, and behavior. I created two agents that mattered:

1. A Nix language agent — tuned for Nix expression semantics, lazy evaluation pitfalls, `lib` functions, and how attribute sets compose.

2. A Nix flake architect agent — focused on flake structure, module patterns, `inputs`/`outputs`, and the "activate by enable option" approach.

OpenCode also supports swarm-style workflows: decompose a large task into subtasks and run agents in parallel. For a refactor touching thirty-plus files, this approach made the work manageable.

I could describe the target paradigm once, point the swarm at the module tree, and let the agents handle the mechanical transformation of each module while I focused on the parts that actually required human judgment: which options should exist, how they should compose, what the defaults should be, whether the interface made sense for future me who would have forgotten all of this in six months.

## What Changed in Practice

The refactor that I expected to take weeks of scattered evenings took days. Not because the AI wrote perfect Nix on the first try every time — it did not — but because the feedback loop collapsed from "make a change, rebuild, read an inscrutable error, grep through five files to find the real problem, fix it, rebuild again" to "make a change, let the agent handle the mechanical propagation, review the result, adjust, move on."


The agents flagged issues I would've missed: circular dependencies that showed up only at evaluation, places where `mkDefault` was needed, and `mkIf` guards that should wrap blocks instead of attributes. Tracking those across many files is tedious; delegating the mechanical parts let me focus on architecture and defaults.

This isn't "AI wrote my code for me." It's more accurate to say the harness handled mechanics so I could make the design calls.

## The Broader Point


These tools are still early. Features change fast and specifics will age, but the general pattern is useful: embed a capable model in your development context, let it act, and configure it for your domain.

OpenCode works for me because it's open and composable. It doesn't force one model or workflow, and cheap inference makes it practical to use frequently.

I'm not saying everyone should refactor their NixOS setup with AI agents. But for me the combination of open tooling, customizable agents, and affordable inference turned a tedious, week-long refactor into something that finished in days.

If you run NixOS and have been avoiding a module refactor, this might be the nudge you need.

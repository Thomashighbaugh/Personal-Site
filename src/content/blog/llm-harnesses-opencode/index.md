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

There is a category of tool that has quietly become indispensable to how I work, and it does not really have a settled name yet. Some people call them "AI coding assistants." Others say "agentic CLI tools." I have been calling them **LLM harnesses** — the layer of software that sits between you and a large language model, giving the model access to your filesystem, your shell, your project context, and then letting it actually *do things* on your behalf rather than just talk about doing them.

Claude Code is probably the most well-known example. Cursor and Windsurf bolt the concept into an editor. But the one I have spent the most time with over the past year — and the one I want to talk about here — is [OpenCode](https://opencode.ai).

## What an LLM Harness Actually Is

The distinction matters because it reframes what these tools are. A chatbot answers questions. A harness *acts*. It reads your files, greps your codebase, runs your build, edits your source, and iterates on the result. The language model is the engine, but the harness is the chassis, the steering, the suspension — everything that makes the raw capability useful in context.

When you use a bare API, you are copy-pasting snippets in and out of a browser tab. When you use a harness, you are pair programming with something that can hold your entire project in its head and reach into it directly. The difference is not incremental. It is categorical.

Claude Code got this right early. Anthropic understood that giving Claude tool use — real filesystem access, real shell execution — changed the nature of the interaction. OpenCode takes the same idea and runs with it in a direction I find more interesting: it is open source, configurable to an almost unreasonable degree, and it does not lock you into a single model provider.

## A Year with OpenCode

I picked up OpenCode roughly a year ago, and at this point it has become the default interface through which I interact with language models for anything code-related. Not because it was the most polished option on day one — it was not — but because the fundamentals were right, and the trajectory was obvious.

The core appeal is straightforward. OpenCode is a terminal-native harness that gives an LLM full access to your development environment. It can read files, write files, run commands, search your codebase, and orchestrate multi-step workflows. It supports multiple model providers, so you can point it at Claude, GPT-4, Gemini, or — and this is the part that changed everything for me — free inference endpoints.

That last point deserves emphasis. There are a growing number of API providers offering free or nearly-free inference for capable models. When you combine those with a harness like OpenCode, you get something remarkable: a genuinely powerful AI development partner that costs you nothing beyond the electricity to run your terminal. For someone working across a dozen side projects and personal configurations, that removes the constant mental tax of "is this query worth the API cost?" You just use it. You use it freely and frequently, for things you would never bother pasting into a paid chat interface — quick questions, throwaway refactors, exploratory debugging, sanity checks on syntax you have not touched in months.

The friction disappears, and when friction disappears, usage patterns change. You stop treating the AI as a special resource to be conserved and start treating it as what it actually is: a tool that should be as ambient and accessible as your text editor.

## The NixOS Refactor That Should Have Been Miserable

Here is where this gets concrete.

I run NixOS. If you know, you know. If you do not — NixOS is a Linux distribution built on the Nix package manager, where your entire system configuration is declared in a functional language called Nix. It is powerful, reproducible, and occasionally maddening. The language has its own ideas about evaluation, laziness, and error reporting, and those ideas do not always align with what a human being would consider helpful.

My flake configuration had grown organically over time, the way these things do. It worked, but the architecture was what I would generously call "activate by import" — meaning that every module was pulled in directly, and if you wanted a capability, you imported the file that provided it. Simple enough at small scale. Fragile and opaque at the scale my configuration had reached.

The paradigm I wanted to move to was **activate by enable option**. Instead of importing a module to get its effects, you import everything up front and then toggle individual capabilities with options — `services.myThing.enable = true` and so on. This is how upstream NixOS modules work, and for good reason. It is more composable, more discoverable, and much easier to reason about when you have dozens of modules interacting with each other.

The problem is that this refactor touches *everything*. Every module needs to be restructured. Every consumer of those modules needs to be updated. The option declarations, the config blocks, the imports — all of it shifts. And Nix's error messages, while they have improved, still have a tendency to point you three layers of abstraction away from the actual problem. A missing semicolon in one file surfaces as a type error in an unrelated attribute set. A misplaced `lib.mkIf` gives you an infinite recursion trace that scrolls for pages.

Doing this by hand, file by file, would have been an exercise in tedium punctuated by bafflement. I have done refactors like it before, and they tend to stretch across weeks of intermittent frustration, where half the time is spent not on the actual design work but on chasing down the cascading consequences of each change.

## Configuring OpenCode as a Nix-Fluent Partner

This is where OpenCode's configurability became the deciding factor. Out of the box, any LLM harness can help with general-purpose code. But Nix is not general-purpose. It is a niche language with niche semantics, and the difference between a model that sort of knows Nix and one that has been given proper context about Nix is the difference between an assistant who guesses and one who actually helps.

OpenCode lets you define custom agents — specialized personas with their own system prompts, tool access, and behavioral guidelines. I set up two that mattered:

1. **A Nix language agent** — tuned for the semantics of the Nix expression language, aware of common pitfalls around lazy evaluation, `lib` functions, module system conventions, and the specific ways attribute sets compose and override.

2. **A Nix flake architect agent** — focused on the higher-level concerns of flake structure, module design patterns, the `inputs`/`outputs` contract, and the "activate by enable option" paradigm specifically.

On top of these, OpenCode supports what amounts to **swarm engineering** — the ability to decompose a large task into subtasks and dispatch them to multiple agents working in parallel, each in its own isolated context. For a refactor that touched thirty-plus files across multiple concern boundaries, this was not a novelty. It was the architecture that made the whole thing tractable.

I could describe the target paradigm once, point the swarm at the module tree, and let the agents handle the mechanical transformation of each module while I focused on the parts that actually required human judgment: which options should exist, how they should compose, what the defaults should be, whether the interface made sense for future me who would have forgotten all of this in six months.

## What Changed in Practice

The refactor that I expected to take weeks of scattered evenings took days. Not because the AI wrote perfect Nix on the first try every time — it did not — but because the feedback loop collapsed from "make a change, rebuild, read an inscrutable error, grep through five files to find the real problem, fix it, rebuild again" to "make a change, let the agent handle the mechanical propagation, review the result, adjust, move on."

The agents caught things I would have missed. Circular dependencies between modules that only manifested at evaluation time. Option declarations that needed `mkDefault` instead of direct assignment to preserve override semantics. Cases where a `mkIf` guard needed to wrap the entire config block rather than individual attributes. These are the kinds of details that are easy to get wrong and tedious to debug, and having something that could track them across dozens of files simultaneously was genuinely freeing.

I spent my time on architecture rather than bookkeeping. That is the shift. Not "AI wrote my code for me" — that framing has always been reductive. More like: AI handled the mechanical coherence so I could focus on the structural decisions. The same way a good type system catches certain classes of error so you can think about logic instead of memory layout.

## The Broader Point

LLM harnesses are still early. The category barely exists as a concept in most developers' minds, and the tools are evolving fast enough that anything I write about specific features will be partially outdated within months. But the *pattern* is durable: take a capable model, embed it in a real development context, give it the ability to act and not just advise, and make it configurable enough that users can shape it to their specific domain.

OpenCode gets this right in a way that matters to me. It is open. It is composable. It does not assume that one model or one provider or one workflow fits everyone. And when you pair it with free inference endpoints, it removes the economic friction that keeps most developers from integrating AI deeply into their daily practice.

I am not arguing that everyone should refactor their NixOS configuration with a swarm of AI agents. I am arguing that the combination of open tooling, configurable agents, and accessible inference is quietly changing what a single developer can take on — and that the gap between "I should really clean this up" and "I actually cleaned this up" is increasingly a tooling problem with a tooling solution.

The harness is the thing. The model is the engine, but the harness is what makes it drive.

*If you are running NixOS and have been putting off that module refactor you know you need, consider this your sign.*

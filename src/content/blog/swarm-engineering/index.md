---
title: "Swarm Engineering: Simulating a Company with LLMs"
summary: "How orchestrated async agents turn solo development into something that feels like managing a team — and why cheap API access makes this paradigm actually viable."
date: "Feb 19 2026"
draft: false
tags:
  - AI
  - Swarm Engineering
  - Architecture
  - Developer Tools
  - MCP
---

You know what the weirdest part of working with swarm engineering is? It's the moment when you realize you're not just writing code anymore — you're managing a simulated team. An orchestrator agent breaks down your task, spawns specialists to handle subtasks in parallel, and you're basically doing the work of a tech lead coordinating three or four engineers who happen to all be API calls to the same foundation model with different system prompts.

And the really wild part? The entire infrastructure to do this costs about ten dollars.

## What Swarm Engineering Actually Means

At its core, swarm engineering is an **async, multi-agent pattern** where:

1. A **central orchestrator** receives a high-level task
2. It decomposes that task into smaller, independent subtasks
3. It spawns **specialized subagents** — each with its own role, context, and instructions
4. These subagents work in parallel (actual async API calls, not sequential)
5. Each subagent reports back to the orchestrator when finished
6. The orchestrator merges results, handles dependencies, and spawns the next wave

It's basically the actor model applied to LLMs. You get concurrency, isolation, and role specialization without spinning up actual infrastructure.

## Why This Feels Like a Simulated Company

Here's where it gets interesting. With tools like OpenCode, you can define agents with extremely fine-grained roles. Not just "write code" but:

- **Backend engineer** (focused on API design, database schema)
- **Frontend specialist** (knows React patterns, accessibility)
- **DevOps engineer** (handles CI/CD, Docker, deployment)
- **Code reviewer** (adversarial, nitpicky, catches edge cases)
- **Documentation writer** (technical writing, user guides)
- **QA tester** (writes test cases, finds regressions)

Each agent has its own system prompt, its own expertise, its own standards. You can even give them different personalities — make the reviewer sarcastic and hyper-critical, make the backend engineer obsessed with performance.

When you kick off a feature request, the orchestrator might spawn:
- Agent A to refactor the database schema
- Agent B to update the API endpoints
- Agent C to adjust the frontend components

They all run at the same time. They finish at different speeds. The orchestrator tracks dependencies — Agent C can't start until Agent B finishes — and handles the merge conflicts when two agents touch related code.

You're not writing code anymore. You're delegating work, reviewing pull requests from bots, and unblocking dependencies. It feels disturbingly similar to actual engineering management.

## MCP: When Agents Leave the Codebase

Here's where swarm engineering stops being a neat party trick and starts being genuinely powerful. With **Model Context Protocol (MCP)**, agents can call external tools and interact with the world beyond your filesystem.

An agent can:
- Query a Postgres database to understand your schema
- Hit your staging API to test an endpoint
- Post to Slack when a task finishes
- Open a Jira ticket when it finds a bug
- Send an email with a deployment summary
- Fetch documentation from an internal wiki
- Even **make commits and open PRs autonomously**

This is where the "simulated company" metaphor gets uncomfortable. You can configure a swarm where:
- The DevOps agent monitors your CI pipeline and auto-fixes failures
- The documentation agent listens for API changes and updates your OpenAPI spec
- The QA agent runs tests nightly and files issues for regressions

The agents aren't just generating code suggestions. They're **taking actions** — persistent, stateful, external interactions. They're behaving like actual team members with responsibilities.

You could, in theory, wire up a swarm that handles on-call rotations. An agent gets paged when your service goes down, reads logs, identifies the issue, applies a fix, deploys, and then posts a postmortem to Slack. All while you're asleep.

I'm not saying I've done this. But the fact that it's *possible* with free-tier API access is kind of wild.

## The Cost Breakdown (Or: Why This Is Even Feasible)

Let's be honest — if Claude API usage cost what it did two years ago, swarm engineering would be a research toy. Running six agents in parallel on a medium-sized task could burn through $50 in tokens before you blink.

But the economics have shifted dramatically:

**Free inference endpoints:**
- GitHub Models (with Copilot subscription): Free Sonnet 3.5 calls
- OpenRouter free tier: $10 credit gets you surprisingly far
- Gemini 1.5 Flash: Practically free for most workloads
- DeepSeek, Qwen, Llama via Groq: Actually free with rate limits

**Cheap paid options:**
- GitHub Copilot: $10/month, includes model access
- OpenRouter pay-as-you-go: ~$3-15/month for serious usage
- Nano GPT / smaller distilled models: Pennies per session

A typical swarm session for me:
- Orchestrator: 1 long-context planning call (~50k tokens)
- 4 parallel workers: ~20k tokens each
- 1 reviewer pass per worker: ~15k tokens each
- Total: ~200k tokens, maybe $2 worth of API calls

And that's for something that would have taken me half a day. The cost per unit of cognitive leverage is absurdly low.

## The Control You Actually Get

One of the things that makes swarm engineering feel different from "just using ChatGPT" is the **granularity of control** you have over each agent's behavior.

With OpenCode (and similar harnesses), you can:

- Define **custom agent types** with specialized system prompts
- Inject **role-specific context** (e.g., "you are a Rust engineer, never use `unwrap()`")
- Control **tool access** per agent (the frontend agent can't touch database migrations)
- Set **verification gates** (force agents to run tests before reporting completion)
- Configure **review workflows** (all code must pass an adversarial review)
- Adjust **retry limits** and failure handling per subtask

I have a NixOS module architect agent that knows my flake structure, my naming conventions, my preferred abstractions. It will refuse to write inline config — everything goes in a module under `modules/`. It yells at me if I try to import something directly instead of enabling it via option.

That agent is 40 lines of markdown in a file called `nixos-architect.md`. It took me ten minutes to write. And now every time I refactor my system config, I get a specialist who *actually knows my conventions* instead of generic Nix advice.

The degree of customization you can achieve — without writing any actual code, just prose descriptions of what the agent should do — is kind of staggering.

## When It Works (And When It Doesn't)

Swarm engineering is not magic. There are failure modes:

**It works well when:**
- Tasks are decomposable into independent subtasks
- Each subtask has clear acceptance criteria
- The codebase has structure (agents struggle with spaghetti code)
- You can specify what "done" looks like

**It struggles when:**
- The task requires deep, holistic understanding
- Subtasks have tight coupling and hidden dependencies
- You don't know what you want (garbage in, garbage out)
- The changes require non-local reasoning across many files

Swarm engineering is best for **horizontal scaling** of grunt work — refactoring, boilerplate generation, migrations, adding tests, updating docs. It is less good at **vertical problems** that require a single, coherent vision.

You still need to be the architect. The swarm is your construction crew.

## The Broader Implications

Here's the thing that keeps me up at night: this pattern is not just for software development.

Imagine a swarm configured for:
- **Content creation**: Researcher agent gathers sources, writer drafts, editor revises, SEO specialist optimizes
- **Customer support**: Triage agent categorizes tickets, specialist agents handle by domain, escalation agent pings humans for edge cases
- **Data analysis**: Ingestion agent cleans data, stats agent runs models, visualization agent generates charts, report writer summarizes findings

The **orchestrator + specialist** pattern is universal. And now that the compute cost to run it has dropped to nearly zero, the only barrier is designing the workflow.

We're in this weird moment where the tooling is almost ahead of our ability to imagine what to do with it. The question isn't "can we build a simulated company with LLMs?" — it's "what do we want that company to do?"

And the answer to that is starting to feel like: *whatever we can describe clearly enough*.

---

*If this sounds like science fiction, I promise it's not. The entire swarm setup I use daily is open source tooling, free API endpoints, and markdown files. The future is already here — it's just unusually cheap this time.*

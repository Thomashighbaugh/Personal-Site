---
title: "Salut-rs: My First Complete Rust Project"
summary: "A Rust rewrite of the terminal greeter 'salut' built in a single afternoon - my first earnest foray into Rust and an appreciation of its legendary compiler error messages"
date: "Nov 14 2024"
draft: false
tags:
- Rust
- Terminal
- CLI
- Learning Journey
- NixOS
- Cross-platform
---

My first complete Rust project from start to finish - a reimplementation of Wervice's elegant terminal greeter `salut`. What started as an afternoon experiment became a transformative learning experience that taught me why developers rave about Rust's compiler error messages.

## The Journey

**First Earnest Foray**: This wasn't just playing around with Rust tutorials - this was a complete project built from scratch in a single afternoon session. Taking a working C++ application and reimplementing it in Rust forced me to actually understand ownership, borrowing, and Rust's type system rather than just reading about them.

**The Compiler as Teacher**: Throughout the development process, I gained a genuine appreciation for Rust's famously helpful compiler error messages. Rather than cryptic segfaults or undefined behavior, the compiler guided me toward correct solutions with clear explanations and suggested fixes. What could have been hours of debugging became minutes of learning.

**Complete Ownership**: This project is entirely mine - conceived, implemented, debugged, and finished in a single focused session. There's something deeply satisfying about starting with an idea and ending the day with a working, compiled binary that actually does something useful.

## What I Built

**Terminal Greeter with Style**: A configurable terminal welcome screen that displays a stylized banner using figlet and provides quick-access shortcuts to frequently used applications. Clean, functional, and actually useful in daily workflow.

**Cross-Platform Compatibility**: Using the `crossterm` library, the application works seamlessly across Linux, macOS, and Windows. The terminal abstraction layer handles platform differences transparently.

**TOML Configuration**: Simple, human-readable configuration file that auto-generates sensible defaults on first run. No frustrating "config file not found" errors - the application just works and creates what it needs.

## Learning Highlights

**Compiler-Driven Development**: The Rust compiler became my pair programming partner. When I made mistakes with ownership or borrowing, I didn't get runtime crashes - I got detailed explanations with line numbers and suggestions for fixes. This tight feedback loop accelerated learning dramatically.

**Pattern Matching Power**: Coming from other languages, Rust's pattern matching and `Result` type system felt verbose at first. By the end of the afternoon, I understood why it's actually a feature - explicit error handling prevented entire classes of bugs before they could exist.

**The Borrow Checker Is Your Friend**: Initially fighting the borrow checker, then understanding it, then appreciating it - all in one afternoon. The compiler's insistence on safe memory access wasn't a hindrance but a guide toward better design.

## Technical Wins

**Zero Memory Leaks**: Rust's ownership system meant I never had to think about manual memory management or worry about forgetting to free resources. The compiler enforced correctness at compile time.

**NixOS Integration**: Built with a complete Nix flake for reproducible development environments. Anyone can clone the repo and have a working build environment instantly - no "works on my machine" problems.

**Proper Error Handling**: Every failure case handled explicitly through Rust's `Result` type. File I/O, process spawning, configuration parsing - all error paths properly managed without try-catch boilerplate.

## Afternoon Project, Lasting Lessons

What made this project special wasn't just building something functional in Rust - it was experiencing firsthand why Rust has such passionate advocates. The compiler's error messages transformed potential frustration into guided learning. Each compilation error was a lesson, each fix reinforced understanding.

This single afternoon project gave me more practical understanding of systems programming concepts than weeks of reading documentation. The combination of a clear goal (reimplement working software), immediate feedback (compiler errors), and rewarding outcome (working binary) created an ideal learning environment.

The project proved that Rust's learning curve, while steep, provides handrails all the way up. The compiler doesn't just tell you what's wrong - it explains why and suggests how to fix it. For a first serious Rust project, I couldn't have asked for better tooling support.
---
title: "My NixOS Setup: Reproducible Computing Done Right"
summary: "A complete NixOS configuration that actually works across multiple machines. Declarative, reproducible, and way more maintainable than any other Linux setup I've tried."
date: "Nov 12 2024"
draft: false
tags:
  - NixOS
  - DevOps
  - Infrastructure as Code
  - Systems Engineering
  - Functional Programming
repoUrl: https://github.com/Sanatana-Linux/nixos-config
---

I've been through a lot of Linux distributions over the years, and NixOS is the first one that made me feel like I was doing system administration right. This configuration represents years of refinement and is now the foundation for all my computing environments.

## Why NixOS Changed Everything for Me

**No More "Works on My Machine"**: With NixOS Flakes, I can rebuild the exact same system state on any hardware. Every package version, every configuration file, every service setting - it's all locked and reproducible. When I say "reproducible," I mean byte-for-byte identical builds.

**Configuration as Code**: Everything about my system is declared in `.nix` files. Want to add a new service? Modify a config file and rebuild. Need to rollback a change? Just boot into the previous generation. The entire system state is versioned and atomic.

**Multi-Machine Management**: I run this same configuration across workstations, servers, and even a few experimental setups. Each machine gets the appropriate parts based on its role, but the core system is consistent everywhere.

## The Flakes Architecture That Actually Works

**Dependency Management**: NixOS Flakes lock every single dependency with cryptographic hashes. The `flake.lock` file ensures that rebuilding the system six months from now produces identical results, even if upstream packages have changed.

**Modular Organization**: Each aspect of the system (desktop environment, development tools, services) lives in its own module with clear interfaces. I can enable or disable entire feature sets with single configuration options.

**Hardware Abstraction**: The same configuration adapts automatically to different hardware while still maintaining consistent software environments. ARM or x86, different graphics cards, various storage setups - it all just works.

## Security Without the Paranoia

**Secure Boot Integration**: Full verified boot chain with cryptographic signatures and TPM integration. The system won't boot if any component has been tampered with, but it doesn't get in my way during normal use.

**Principle of Least Privilege**: Every service runs with exactly the permissions it needs and no more. User accounts, system services, and applications all get minimal access through systematic permission modeling.

**Automatic Audit Trails**: Comprehensive logging and monitoring that I actually read. The system tracks every change, every login, every service start - all with automated analysis for unusual patterns.

## Performance Tuning That Persists

**Smart Resource Management**: CPU scheduling, memory allocation, and I/O priorities all optimized for my specific workloads. The beauty is that these optimizations are declared in config files, so they survive system updates.

**Build Cache Strategy**: Intelligent binary caching that dramatically speeds up system deployments. Most rebuilds only take a few seconds because unchanged components are cached.

**Boot Optimization**: Startup time is under 15 seconds to a fully functional desktop, with parallel service initialization and optimized dependency graphs. But more importantly, it's consistent every time.

## Development Environment Integration

**Reproducible Dev Environments**: Project-specific development environments that include not just the runtime dependencies, but also build tools, language servers, debuggers, and even editor configurations. `nix develop` gives me a complete, isolated environment for any project.

**Cross-Platform Builds**: The same configuration can target different architectures and platforms. I can build ARM binaries on x86 machines, or test configurations in VMs before deploying to real hardware.

**Continuous Integration**: Automated testing pipeline that validates configuration changes across different hardware profiles. Nothing gets deployed without proving it works.

## The Modules I Actually Use

**Desktop Environment**: My own heavily customized setup with window manager, status bars, application launcher, and theming all declared in config. No more manual tweaking after fresh installs.

**Development Stack**: Complete development environment with multiple language toolchains, editors, debugging tools, and testing frameworks. Everything from web development to systems programming is ready to go.

**Server Services**: Database management, web servers, monitoring tools, backup systems - all configured declaratively with proper dependency management and service isolation.

**Media and Graphics**: Creative tools, media processing, graphics drivers, and display management all integrated into the same configuration framework.

## Maintenance That Doesn't Suck

**Automated Updates**: System updates happen through configuration changes, not package manager commands. I can review changes before applying them and rollback instantly if something breaks.

**Configuration Validation**: Static analysis catches configuration errors before they can break anything. The Nix language's type system prevents entire classes of configuration mistakes.

**Documentation Generation**: System documentation stays in sync with the actual configuration because it's generated automatically. No more outdated install guides or forgotten customizations.

## The Learning Curve Reality

NixOS has a reputation for being difficult, and honestly, that's somewhat deserved. The Nix language takes time to understand, and thinking declaratively about system configuration requires a mental shift.

But the payoff is enormous. Once you get past the initial learning curve, system administration becomes predictable and stress-free. No more wondering what state your system is in or being afraid to make changes.

**Custom Module Development**: I've written dozens of custom modules for specific needs - application configurations, service definitions, hardware quirks. The module system makes it easy to package and reuse these solutions.

**Community Integration**: The NixOS community has figured out configurations for almost everything. Need to run a specific service? Someone has probably written a module for it.

This configuration isn't just a collection of settings - it's a complete methodology for managing computing infrastructure. Everything from my personal laptop to production servers uses the same principles and tooling.

The result is computing environments that are predictable, maintainable, and actually enjoyable to work with. When your entire system configuration is code, you can apply software engineering principles to system administration.

**Repository**: [github.com/Sanatana-Linux/nixos-config](https://github.com/Sanatana-Linux/nixos-config)
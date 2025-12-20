This is a [Next.js](https://nextjs.org) project that displays Star Wars related data.

Uses Swapi - https://swapi.py4e.com

All elements are auto-generated from the Swapi root data. This keeps this platform flexible - Any new resources added to Swapi will be automatically available in this platform, including completely new resource types.

## Getting Started

- Set up Bun
- `bun i` to install dependencies
- `bun start` to start the dev server (Note: This will kill any current processes on port 3000 before starting the dev server. You can remove the "prestart" script if you don't want this behavior.)

## Known issues

Some issues that I've encountered during development.

### The Next.js dev overlay shows `Compiling...` the whole time

- Stop the server
- Delete the `.next` folder
- Start the server again

## AI disclosure

This project is mostly written by hand, with some assistance from AI.

This includes:

- Creating a [fully vibe-coded version of this project](https://github.com/Flixbox/starwars-db-vibecoded) for reference & learning the basics of Next.js, but **not code reuse**.
- Using Gemini 3 Flash to auto-complete small statements.
- Favicon

No agentic AI systems are used to write code in **this** repository. They are however used to **explain and debug** issues and concepts.

My goal is to **understand the tech and the task, creating an implementation plan in my mind, then writing the code**. I do not use AI to write all of the code, but to assist me in this endeavour. 

## Timing

- Start of work in this repository: 2025-12-20 17:10
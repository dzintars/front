# Front-end SPA application

This is my try to set up complete front-end application.
This is an early WIP. DON'T USE IT!

## Stack

Technology stack I choose for this project:

- Yarn 2 Berry .... Let's try something new!
- PnP ............. Let's try something new!
- TypeScript ...... Type safety is must have and great DX in your IDE is nice to have.
- ESLint .......... Just linter to make your code better.
- Prettier ........ Code formatter to make your code nicely formated.
- WebPack ......... Simply because I am not willing to learn Rollup.
- LitElement ...... Really great library with bright future to write native Web Components.
- Redux ........... State management for complex applications.
- Redux-Saga ...... To make asynchronous side-effects easy and testable.
- Reselect ........ For creating memoized, composable store selector functions.
- Husky ........... To watch Git hooks and run scripts on Git actions.
- Lint-Staged ..... To lint only staged files. Executed by Husky hooks.
- Commitlint ...... To format your Git commit messages and enabling things like automatic changelogs, etc.
- \*Json-Server ... For mocking data API. (not used anymore due to HTTP/2 limitations)
- \*Hygen ......... Code generator to create Ducks or Component boilerplate. (Not implemented yet)

> Explicit is better than smart.

I like when thing does one thing and does it well.
And so I choose to use Redux-Ducks and Re-Ducks for code organization in modules where every
module is responsible only for one domain.

Similar approach I choose to use for components by splitting components in several categories.
For example presentational components and containers which manages only data layer.
Still researching this aspect, but I am almost 100% sure that I will use this approach.

Reusable elements should be managed in separate repository and published in NPM registry.
I have separate monorepository for that.
It is possible to set up 2 Yarn/Lerna workspaces in this same repository, but I am not willing
to do so. Design System should have it's own repository.

## How to use

Yarn 2 Berry and PnP is something pretty new, so I am not sure will current version of this project
will run automatically aut of the box. I had not tested yet.
Once I will get all core pieces working nice for me, i will look into `yarn install` workflow.

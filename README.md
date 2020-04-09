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
- Lint-Staged ..... To lint only staged files. Works with Husky.
- Commitlint ...... To format your Git commit messages and enabling things like automatic changelogs, etc.
- Json-Server ..... For mocking data API.
- \*Hygen .......... Code generator to create Ducks or Component boilerplate. (Not implemented yet)

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

```sh
Extension Host
extensionHost.ts:212 Debugger attached.
console.ts:137 [Extension Host] "live-sass-compiler" is now actived! Go and Debug :P 
log.ts:191  WARN UNRESPONSIVE extension host, 'ritwickdey.live-sass' took 94% of 2568.491ms, saved PROFILE here: '/tmp/exthost-0d046e.cpuprofile' Array(10)
TMScopeRegistry.ts:45 Overwriting grammar scope name to file mapping for scope source.yaml.
Old grammar file: file:///usr/share/code/resources/app/extensions/yaml/syntaxes/yaml.tmLanguage.json.
New grammar file: file:///home/dzintars/.vscode/extensions/redhat.vscode-yaml-0.7.2/syntaxes/yaml.tmLanguage.json
register @ TMScopeRegistry.ts:45
TMScopeRegistry.ts:45 Overwriting grammar scope name to file mapping for scope inline.lit-html.
Old grammar file: file:///home/dzintars/.vscode/extensions/bierner.lit-html-1.11.1/syntaxes/lit-html.json.
New grammar file: file:///home/dzintars/.vscode/extensions/runem.lit-plugin-1.1.10/node_modules/lit-html/syntaxes/lit-html.json
register @ TMScopeRegistry.ts:45
TMScopeRegistry.ts:45 Overwriting grammar scope name to file mapping for scope inline.lit-html.string.injection.
Old grammar file: file:///home/dzintars/.vscode/extensions/bierner.lit-html-1.11.1/syntaxes/lit-html-string-injection.json.
New grammar file: file:///home/dzintars/.vscode/extensions/runem.lit-plugin-1.1.10/node_modules/lit-html/syntaxes/lit-html-string-injection.json
register @ TMScopeRegistry.ts:45
TMScopeRegistry.ts:45 Overwriting grammar scope name to file mapping for scope inline.lit-html.style.injection.
Old grammar file: file:///home/dzintars/.vscode/extensions/bierner.lit-html-1.11.1/syntaxes/lit-html-style-injection.json.
New grammar file: file:///home/dzintars/.vscode/extensions/runem.lit-plugin-1.1.10/node_modules/lit-html/syntaxes/lit-html-style-injection.json
register @ TMScopeRegistry.ts:45
TMScopeRegistry.ts:45 Overwriting grammar scope name to file mapping for scope inline.lit-html-svg.
Old grammar file: file:///home/dzintars/.vscode/extensions/bierner.lit-html-1.11.1/syntaxes/lit-html-svg.json.
New grammar file: file:///home/dzintars/.vscode/extensions/runem.lit-plugin-1.1.10/node_modules/lit-html/syntaxes/lit-html-svg.json
register @ TMScopeRegistry.ts:45
TMScopeRegistry.ts:45 Overwriting grammar scope name to file mapping for scope source.css.styled.
Old grammar file: file:///home/dzintars/.vscode/extensions/mf.vscode-styled-components-0.2.2/syntaxes/css.styled.json.
New grammar file: file:///home/dzintars/.vscode/extensions/runem.lit-plugin-1.1.10/node_modules/vscode-styled-components/syntaxes/css.styled.json
register @ TMScopeRegistry.ts:45
TMScopeRegistry.ts:45 Overwriting grammar scope name to file mapping for scope styled.
Old grammar file: file:///home/dzintars/.vscode/extensions/mf.vscode-styled-components-0.2.2/syntaxes/styled-components.json.
New grammar file: file:///home/dzintars/.vscode/extensions/runem.lit-plugin-1.1.10/node_modules/vscode-styled-components/syntaxes/styled-components.json
register @ TMScopeRegistry.ts:45
extensionHost.ts:211 Extension Host
extensionHost.ts:212 Debugger attached.
log.ts:191  WARN UNRESPONSIVE extension host, 'runem.lit-plugin' took 72% of 5509.416ms, saved PROFILE here: '/tmp/exthost-c69c31.cpuprofile' Array(4)
log.ts:191  WARN Error: Aborted onWillSaveTextDocument-event after 1750ms
    at mainThreadSaveParticipant.ts:39
extensionHost.ts:211 Extension Host
extensionHost.ts:212 Debugger attached.
bootstrap-window.js:213 [uncaught exception]: Error: read ECONNRESET
onUnexpectedError @ bootstrap-window.js:213
bootstrap-window.js:216 Error: read ECONNRESET
    at Pipe.onStreamRead (internal/stream_base_commons.js:183)
onUnexpectedError @ bootstrap-window.js:216
events.js:180 Uncaught Error: read ECONNRESET
    at Pipe.onStreamRead (internal/stream_base_commons.js:183)
abstractExtensionService.ts:155 Extension host terminated unexpectedly. Code:  null  Signal:  SIGSEGV
_onExtensionHostCrashed @ abstractExtensionService.ts:155
notificationsAlerts.ts:40 Extension host terminated unexpectedly.
onDidChangeNotification @ notificationsAlerts.ts:40
log.ts:191  WARN Canceled: Canceled
    at Object.t.canceled (file:///usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:47:183)
    at file:///usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:3676:896
    at Array.forEach (<anonymous>)
    at g.dispose (file:///usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:3676:844)
    at e.dispose (file:///usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:3689:229)
    at K._stopExtensionHostProcess (file:///usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:3569:961)
    at K._onExtensionHostCrashed (file:///usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:3570:752)
    at K._onExtensionHostCrashed (file:///usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:4041:630)
    at K._onExtensionHostCrashOrExit (file:///usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:3570:605)
    at file:///usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:3570:334
    at c.fire (file:///usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:110:24)
    at z._onExtHostProcessExit (file:///usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:3946:890)
    at ChildProcess.<anonymous> (file:///usr/share/code/resources/app/out/vs/workbench/workbench.desktop.main.js:3941:866)
    at ChildProcess.emit (events.js:203:13)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:272:12)
```
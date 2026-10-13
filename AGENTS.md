# Mood Movie Picker

A small web app that suggests one movie at a time based on the user's chosen mood.
The product spec is in `_docs/plan.md`. Read it before working on any task.

## Commands

- `node --test` - run the whole test suite
- `node --test tests/<name>.test.js` - run one test file
- `open index.html` - open the app in the browser (macOS)

## Rules

- Plain HTML, CSS and JavaScript only. No framework, no build step
- Do not add a dependency or a package without asking
- Movie data lives in `movies.json`. Each film belongs to exactly one mood
- Keep pure logic (filtering, shuffling) in its own file exported with `module.exports`, so `node --test` can test it
- Tasks are GitHub issues in the repo `240103132-hub/moodmovie`. Use the `gh` CLI
- Never commit API keys or secrets

## Documents

- `_docs/process.md` - how work is organized, roles and the orchestrator
- `_docs/task-template.md` - the template every groomed issue follows
- `_docs/team/pm.md` - the Product Manager role
- `_docs/team/software-engineer.md` - the Software Engineer role
- `_docs/team/qa-engineer.md` - the QA Engineer role

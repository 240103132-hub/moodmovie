# Mood Movie Picker: v1 Scope

A web app that suggests one movie at a time based on the user's chosen mood.

## Core flow

1. A single page shows a short "about" line explaining the tool.
2. Five mood buttons stay visible at all times: **Cozy, Thrilled, Laugh, Wistful, Inspired**.
3. Clicking a mood shows one film. A "show another" button reveals the next one.
4. No film repeats until every film in that mood has been shown. After that, the list reshuffles and starts over automatically.
5. Clicking a different mood button switches moods at any time.

## Moods

| Mood | Description |
|---|---|
| Cozy | Warm, gentle, comforting. Films that feel like a blanket. |
| Thrilled | Tense, suspenseful, edge-of-your-seat. |
| Laugh | Light, funny, easy to enjoy. |
| Wistful | Nostalgic, bittersweet, reflective. |
| Inspired | Uplifting, ambitious, makes you want to do something. |

Moods are preset and not renamed. Each film belongs to exactly one mood.

## Movie card

- Title and year
- Short synopsis
- A "why this fits your mood" blurb
- No posters
- No streaming availability

## Content

- 30-50 hand-curated films, about 6-10 per mood
- Each film belongs to exactly one mood
- Mostly well-known, widely available films
- Synopses and blurbs are AI-drafted, then edited and approved by the owner
- English only, public audience

## Experience

- Minimal, calm, text-focused design
- No accounts, no saved data
- No filters beyond the mood choice

## Out of scope for v1

- Genre, runtime, or "already seen" filters
- Favorites, watchlists, history
- Sharing links and film suggestions
- Multilingual interface
- Tech stack (to be decided later with the coding agent)

## Decision log

| Question | Decision |
|---|---|
| Form of the tool | Web app |
| How users express mood | Preset moods |
| Movie data source | Hand-curated list |
| List size at launch | Small (30-50 films) |
| What the user sees | One pick with a "show another" button |
| Card detail | Title, year, synopsis, "why this fits" blurb; no posters, no streaming |
| Extra filters | None, mood only |
| Memory of the user | None, no accounts, nothing saved |
| Number of moods | 5 broad moods |
| Tech stack | Deferred |
| Visual feel | Minimal and calm, text-focused |
| Repeat handling | No repeats until all films in the mood are shown |
| Mood membership | Exactly one mood per film |
| Audience and language | Public, English only |
| Copywriting | AI drafts, owner edits and approves |
| Extras in v1 | Short "about" line only |
| Final mood list | Cozy, Thrilled, Laugh, Wistful, Inspired |
| After all films are shown | Reshuffle and start over automatically |
| Curation approach | Mostly well-known, widely available films |
| Switching moods | Mood buttons stay visible at all times |

## Next steps

1. Build the film list: pick 6-10 films per mood.
2. Have AI draft the synopses and blurbs, then edit and approve them.
3. Hand this scope and the film data to the coding agent to choose a stack and build.

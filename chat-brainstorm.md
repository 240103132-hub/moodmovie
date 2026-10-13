# Brainstorm chat: Mood Movie Picker

> Note: the interactive question cards in the Claude chat cannot be copied as text.
> The questions and answers in Part 1 are transcribed from screenshots of the cards,
> in the order they appeared. Part 2 is copied directly from the chat.

---

## Part 1: Scoping questions (one question at a time)

**User:**
I want to build a tool for choosing movies based on mood.
Help me set the scope for this project precisely. I want to brainstorm with you
and understand how the tool should work. Give me options.
Ask me one question at a time and keep your output short.

**Claude:** First, what form should this tool take?
Options: Web app / Mobile app / Chatbot / AI assistant / Browser extension / Something else
**User:** Web app

**Claude:** How should the user tell the tool their mood?
Options: Pick from preset moods (e.g. cozy, tense, nostalgic) / Describe it in free text (AI interprets) / Answer a short quiz / Sliders (energy, darkness, humor) / Something else
**User:** Pick from preset moods

**Claude:** Where should the movie data come from?
Options: Public API (e.g. TMDB) / Hand-curated list I build myself / Both: API plus my own mood tags / Not sure yet, advise me / Something else
**User:** Hand-curated list I build myself

**Claude:** How big should your curated list be at launch?
Options: Small (30-50 films) / Medium (100-300 films) / Large (500+ films) / Start small, grow over time / Something else
**User:** Small (30-50 films)

**Claude:** After choosing a mood, what should the user see?
Options: One random pick / A short list of 3-5 films / A full browsable list for that mood / One pick, with a 'show another' button / Something else
**User:** One pick, with a 'show another' button

**Claude:** How much detail should each movie card show?
Options: Title, year, poster only / Plus a short synopsis and runtime / Plus a 'why this fits your mood' blurb / Plus streaming availability / Something else
**User:** Title, year, short synopsis, and a "why this fits your mood" blurb. No posters and no streaming availability.

**Claude:** Should users be able to narrow results beyond mood?
Options: Just the mood choice / Mood + genre filter / Mood + max runtime / Mood + 'not seen' (hide watched films) / Something else
**User:** Just the mood choice

**Claude:** Should the tool remember anything about the user?
Options: No accounts, nothing saved / Save favorites in the browser (no login) / Accounts with watchlist and history / Not for v1, maybe later / Something else
**User:** No accounts, nothing saved

**Claude:** How many moods should the tool offer?
Options: 4-5 broad moods / 6-8 moods / 10+ nuanced moods / Let me decide later, help me draft the list / Something else
**User:** 4-5 broad moods

**Claude:** How do you want to build it technically?
Options: Static site (HTML/JS, data in a JSON file) / React/Vue app with a JSON file / Full stack with a backend and database / Not sure, advise me / Something else
**User:** Skip. I will decide the tech stack later with the coding agent.

**Claude:** What visual feel should the app have?
Options: Minimal and calm (text-focused) / Playful and colorful, each mood has its own theme / Cinematic and dark / No strong preference yet / Something else
**User:** Minimal and calm (text-focused)

**Claude:** When the user clicks 'show another', how should repeats be handled?
Options: Never repeat a film until all in that mood are shown / Random each time, repeats allowed / Fixed order I define per mood / Not a concern for v1 / Something else
**User:** Never repeat a film until all in that mood are shown

**Claude:** Can a single film appear under more than one mood?
Options: Yes, a film can belong to several moods / No, each film has exactly one mood / One primary mood, optional secondary / Something else
**User:** No, each film has exactly one mood

**Claude:** Who is this for, and in what language?
Options: Just me and friends / Public, English-only / Public, multilingual interface / Portfolio piece to showcase / Something else
**User:** Public, English-only

**Claude:** Who writes the synopses and 'why this fits' blurbs for each film?
Options: I write everything by hand / AI drafts, I edit and approve / Synopses from a source, blurbs written by me / Not decided / Something else
**User:** AI drafts, I edit and approve

**Claude:** Beyond the mood picker and movie card, what else should v1 include?
Options: Mood picker only, nothing else / Plus a short 'about' line explaining the tool / Plus a way to suggest films (feedback link) / Plus sharing a pick via link / Something else
**User:** Plus a short 'about' line explaining the tool

---

## Part 2: Scope summary, mood list, final scope (copied from chat)

**Claude:**
Here's the scope we've landed on.

Mood Movie Picker: v1 scope

Core flow
1. User lands on a single page with a short "about" line explaining the tool.
2. User picks one of 4-5 broad preset moods.
3. The app shows one film. A "show another" button reveals the next film in that mood.
4. No film repeats until every film in that mood has been shown.

Movie card
- Title and year
- Short synopsis
- A "why this fits your mood" blurb
- No posters, no streaming availability

Content
- Hand-curated list of 30-50 films (roughly 6-12 per mood)
- Each film belongs to exactly one mood
- Synopses and blurbs are AI-drafted, then edited and approved by you
- English only, public audience

Experience
- Minimal, calm, text-focused design
- No accounts, no saved data, no extra filters

Out of scope for v1
- Genre, runtime, or "already seen" filters
- Favorites, watchlists, history
- Sharing links, film suggestions, multilingual UI
- Tech stack (to be decided later with the coding agent)

Open items to settle before building
- The final 4-5 moods and their names
- Your curation criteria (era, language of films, rating range)
- Behavior once all films in a mood have been shown (reshuffle and start over?)
- What the "show another" button does visually and what "change mood" looks like

I'd suggest the next step be drafting the mood list. Want to do that next?

**User:**
Yes, let's draft the mood list. Propose 5 moods with short names, and I will pick.

**Claude:**
Here are 5 broad moods, designed to be distinct so each film fits only one:
1. Cozy: warm, gentle, comforting. Films that feel like a blanket.
2. Thrilled: tense, suspenseful, edge-of-your-seat.
3. Laugh: light, funny, easy to enjoy.
4. Wistful: nostalgic, bittersweet, reflective.
5. Inspired: uplifting, ambitious, makes you want to do something.

A few alternates if any don't land:
- Cry (cathartic, emotional) instead of Wistful
- Escape (big worlds, fantasy, adventure) instead of Inspired
- Weird (surreal, offbeat, unusual) as a wildcard

Which five do you want, and do you want to rename any?

**User:**
Use the first five as they are: Cozy, Thrilled, Laugh, Wistful, Inspired. No renaming.

**Claude:** Moods locked in. Next: what should happen after the user has seen every film in a mood?
**User:** Reshuffle and start over automatically

**Claude:** Locked in: reshuffle automatically. Next, what's your curation approach for choosing the films?
**User:** Mostly well-known, widely available films

**Claude:** Locked in: well-known, widely available films. Last open item: how should users switch to a different mood after seeing a film?
**User:** The mood buttons stay visible at all times

**Claude:**
Every open item is now settled, so here is the final scope.

Mood Movie Picker: v1 scope (final)

Core flow
1. A single page shows a short "about" line explaining the tool.
2. The five mood buttons stay visible at all times: Cozy, Thrilled, Laugh, Wistful, Inspired.
3. Clicking a mood shows one film. A "show another" button reveals the next one.
4. No film repeats until every film in that mood has been shown. After that, the list reshuffles and starts over automatically.
5. Clicking a different mood button switches moods at any time.

Movie card
- Title and year
- Short synopsis
- A "why this fits your mood" blurb
- No posters and no streaming availability

Content
- 30-50 hand-curated films, about 6-10 per mood
- Each film belongs to exactly one mood
- Mostly well-known, widely available films
- Synopses and blurbs are AI-drafted, then edited and approved by you
- English only, public audience

Experience
- Minimal, calm, text-focused design
- No accounts, no saved data, no extra filters

Out of scope for v1
- Genre, runtime, or "already seen" filters
- Favorites, watchlists, history
- Sharing links, film suggestions, multilingual UI
- Tech stack (to be decided with the coding agent)

Next steps
1. Build the film list: pick 6-10 films per mood.
2. Have AI draft the synopses and blurbs, then edit and approve them.
3. Hand the scope and film data to the coding agent to choose a stack and build.

I can help with step 1 by suggesting candidate films for each mood, or turn this scope into a brief for the coding agent. Which would you like first?

**User:**
Save everything to a markdown file that I can download.

**Claude:**
I saved the scope, the mood list, and the full decision log to `mood-movie-picker-scope.md`.
Want me to start suggesting candidate films for each mood next?

(Output file: `_docs/plan.md`)

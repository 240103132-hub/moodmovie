# Mood Movie Picker: Development Backlog

## 1. Project Skeleton and Test Setup
Goal: Initialize the project structure and testing environment.
Description: Create `index.html`, `style.css`, and `script.js`. Set up a simple browser-based testing environment using a minimal JS test runner to verify the project structure and confirm a basic "Hello World" style test passes.

## 2. Movie Data Preparation
Goal: Define and populate the movie content.
Description: Create `movies.json` with the full list of 30-50 films (6-10 per mood for the 5 moods: Cozy, Thrilled, Laugh, Wistful, Inspired). Each film entry must include: title, year, short synopsis, "why this fits your mood" blurb, and be assigned to exactly one mood.

## 3. Basic UI Implementation
Goal: Establish the application layout.
Description: Implement the minimal, calm UI in `index.html` and `style.css`. Include a short "about" line explaining the tool. Ensure the 5 mood buttons are visible and styled appropriately, and that the area for the movie card is prepared for dynamic injection.

## 4. Mood Selection Logic
Goal: Connect user input to movie filtering.
Description: Implement the JavaScript logic to load `movies.json` and display a movie based on the selected mood when a button is clicked.

## 5. Shuffling and "Show Another" Logic
Goal: Implement core browsing behavior.
Description: Add logic to pick a random movie from the selected mood, ensure no repeats occur within a session until the list is exhausted, and trigger an automatic reshuffle when necessary.

## 6. Verification and Testing
Goal: Validate application behavior and integrity.
Description: Implement a comprehensive suite of browser-based tests to verify mood-based filtering, non-repeating shuffle logic, and UI updates, ensuring the application meets the specified functional requirements.

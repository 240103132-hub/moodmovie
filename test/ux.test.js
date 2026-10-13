const { describe, it, beforeEach } = require('node:test');
const assert = require('node:assert');
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

describe('Mood Movie Picker UX', () => {
    let dom;
    let document;
    let window;

    beforeEach(() => {
        const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');
        
        // Mock fetch
        const movies = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../movies.json'), 'utf-8'));
        
        dom = new JSDOM(html, { 
            runScripts: "dangerously", 
            resources: "usable",
            url: "file://" + path.resolve(__dirname, '../index.html')
        });
        
        window = dom.window;
        document = window.document;

        window.fetch = (url) => {
            return Promise.resolve({
                json: () => Promise.resolve(movies)
            });
        };
    });

    it('should update UI when a mood button is clicked', async () => {
        // Wait for script to initialize
        await new Promise(resolve => setTimeout(resolve, 100));

        const moodButtons = document.querySelectorAll('#mood-selector button');
        const cozyButton = Array.from(moodButtons).find(b => b.getAttribute('data-mood') === 'Cozy');
        
        cozyButton.click();

        const movieCard = document.getElementById('movie-card');
        assert.ok(movieCard.innerHTML.includes('<h2>'));
        const showAnotherButton = document.getElementById('show-another');
        assert.strictEqual(showAnotherButton.style.display, 'block');
    });

    it('should update movie when Show Another is clicked', async () => {
        await new Promise(resolve => setTimeout(resolve, 100));

        const moodButtons = document.querySelectorAll('#mood-selector button');
        const cozyButton = Array.from(moodButtons).find(b => b.getAttribute('data-mood') === 'Cozy');
        
        cozyButton.click();

        const movieCard = document.getElementById('movie-card');
        const initialMovieHTML = movieCard.innerHTML;

        const showAnotherButton = document.getElementById('show-another');
        showAnotherButton.click();

        assert.notStrictEqual(movieCard.innerHTML, initialMovieHTML);
    });
});

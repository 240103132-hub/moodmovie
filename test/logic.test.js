const { describe, it } = require('node:test');
const assert = require('node:assert');
const { filterByMood, shuffle, getNextMovie } = require('../logic');

describe('Mood Selection Logic', () => {
    const movies = [
        { title: 'Movie 1', mood: 'Cozy' },
        { title: 'Movie 2', mood: 'Thrilled' },
        { title: 'Movie 3', mood: 'Cozy' }
    ];

    it('should filter movies by mood', () => {
        const filtered = filterByMood(movies, 'Cozy');
        assert.strictEqual(filtered.length, 2);
        assert.strictEqual(filtered[0].title, 'Movie 1');
        assert.strictEqual(filtered[1].title, 'Movie 3');
    });

    it('should return empty array if no movies found for mood', () => {
        const filtered = filterByMood(movies, 'Laugh');
        assert.strictEqual(filtered.length, 0);
    });

    it('should shuffle movies', () => {
        const shuffled = shuffle(movies);
        assert.strictEqual(shuffled.length, 3);
        // Checking if it contains same elements
        const originalTitles = movies.map(m => m.title);
        shuffled.forEach(m => assert.ok(originalTitles.includes(m.title)));
    });

    it('should get next movie and manage sequence', () => {
        const moodMovies = filterByMood(movies, 'Cozy');
        // Initial state
        let { movie, nextSequence, nextIndex } = getNextMovie(moodMovies, [], 0);
        assert.ok(moodMovies.includes(movie));
        assert.strictEqual(nextSequence.length, 2);
        assert.strictEqual(nextIndex, 1);

        // Second movie
        let result2 = getNextMovie(moodMovies, nextSequence, nextIndex);
        assert.ok(moodMovies.includes(result2.movie));
        assert.strictEqual(result2.nextIndex, 2);
        assert.notStrictEqual(result2.movie, movie);

        // Reshuffle
        let result3 = getNextMovie(moodMovies, result2.nextSequence, result2.nextIndex);
        assert.strictEqual(result3.nextIndex, 1);
    });

    it('should handle mood with only 1 movie', () => {
        const movies = [{ title: 'Only One', mood: 'Alone' }];
        const moodMovies = filterByMood(movies, 'Alone');
        
        let { movie, nextSequence, nextIndex } = getNextMovie(moodMovies, [], 0);
        assert.strictEqual(movie.title, 'Only One');
        assert.strictEqual(nextIndex, 1);

        // Next call should restart
        let result2 = getNextMovie(moodMovies, nextSequence, nextIndex);
        assert.strictEqual(result2.movie.title, 'Only One');
        assert.strictEqual(nextIndex, 1);
    });

    it('should handle empty movie list in filterByMood', () => {
        assert.strictEqual(filterByMood([], 'Cozy').length, 0);
    });

    it('should handle shuffle with empty array', () => {
        assert.deepStrictEqual(shuffle([]), []);
    });
});

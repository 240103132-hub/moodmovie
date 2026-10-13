const { describe, it } = require('node:test');
const assert = require('node:assert');
const { movies, getMoviesByMood, getAllMoods } = require('../movieData');

describe('Movie Data', () => {
    it('should have between 30 and 50 movies', () => {
        assert.ok(movies.length >= 30);
        assert.ok(movies.length <= 50);
    });

    it('should have exactly 5 moods', () => {
        const moods = getAllMoods();
        assert.strictEqual(moods.length, 5);
        const expectedMoods = ['Cozy', 'Thrilled', 'Laugh', 'Wistful', 'Inspired'];
        expectedMoods.forEach(mood => assert.ok(moods.includes(mood)));
    });

    it('should have 6-10 movies per mood', () => {
        const moods = ['Cozy', 'Thrilled', 'Laugh', 'Wistful', 'Inspired'];
        moods.forEach(mood => {
            const moviesInMood = getMoviesByMood(mood);
            assert.ok(moviesInMood.length >= 6);
            assert.ok(moviesInMood.length <= 10);
        });
    });

    it('each movie should have required fields', () => {
        movies.forEach(movie => {
            assert.ok(movie.hasOwnProperty('title'));
            assert.ok(movie.hasOwnProperty('year'));
            assert.ok(movie.hasOwnProperty('synopsis'));
            assert.ok(movie.hasOwnProperty('why'));
            assert.ok(movie.hasOwnProperty('mood'));
        });
    });
});

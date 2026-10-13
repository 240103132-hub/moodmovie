const movies = require('./movies.json');
const { filterByMood } = require('./logic');

function getMoviesByMood(mood) {
    return filterByMood(movies, mood);
}

function getAllMoods() {
    return [...new Set(movies.map(movie => movie.mood))];
}

module.exports = {
    movies,
    getMoviesByMood,
    getAllMoods
};

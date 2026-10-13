function filterByMood(movies, mood) {
  return movies.filter(movie => movie.mood === mood);
}

function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function getNextMovie(currentMoodMovies, currentSequence, currentIndex) {
  if (!currentSequence || currentSequence.length === 0 || currentIndex >= currentSequence.length) {
    const newSequence = shuffle(currentMoodMovies);
    return { movie: newSequence[0], nextSequence: newSequence, nextIndex: 1 };
  }
  return { movie: currentSequence[currentIndex], nextSequence: currentSequence, nextIndex: currentIndex + 1 };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { filterByMood, shuffle, getNextMovie };
}

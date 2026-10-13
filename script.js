document.addEventListener('DOMContentLoaded', () => {
  fetch('movies.json')
    .then(response => response.json())
    .then(movies => {
      const moodButtons = document.querySelectorAll('#mood-selector button');
      const movieCard = document.getElementById('movie-card');
      const showAnotherButton = document.getElementById('show-another');
      
      let state = {
        currentMood: null,
        currentSequence: [],
        currentIndex: 0,
        moodMovies: []
      };

      function displayMovie(movie) {
        movieCard.innerHTML = `
          <h2>${movie.title} (${movie.year})</h2>
          <p>${movie.synopsis}</p>
          <p><em>${movie.why}</em></p>
        `;
        showAnotherButton.style.display = 'block';
      }

      moodButtons.forEach(button => {
        button.addEventListener('click', () => {
          const selectedMood = button.getAttribute('data-mood');
          if (state.currentMood === selectedMood) return;
          
          state.currentMood = selectedMood;
          state.moodMovies = filterByMood(movies, selectedMood);
          state.currentSequence = [];
          state.currentIndex = 0;
          
          if (state.moodMovies.length > 0) {
            const { movie, nextSequence, nextIndex } = getNextMovie(state.moodMovies, state.currentSequence, state.currentIndex);
            state.currentSequence = nextSequence;
            state.currentIndex = nextIndex;
            displayMovie(movie);
          } else {
            movieCard.innerHTML = '<p>No movies found for this mood.</p>';
            showAnotherButton.style.display = 'none';
          }
        });
      });

      showAnotherButton.addEventListener('click', () => {
        if (state.moodMovies.length > 0) {
          const { movie, nextSequence, nextIndex } = getNextMovie(state.moodMovies, state.currentSequence, state.currentIndex);
          state.currentSequence = nextSequence;
          state.currentIndex = nextIndex;
          displayMovie(movie);
        }
      });
    });
});

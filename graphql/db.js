let movies = [
  {
    id: 0,
    name: "Moana",
    score: 88
  },
  {
    id: 1,
    name: "Inception",
    score: 98
  },
  { id: 2, name: "Finding Nemo", score: 94 }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === String(id));
  return filteredMovies[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== String(id));
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};

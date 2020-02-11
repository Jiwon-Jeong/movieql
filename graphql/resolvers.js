import { getMovies, getById, addMovie, deleteMovie } from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit, rating, genre }) => getMovies(limit, rating, genre)
  }
};

export default resolvers;

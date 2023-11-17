import React from 'react';
import {Movie} from '../../types';

interface MovieListProps {
  movies: Movie[];
  onEdit: (id: number, newTitle: string) => void;
  onDelete: (id: number) => void;
}

const MovieList: React.FC<MovieListProps> = React.memo(({movies, onEdit, onDelete}) => {
  return (
    <div className="movies-container">
      <h3>To watch list:</h3>
      {movies.map((movie) => (
        <div className="movie-item d-flex mb-3" key={movie.id}>
          <input
            className="form-control"
            type="text"
            value={movie.title}
            onChange={(e) => onEdit(movie.id, e.target.value)}
          />
          <button className="btn btn-primary w-25" onClick={() => onDelete(movie.id)}>delete</button>
        </div>
      ))}
    </div>
  );
});

export default MovieList;


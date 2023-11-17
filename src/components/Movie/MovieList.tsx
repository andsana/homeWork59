import React from 'react';
import Movie from './Movie';
import {Character} from '../../types';

interface MovieListProps {
  movies: Character[];
  onEdit: (event: React.ChangeEvent<HTMLInputElement>,id: number) => void;
  onDelete: (id: number) => void;
}

const MovieList: React.FC<MovieListProps> = ({movies, onEdit, onDelete}) => {
  return (
    <div className="movies-container">
      {movies.length > 0 && <h3>To watch list:</h3>}
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          movie={movie}
          onEdit={(event) => onEdit(event, movie.id)}
          onDelete={() => onDelete(movie.id)}/>
      ))}
    </div>
  );
};

export default MovieList;


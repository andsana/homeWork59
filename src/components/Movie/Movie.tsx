import {Character} from '../../types';
import React from 'react';

interface Props {
  movie: Character;
  onEdit: React.ChangeEventHandler<HTMLInputElement>;
  onDelete: React.MouseEventHandler<HTMLButtonElement>;
}

const Movie: React.FC<Props> = ({ movie, onEdit, onDelete }) => {
  return (
    <div className="movie-item d-flex mb-3" key={movie.id}>
      <input
        className="form-control"
        type="text"
        value={movie.name}
        onChange={onEdit}
      />
      <button className="btn btn-primary w-25" onClick={onDelete}>
        delete
      </button>
    </div>
  );
};

export default Movie;
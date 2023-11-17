import React from 'react';

interface Props {
  newMovie: string;
  addMovie: () => void;
  inputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const MovieForm: React.FC<Props> = ({ newMovie, addMovie, inputChange, formSubmit }) => {
  return (
    <form className="d-flex mb-3" onSubmit={formSubmit}>
      <input
        className="form-control"
        type="text"
        value={newMovie}
        onChange={inputChange}
      />
      <button className="btn btn-primary w-25" type="submit" onClick={addMovie}>
        Add
      </button>
    </form>
  );
};

export default MovieForm;

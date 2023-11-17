import React, {useState} from 'react';
import MovieList from './components/movie/MovieList';
import MovieForm from './components/movie/MovieForm';
import {Movie} from './types';

function App(){
  const [movies, setMovies] = useState<Movie[]>([]);
  const [newMovie, setNewMovie] = useState('');

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addMovie();
  };

  const addMovie = () => {

  };

  const editMovie = (id: number, newTitle: string) => {

  };

  const deleteMovie = (id: number) => {

  };

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

  };

  return (
    <div className="container">
      <MovieForm
        newMovie={newMovie}
        addMovie={addMovie}
        inputChange={inputChange}
        formSubmit={formSubmit}
      />
      <MovieList
        movies={movies}
        onEdit={editMovie}
        onDelete={deleteMovie}
      />
    </div>
  );
}

export default App;


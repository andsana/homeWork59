import React, {useState} from 'react';
import MovieList from './components/Movie/MovieList';
import MovieForm from './components/Movie/MovieForm';
import Joke from './components/Joke/Joke';
import {Character} from './types';

function App() {
  const [movies, setMovies] = useState<Character[]>([]);
  const [newMovie, setNewMovie] = useState('');

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addMovie();
  };

  const addMovie = () => {
    if (newMovie !== '') {
      setMovies(prevMovies => {
        const id = Math.floor(Math.random() * 100);
        const updatedMovies: Character[] = [...prevMovies, {id, name: newMovie, isEditing: false}];
        setNewMovie('');
        return updatedMovies;
      });
    }
  };

  const editMovie = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const newMovie = event.target.value;
    setMovies((prevMovies) =>
      prevMovies.map((movie) => {
        if (movie.id === id) {
          return { ...movie, name: newMovie };
        }
        return movie;
      }));
  };

  const deleteMovie = (id: number) => {
    setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
  };

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMovie(event.target.value);
  };

  return (
    <div className="container row mt-3">
      <div className="col-4 me-3">
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
      <Joke/>
    </div>

  );
}

export default App;


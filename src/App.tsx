import React, {useState} from 'react';
import {Movie} from './types';
import MovieList from './components/Movie/MovieList';
import MovieForm from './components/Movie/MovieForm';
import Joke from './components/Joke/Joke';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [newMovie, setNewMovie] = useState('');

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addMovie();
  };

  const addMovie = () => {
    if (newMovie !== '') {
      setMovies(prevMovies => {
        const id = Math.floor(Math.random() * 100);
        const updatedMovies: Movie[] = [...prevMovies, {id, title: newMovie, isEditing: false}];
        setNewMovie('');
        return updatedMovies;
      });
    }
  };

  const editMovie = (id: number, newTitle: string) => {
    setMovies(prevMovies => {
      const updatedMovies: Movie[] = prevMovies.map(movie =>
        movie.id === id ? {...movie, title: newTitle} : movie
      );
      return updatedMovies;
    });
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


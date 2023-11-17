import React, {useState} from 'react';
import {Movie} from './types';
import MovieList from './components/movie/MovieList';
import MovieForm from './components/movie/MovieForm';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [newMovie, setNewMovie] = useState('');

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addMovie();
  };

  const addMovie = () => {
    if (newMovie.trim() !== '') {
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


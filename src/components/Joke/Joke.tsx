import {useState} from 'react';

const Joke = () => {
  const [joke, setJoke] = useState('');
  const url = 'https://api.chucknorris.io/jokes/random';

  const fetchJoke = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setJoke(data.value);
      }
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  return (
    <div className="d-flex gap-3 col-4 align-items-start">
      <div>
        <h3>Chuck Norris Jokes:</h3>
        <p>{joke}</p>
      </div>
      <button className="btn btn-primary ms-auto flex-shrink-0" onClick={fetchJoke}>Get New Joke</button>
    </div>
  );
};

export default Joke;

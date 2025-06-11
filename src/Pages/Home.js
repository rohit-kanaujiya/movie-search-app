import React, { useState, useRef } from 'react';
import { searchMovies } from '../api';
import SearchBar from '../components/SearchBar';
import MovieGrid from '../components/MovieGrid';
import LoadingPlaceholder from '../components/LoadingPlaceholder';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const cacheRef = useRef({});

  const fetchMovies = async (query, year = '') => {
    if (!query) {
      setMovies([]);
      return;
    }

    const cacheKey = `${query}_${year}`;

    setError(null);
    setLoading(true);

    // Check cache
    if (cacheRef.current[cacheKey]) {
      setMovies(cacheRef.current[cacheKey]);
      setLoading(false);
      return;
    }

    try {
      const data = await searchMovies(query, 1, year);
      if (data.Response === 'True') {
        setMovies(data.Search);
        // Cache result
        cacheRef.current[cacheKey] = data.Search;
      } else {
        setError(data.Error);
        setMovies([]);
      }
    } catch (err) {
      setError('Unable to fetch data.');
    }

    setLoading(false);
  };

  return (
    <div>
      <SearchBar onSearch={fetchMovies} />
      {loading && <LoadingPlaceholder />}
      {error && <div className="error-message">{error}</div>}
      <MovieGrid movies={movies} />
    </div>
  );
};

export default Home;


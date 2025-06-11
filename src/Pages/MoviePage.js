import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../api';
import LoadingPlaceholder from '../components/LoadingPlaceholder';

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const cacheRef = useRef({});

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);

    
      if (cacheRef.current[id]) {
        setMovie(cacheRef.current[id]);
        setLoading(false);
        return;
      }

      try {
        const data = await getMovieDetails(id);
        setMovie(data);
        cacheRef.current[id] = data; 
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }

      setLoading(false);
    };

    fetchDetails();
  }, [id]);

  if (loading) return <LoadingPlaceholder />;

  if (!movie) return <div className="error-message">Movie not found.</div>;

  return (
    <div className="movie-detail">
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
    </div>
  );
};

export default MoviePage;


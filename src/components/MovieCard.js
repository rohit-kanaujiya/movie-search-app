import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Check if this movie is already in favorites on mount
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const exists = favorites.some((fav) => fav.imdbID === movie.imdbID);
    setIsFavorite(exists);
  }, [movie.imdbID]);

  // Toggle favorite status
  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const updatedFavorites = isFavorite
      ? favorites.filter((fav) => fav.imdbID !== movie.imdbID)
      : [...favorites, movie];

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.imdbID}`}>
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200x300?text=No+Image'}
          alt={movie.Title}
        />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </Link>
      <button onClick={toggleFavorite} className="favorite-button">
        {isFavorite ? '★ Remove Favorite' : '☆ Add to Favorites'}
      </button>
    </div>
  );
};

export default MovieCard;


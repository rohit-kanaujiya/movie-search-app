import React, { useEffect, useState } from 'react';
import MovieGrid from '../components/MovieGrid';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(favs);
  }, []);

  return (
    <div>
      <h2>Your Favorite Movies</h2>
      {favorites.length > 0 ? (
        <MovieGrid movies={favorites} />
      ) : (
        <p>No favorite movies yet.</p>
      )}
    </div>
  );
};

export default Favorites;

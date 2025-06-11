import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import MoviePage from './Pages/MoviePage';
import Favorites from './Pages/Favorites';
import NotFound from './Pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => (
  <ErrorBoundary>
    <Router>
      <div className="app-container">
        {/* Navigation */}
        <nav style={{ marginBottom: '1rem' }}>
          <Link to="/" style={{ marginRight: '1rem' }}>🏠 Home</Link>
          <Link to="/favorites">⭐ Favorites</Link>
        </nav>

     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  </ErrorBoundary>
);

export default App;



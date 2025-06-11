import React, { useState } from 'react';
import debounce from 'lodash.debounce';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [year, setYear] = useState('');

  const handleDebouncedSearch = debounce((query, year) => {
    onSearch(query, year);
  }, 500);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleDebouncedSearch(value, year);
  };

  const handleYearChange = (e) => {
    const selectedYear = e.target.value;
    setYear(selectedYear);
    handleDebouncedSearch(searchTerm, selectedYear);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setYear('');
    onSearch('', '');
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <select value={year} onChange={handleYearChange}>
        <option value="">All Years</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
      {(searchTerm || year) && <button onClick={clearSearch}>Clear</button>}
    </div>
  );
};

export default SearchBar;

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../css/GamerStyles.css';

const GamerSearch = () => {
  const { setSearch } = useContext(AppContext);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="searchgamer">
      <input
        className="gamersearch"
        onChange={handleSearch}
        type="text"
        placeholder="Search for a Gamer..."
      />
    </div>
  );
};

export default GamerSearch;

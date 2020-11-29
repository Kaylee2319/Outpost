import React, { useContext, useEffect } from 'react';
import Gamers from './Gamers';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import NavBar from './NavBar';
import Footer from './Footer';
import GamerSearch from './GamerSearch';
import swal from 'sweetalert';
import '../css/GamerStyles.css';

const GamersList = () => {
  const {
    setGamers,
    search,
    filteredGamers,
    setFilteredGamers,
    loading
  } = useContext(AppContext);

  useEffect(() => {
    axios
      .get('/api/allusers')
      .then((response) => {
        setGamers(response.data);
        setFilteredGamers(response.data);
      })
      .catch((error) => {
        swal(`Oops!`, 'Something went wrong.');
      });
  }, [setGamers, setFilteredGamers, search, loading]);

  return (
    <div className="searchcontainer">
      <NavBar />
      <div className="searchgamer">
        <GamerSearch />
      </div>
      <div className="gamerslist">
        <Gamers users={filteredGamers} />
      </div>
      <Footer />
    </div>
  );
};

export default GamersList;

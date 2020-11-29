import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [gamer, setGamer] = useState([]);
  const [gamers, setGamers] = useState([]);
  const [filteredGamers, setFilteredGamers] = useState([]);
  const user = sessionStorage.getItem('user');

  useEffect(() => {
    if (user && !currentUser) {
      axios
        .get(`/api/users/profile`, {
          withCredentials: true
        })
        .then(({ data }) => {
          setCurrentUser(data);
        })
        .catch((error) => {
          swal(`Oops!`, error.toString());
        });
    }
  }, [currentUser, user]);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        loading,
        setLoading,
        search,
        setSearch,
        gamer,
        setGamer,
        gamers,
        setGamers,
        filteredGamers,
        setFilteredGamers
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };

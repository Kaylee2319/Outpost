import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [contextMessage, setContextMessage] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const user = sessionStorage.getItem('user');

  const contextMethod = () => {
    setContextMessage('Hello from client/src/context/AppContext.jsx');
  };

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
        contextMessage,
        contextMethod,
        loading,
        setLoading
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };

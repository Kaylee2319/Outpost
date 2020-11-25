import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const SecureRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(AppContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !currentUser ? <Redirect to="/login" /> : <Component {...routeProps} />
      }
    />
  );
};

export default SecureRoute;

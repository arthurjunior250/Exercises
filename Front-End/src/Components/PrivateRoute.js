import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    // Retrieve authentication status from local storage
    const isAuthenticated = !!localStorage.getItem('auth'); // Convert token to boolean value

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/sign-in" />
                )
            }
        />
    );
};

export default PrivateRoute;

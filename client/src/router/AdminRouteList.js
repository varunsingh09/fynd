import React from "react";
import { Route, Switch } from "react-router-dom";
import NoMatch from "./../modules/Common/NoMatch";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./../modules/Users/Dashboard"
import AddMovies from "./../modules/Movies/AddMovies"
import ViewMovies from "./../modules/Movies/ViewMovies"

const index = () => {
    const routes = [
        {
            path: ["/users/dashboard"],
            exact: true,
            Component: Dashboard,
        },
        {
            path: ["/movies/create","/movies/create/:Id"],
            exact: true,
            Component: AddMovies,
        },
        {
            path: ["/","/movies/view"],
            exact: true,
            Component: ViewMovies,
        },
       
    ];

    return (
        <Switch>
            {routes.map(({ path, exact, Component }) => (
                <PrivateRoute
                    restricted={true}
                    path={path}
                    component={Component}
                    key={path}
                    exact={exact}
                    render={(props) => <Component {...props} />}
                />
            ))}
            <Route render={(props) => <NoMatch {...props} />} />
        </Switch>
    );
};
export default index;

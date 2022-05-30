import React from "react"
import { Route, Switch } from "react-router-dom"

import AdminRouteList from "./AdminRouteList"
import PublicRoute from './PublicRoute';
import NoMatch from "./../modules/Common/NoMatch"
import Default from "./../layouts/Defaults"
import Login from "./../modules/Users/Login"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <Switch>
             <PublicRoute restricted={false} exact path={["/users/login"]} component={Login} />
            <Route path='/:path?/:path?/:path?/:path?' exact>
                <Default>
                    <Switch>
                        <AdminRouteList />
                    </Switch>
                </Default>

            </Route>
            <Route render={(props) => <NoMatch {...props} />} />
        </Switch>

    )

}


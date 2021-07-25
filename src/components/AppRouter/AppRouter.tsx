import React from "react";
import { Route, Switch } from "react-router-dom";
import { PATHS } from "utils/appConstants";

import { Home, ContactUs, Menu, NotFoundPage, Login } from "pages";

const AppRouter = () => (
  <Switch>
    <Route exact path={PATHS.home} component={Home} />
    <Route path={PATHS.contact} component={ContactUs} />
    <Route path={PATHS.menu} component={Menu} />
    <Route path={PATHS.login} component={Login} />
    <Route path="*" component={NotFoundPage} />
  </Switch>
);

export default AppRouter;

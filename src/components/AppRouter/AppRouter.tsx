import React from "react";
import { Route, Switch } from "react-router-dom";
import { PATHS } from "utils/appConstants";

import { Home, ContactUs, Menu, NotFoundPage, TestHome } from "pages";

const AppRouter = () => (
  <Switch>
    <Route exact path={PATHS.home} component={TestHome} />
    <Route path={PATHS.contact} component={ContactUs} />
    <Route path={PATHS.menu} component={Menu} />
    <Route path="*" component={NotFoundPage} />
  </Switch>
);

export default AppRouter;

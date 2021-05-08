import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PATHS } from "utils/appConstants";

import { Home, ContactUs, Menu, NotFoundPage } from "pages";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={PATHS.home} component={Home} />
      <Route path={PATHS.contact} component={ContactUs} />
      <Route path={PATHS.menu} component={Menu} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;

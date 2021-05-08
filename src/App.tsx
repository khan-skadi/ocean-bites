import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { PATHS } from "utils/appConstants";

import AppRouter from "components/AppRouter";

const App = (): JSX.Element => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.pathname === "/") {
      history.push(PATHS.home);
    }
  }, []); // eslint-disable-line

  return <AppRouter />;
};

export default App;

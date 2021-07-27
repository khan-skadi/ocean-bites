import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectModal, selectAlertProps } from "store";
import { PATHS } from "utils/appConstants";

// Components
import { AuthContextProvider } from "context/AuthContext";
import AppRouter from "components/AppRouter";
import ModalManager from "components/Modals/ModalManager";
import Alert from "components/Alert";

const App = (): JSX.Element => {
  const location = useLocation();
  const history = useHistory();
  const currentModal = useSelector(selectModal);
  const alertProps = useSelector(selectAlertProps);
  const isModalNull = currentModal.type === "";

  useEffect(() => {
    if (location.pathname === "/") {
      history.push(PATHS.home);
    }
  }, []); // eslint-disable-line

  return (
    <AuthContextProvider>
      {!isModalNull ? <ModalManager /> : null}
      <Alert {...alertProps} />
      <AppRouter />
    </AuthContextProvider>
  );
};

export default App;

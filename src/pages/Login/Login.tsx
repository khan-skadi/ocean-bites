import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useAuthContext } from "context/AuthContext";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexFlow: "column wrap",
    width: "100%",
    padding: "50px",
  },
  titleText: {
    fontFamily: "Hatton",
    fontSize: "24px",
    color: theme.palette.primary.light,
  },
  form: {
    "& > *": {
      margin: "10px 0",
    },
  },
  submitButton: {
    background: theme.palette.primary.light,
    color: "#fff",
  },
}));

const Login = () => {
  const classes = useStyles();
  const { currentUser, login } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(email, password);
  };

  console.log('currentUser: ', currentUser);

  return (
    <div className={classes.root}>
      <p className={classes.titleText}>Login to Ocean Bites</p>

      <form className={classes.form} onSubmit={onSubmit}>
        <TextField
          variant="outlined"
          placeholder="Email"
          name="email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <TextField
          variant="outlined"
          placeholder="Password"
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <Button className={classes.submitButton} variant="contained" type="submit" fullWidth>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;

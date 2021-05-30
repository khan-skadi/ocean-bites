import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",

    "&::-webkit-scrollbar": {
      display: "none",
    },

    [theme.breakpoints.down("xs")]: {
      margin: "0 auto",
      flexWrap: "nowrap",
      overflowX: "auto",
    },
  },
}));

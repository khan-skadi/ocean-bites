import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  card: {
    [theme.breakpoints.down("xs")]: {
      flex: "0 0 auto",
      width: "210px",
    },
  },
  wrapper: {
    height: "100%",

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
    },
  },
}));

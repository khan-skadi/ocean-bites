import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
  },
  subCategoryWrapper: {
    marginTop: "60px",

    "&:not(:first-child)": {
      marginTop: "100px",
    },
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: theme.palette.primary.light,
    fontFamily: "Grotesk",
    fontWeight: 600,
    fontSize: "24px",
    textTransform: "capitalize",
    textAlign: "center",
    letterSpacing: "0.12em",
  },
  subtitle: {
    color: theme.palette.primary.light,
    fontWeight: 400,
    fontFamily: "Grotesk",
    fontSize: "21px",
    textAlign: "center",
  },
  timeSheet: {
    color: theme.palette.secondary.main,
    fontFamily: "Grotesk",
    fontWeight: 400,
    fontSize: "18px",
    textTransform: "capitalize",
    margin: 0,
    marginTop: "-5px",
  },
  gridWrapper: {
    marginTop: "20px",
  },
  additionalContainer: {
    margin: "100px 0",
  },
  additionalWrapper: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",

    "& .MuiTypography-root": {
      fontFamily: "Grotesk",
      color: theme.palette.secondary.main,

      "&:first-child": {
        fontSize: "24px",
        fontWeight: 600,
      },

      "&:last-child": {
        fontSize: "16px",
        fontWeight: 400,
      },
    },
  },
  marginBottom: {
    marginBottom: "100px",
  },
  imageWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "center",

    "& img": {
      width: "450px",
      marginTop: "30px",
      marginBottom: "-60px",

      [theme.breakpoints.down("xs")]: {
        width: "250px",
      },
    },
  },
}));

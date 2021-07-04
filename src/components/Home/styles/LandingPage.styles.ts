import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hero: {
      position: "relative",
    },
    heroCTA: {
      height: "98vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      flexFlow: "column wrap",
      marginLeft: "300px",

      [theme.breakpoints.down("sm")]: {
        marginLeft: 0,
        alignItems: "center",
      },

      "& div:first-child": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "column wrap",
        textAlign: "center",
        background: "rgba(255, 255, 255, 0.4)",
        padding: "40px 60px",
        borderRadius: "5px",

        [theme.breakpoints.down("xs")]: {
          padding: "30px 50px",
        },
      },
    },
    textCTA: {
      fontFamily: "Grotesk",
      fontSize: "36px",
      color: "#000",
      textTransform: "uppercase",

      [theme.breakpoints.down("xs")]: {
        fontSize: "22px",
      },

      "& span": {
        fontWeight: 700,
      },
    },
    buttonCTA: {
      backgroundColor: theme.palette.primary.light,
      color: "#fff",
      minWidth: "300px",
      fontSize: "20px",

      [theme.breakpoints.down("xs")]: {
        minWidth: "200px",
        fontSize: "18px",
      },

      "&:hover": {
        textDecoration: "none",
        backgroundColor: theme.palette.primary.light,
        opacity: 0.8,
      },
    },
    clearFix: {
      background: "rgb(242, 244, 234)",

      "&:after": {
        content: '""',
        clear: "both",
        display: "table",
      },
    },
    embedWrapper: {
      width: "100%",
      maxWidth: "600px",
    },
  })
);

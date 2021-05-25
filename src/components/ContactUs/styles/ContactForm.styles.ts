import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    text: {
      display: "flex",
      alignItems: "center",
      marginBottom: "30px",

      "& .MuiTypography-root": {
        fontFamily: "Grotesk",
        fontSize: "16px",
        fontWeight: 600,
        color: "#000",
      },
    },
    row: {
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "space-between",
      alignItems: "center",
    },
    submitButton: {
      borderRadius: 0,
      textTransform: "uppercase",
      fontFamily: "Grotesk",
      fontSize: "18px",
      fontWeight: 600,
      background: theme.palette.primary.light,
    },
    halfWidthLeft: {
      width: "100%",
      marginRight: "15px",
    },
    halfWidthRight: {
      width: "100%",
      marginLeft: "15px",
    },
  })
);

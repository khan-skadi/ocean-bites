import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  onTheMenu: {
    background: theme.palette.secondary.light,
    padding: "15px 0",

    [theme.breakpoints.up("md")]: {
      paddingTop: 100,
      paddingBottom: 40,
    },
  },
  onTheMenuWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  onTheMenuTitle: {
    fontFamily: "Grotesk",
    fontWeight: 600,
    fontSize: "18px",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    color: theme.palette.primary.light,
    textAlign: "center",

    [theme.breakpoints.up("sm")]: {
      fontSize: "26px",
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "53.3px",
      margin: 0,
    },
  },
  menuCategoriesWrapper: {
    background: "#000",
  },
  menuList: {
    margin: 0,
    padding: 0,
    listStyle: "none",

    "& li": {
      float: "left",
      width: "33.3333%",
      height: "150px",

      [theme.breakpoints.up("sm")]: {
        height: 450,
      },
    },
  },
  intersection: {
    maxWidth: "100%",
    height: "150px",
    overflow: "hidden",
    position: "relative",

    [theme.breakpoints.up("sm")]: {
      minHeight: "600px",
    },
  },
  menuListItem2: {
    marginTop: "200px",

    [theme.breakpoints.down("xs")]: {
      marginTop: "50px",
    },
  },
  menuItem: {
    width: "100%",
    height: "100%",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  menuItemLink: {
    "&:hover": {
      textDecoration: "none",
    },
  },
  menuItemInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100px",
    height: "50px",
    textAlign: "center",
    border: "1px solid #fff",
    borderRadius: "50%",

    "&:hover": {
      background: "rgba(0, 0, 0, 0.7)",
    },

    [theme.breakpoints.up("sm")]: {
      width: 295,
      height: 140,
    },

    "& p": {
      fontFamily: "Hatton",
      fontWeight: 500,
      fontSize: "12px",
      color: "#fff",
      margin: 0,
      padding: 0,
      width: "100%",

      "&:hover": {
        color: theme.palette.primary.main,
      },

      [theme.breakpoints.up("sm")]: {
        width: "90%",
        fontSize: "22px",
      },
    },
  },
}));

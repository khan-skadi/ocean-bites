import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hero: {
      position: "relative",
    },
    heroWrapper: {
      maxWidth: "100%",
      height: "150px",
      position: "absolute",

      [theme.breakpoints.up("sm")]: {
        height: "600px",
      },

      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center right",
        filter: "brightness(95%)",
      },
    },
    heroCtaWrapper: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 140,
      right: 10,

      [theme.breakpoints.up("sm")]: {
        top: 580,
        right: 20,
      },
    },
    heroCta: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "140px",
      height: "60px",
      textAlign: "center",
      border: "1px solid #fff",
      borderRadius: "50%",

      [theme.breakpoints.up("sm")]: {
        width: 295,
        height: 140,
      },

      "& p": {
        fontFamily: "Hatton",
        fontWeight: 500,
        fontSize: "12px",
        color: "#000",
        margin: 0,
        padding: 0,
        width: "100%",

        [theme.breakpoints.up("sm")]: {
          width: "90%",
          fontSize: "22px",
        },
      },
    },
    clearFix: {
      "&:after": {
        content: '""',
        clear: "both",
        display: "table",
      },
    },
    ourStory: {
      position: "relative",
      background: "#000",
      top: 150,
      padding: "15px 0",

      [theme.breakpoints.up("sm")]: {
        top: 600,
      },

      [theme.breakpoints.up("md")]: {
        paddingTop: "150px",
      },
    },
    ourStoryWrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    ourStoryTitle: {
      fontSize: "18px",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      color: "#fff",
      fontFamily: "Grotesk",
      marginRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),

      [theme.breakpoints.up("sm")]: {
        marginRight: theme.spacing(4),
        paddingLeft: theme.spacing(4),
        fontSize: "26px",
      },

      [theme.breakpoints.up("md")]: {
        fontSize: "80px",
      },
    },
    ourStoryText: {
      color: "#fff",
      fontFamily: "Hatton",

      [theme.breakpoints.up("md")]: {
        margin: "0 auto",
      },

      "& p": {
        fontSize: "10px",
        margin: 0,
        marginTop: theme.spacing(0.5),

        [theme.breakpoints.up("sm")]: {
          fontSize: "16px",
          marginRight: theme.spacing(4),
        },

        [theme.breakpoints.up("md")]: { fontSize: "26px" },

        "&:last-of-type": {
          marginTop: "20px",

          [theme.breakpoints.up("md")]: { marginTop: "50px" },
        },
      },
    },
    ourStoryImageWrapper: {
      maxWidth: "100%",
      height: "150px",
      position: "relative",
      top: 150,
      background: "#000",

      [theme.breakpoints.up("sm")]: {
        height: "600px",
        top: 600,
      },

      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center right",
        filter: "brightness(95%)",
      },
    },
    onTheMenu: {
      position: "relative",
      background: "#000",
      top: 150,
      padding: "15px 0",

      [theme.breakpoints.up("sm")]: {
        top: 600,
      },

      [theme.breakpoints.up("md")]: {
        paddingTop: 200,
        paddingBottom: 40,
      },
    },
    onTheMenuWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    onTheMenuTitle: {
      fontSize: "18px",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      color: "#fff",
      fontFamily: "Grotesk",
      textAlign: "center",

      [theme.breakpoints.up("sm")]: {
        fontSize: "26px",
      },

      [theme.breakpoints.up("md")]: {
        fontSize: "80px",
        margin: 0,
      },
    },
    menuCategoriesWrapper: {
      position: "relative",
      top: 150,
      background: "#000",

      [theme.breakpoints.up("sm")]: {
        top: 600,
      },
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
          height: 400,
        },
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
    menuItemInner: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100px",
      height: "50px",
      textAlign: "center",
      border: "1px solid #fff",
      borderRadius: "50%",

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

        [theme.breakpoints.up("sm")]: {
          width: "90%",
          fontSize: "22px",
        },
      },
    },
    promo: {
      position: "relative",
      background: "#000",
      top: 150,
      padding: "15px 0",

      [theme.breakpoints.up("sm")]: {
        top: 600,
      },

      [theme.breakpoints.up("md")]: {
        paddingTop: 40,
        paddingBottom: 150,
      },
    },
    promoWrapper: {
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "center",
      alignItems: "center",

      "& p": {
        margin: 0,
        fontSize: "18px",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        color: "#fff",
        fontFamily: "Grotesk",

        [theme.breakpoints.up("sm")]: {
          fontSize: "26px",
        },

        [theme.breakpoints.up("md")]: {
          fontSize: "40px",
        },
      },
    },
    iceCreamWrapper: {
      position: "relative",
      top: 150,
      background: "#fff",
      display: "flex",

      [theme.breakpoints.up("sm")]: {
        top: 600,
        paddingTop: "150px",
        paddingBottom: "150px",
      },
    },
    iceCreamImageWrapper: {
      position: "absolute",
      width: "249px",
      top: "48px",
      left: "-9px",

      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center right",
      },

      [theme.breakpoints.up("md")]: {
        width: "1000px",
        top: 150,
        left: 50,
      },
    },
    fillerIceCream: {
      minWidth: "230px",

      [theme.breakpoints.up("md")]: {
        minWidth: "55vw",
      },
    },
    iceCreamDescWrapper: {
      position: "relative",

      "& p": {
        fontSize: "12px",
        marginRight: "10px",
        color: "#000",

        "&:not(:first-child)": {
          textAlign: "center",
        },
      },

      "& blockquote": {
        color: "#000",
        fontFamily: "Hatton",
        fontSize: "10px",
        textAlign: "end",
        marginTop: "30px",
        marginInlineStart: "2px",
        marginInlineEnd: "10px",
        marginBlockEnd: "0.3em",
      },

      [theme.breakpoints.up("md")]: {
        "& p": {
          fontFamily: "Grotesk",
          fontSize: "36px",

          "&:nth-of-type(3)": {
            width: "80%",
            marginLeft: "35px",
            textAlign: "left",
          },
        },

        "& blockquote": {
          marginTop: "150px",
          fontSize: "22px",
          marginLeft: "395px",
          marginInlineEnd: "40px",
        },
      },
    },
    small: {
      fontFamily: "Hatton",
      display: "inherit",
      fontSize: "10px",
      textAlign: "end",
      marginRight: "10px",

      [theme.breakpoints.up("md")]: {
        fontSize: "18px",
        marginRight: "40px",
      },
    },
    iceCreamTitle: {
      fontSize: "16px !important",
      textTransform: "uppercase",
      textAlign: "center",

      [theme.breakpoints.up("md")]: {
        fontSize: "60px !important",
        fontWeight: 500,
      },
    },
    reviews: {
      position: "relative",
      background: "#fff",
      top: 150,
      padding: "15px 0",
      color: "#000",

      [theme.breakpoints.up("sm")]: {
        top: 600,
        paddingTop: "300px",
      },
    },
    reviewsWrapper: {
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "center",
      alignItems: "center",

      "& p": {
        margin: 0,
        fontSize: "18px",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        color: "#000",
        fontWeight: 600,
        fontFamily: "Grotesk",

        [theme.breakpoints.up("sm")]: {
          fontSize: "26px",
        },

        [theme.breakpoints.up("md")]: {
          fontSize: "80px",
          letterSpacing: 6.3,
          fontWeight: 600,
          paddingBottom: "50px",
        },
      },
    },
    reviewsInnerWrapper: {
      position: "relative",
      top: 150,
      background: "#fff",
      display: "flex",
      width: "100%",
      paddingLeft: "15px",
      paddingRight: "15px",

      [theme.breakpoints.up("sm")]: {
        top: 600,
      },
    },
    review: {
      display: "flex",
      flexFlow: "column wrap",
      flexBasis: "33.3333%",
      margin: "0 5px",

      [theme.breakpoints.up("md")]: {
        paddingLeft: "50px",
        paddingRight: "50px",
        marginBottom: "300px",
      },
    },
    reviewTitle: {
      textTransform: "uppercase",
      fontSize: "11px",
      color: "#000",

      [theme.breakpoints.up("md")]: {
        fontSize: "26px",
        fontWeight: 500,
      },
    },
    reviewText: {
      fontSize: "11px",
      color: "#000",

      [theme.breakpoints.up("md")]: {
        fontSize: "26px",
        fontWeight: 400,
        margin: 0,
      },
    },
    footerImageWrapper: {
      maxWidth: "100%",
      height: "150px",
      position: "relative",
      top: 150,
      background: "#000",

      [theme.breakpoints.up("sm")]: {
        height: "600px",
        top: 600,
      },

      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center right",
        filter: "brightness(95%)",
      },
    },
    footer: {
      position: "relative",
      background: "#000",
      color: "#fff",
      top: 150,
      padding: "40px 0 80px",

      [theme.breakpoints.up("sm")]: {
        top: 600,
        padding: "100px 0 300px",
      },
    },
    footerWrapper: {
      display: "flex",
      alignItems: "center",
      flexFlow: "row wrap",
      marginLeft: "30px",

      [theme.breakpoints.up("sm")]: {
        justifyContent: "stretch",
        flexFlow: "row wrap",
        marginLeft: "30px",
      },

      [theme.breakpoints.up("md")]: {
        justifyContent: "stretch",
        flexFlow: "row nowrap",
        marginLeft: "50px",
      },
    },
    footerTitle: {
      fontSize: "28px",
      fontWeight: 600,
      fontFamily: "Grotesk",
      textTransform: "uppercase",
      width: "50%",

      "& p": {
        margin: 0,
      },

      [theme.breakpoints.up("sm")]: {
        width: "35%",
        fontSize: "40px",
      },

      [theme.breakpoints.up("md")]: {
        fontSize: "60px !important",
        width: "25%",
      },
    },
    footerSectionWrapper: {
      display: "flex",
      flexFlow: "column wrap",

      [theme.breakpoints.up("sm")]: {
        flexFlow: "row wrap",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      },

      [theme.breakpoints.up("md")]: {
        flexFlow: "row nowrap",
        justifyContent: "space-evenly",
        width: "100%",
      },
    },
    footerSection: {
      margin: "20px 0",

      [theme.breakpoints.up("sm")]: {
        margin: 0,
        marginTop: "30px",
        display: "flex",
        flexFlow: "column wrap",
      },

      [theme.breakpoints.up("md")]: {
        display: "block",
      },

      "& p": {
        margin: 0,
        fontFamily: "Grotesk",
        fontSize: "14px",
      },
    },
    footerSectionTitle: {
      fontWeight: 600,

      [theme.breakpoints.up("md")]: {
        fontSize: "26px !important",
      },
    },
    footerSectionText: {
      fontWeight: 400,

      [theme.breakpoints.up("md")]: {
        fontSize: "26px !important",
      },
    },
    fillerBlack: {
      width: "100%",
      height: "300px",
      background: "#000",
      position: "relative",
      top: "600px",

      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  })
);

import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hero: {
      position: "relative",
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

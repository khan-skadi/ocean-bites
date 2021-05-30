import React from "react";
import { useScrollTrigger, Zoom, makeStyles, Theme, Fab } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    padding: "0 20px 20px 0",

    "& button": {
      background: theme.palette.primary.light,
    },
  },
}));

interface Props {
  children: React.ReactElement;
}

function ZoomIn(props: Props) {
  const { children } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window || undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export default function ScrollTop(props: Props) {
  return (
    <ZoomIn {...props}>
      <Fab color="secondary" size="small" aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
      </Fab>
    </ZoomIn>
  );
}

import React, { FC } from "react";
import { Link } from "@material-ui/core";
import { GLOBALS } from "utils/appConstants";

import { useStyles } from "./styles/InstagramCard.styles";

interface Props {
  name: string;
  src: string;
}

const InstagramCard: FC<Props> = ({ name, src }) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <Link component="a">
        <a href={GLOBALS.instagramLink} target="_blank" rel="noopener noreferrer">
          <div className={classes.wrapper}>
            <img src={src} alt={name} />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default InstagramCard;

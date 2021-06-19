import React, { FC } from "react";
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
      <a href={GLOBALS.instagramLink} target="_blank" rel="noopener noreferrer">
        <div className={classes.wrapper}>
          <img src={src} alt={name} />
        </div>
      </a>
    </div>
  );
};

export default InstagramCard;

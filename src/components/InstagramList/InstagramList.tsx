import React from "react";

// Assets
import ig1 from "assets/images/instagram/1.jpg";
import ig2 from "assets/images/instagram/2.jpg";
import ig3 from "assets/images/instagram/3.jpg";
import ig4 from "assets/images/instagram/4.jpg";

// Components
import InstagramCard from "./InstagramCard";
import { useStyles } from "./styles/InstagramList.styles";

const InstagramList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {items.map((item) => (
        <InstagramCard key={item.id} src={item.src} name={item.name} />
      ))}
    </div>
  );
};

const items = [
  {
    id: 1,
    src: ig1,
    name: "Chicken Wings",
  },
  {
    id: 2,
    src: ig2,
    name: "Sandwiches",
  },
  {
    id: 3,
    src: ig3,
    name: "French Fries",
  },
  {
    id: 4,
    src: ig4,
    name: "Subs",
  },
];

export default InstagramList;

import React, { FC, useState, useEffect, useCallback } from "react";
import { db } from "config/firebase";
import { PizzaToppings as PizzaToppingsModel, SubCategory, Extras, CollectionName } from "models/menu";
import { makeStyles, Typography } from "@material-ui/core";
import { WholesomeSpinner } from "components/Spinner";
import EditButton from "components/EditButton";
import classnames from "classnames";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "100px",
    width: "100%",
  },
  title: {
    "& .MuiTypography-root": {
      fontFamily: "Grotesk",
      fontSize: "20px",
      fontWeight: 900,
      textTransform: "uppercase",
      color: "#000",
    },
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexFlow: "row wrap",
    width: "300px",

    "& p": {
      fontFamily: "Grotesk",
      fontSize: "16px",
      fontWeight: 600,
      margin: "5px",
    },
  },
  topMargin: {
    marginTop: "20px",
  },
}));

interface Props {
  subCategory: SubCategory;
}

const PizzaToppings: FC<Props> = ({ subCategory }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [pizzaToppings, setPizzaToppings] = useState<PizzaToppingsModel | null>(null);
  const [extras, setExtras] = useState<Extras | undefined>(undefined);
  const ref = db.collection(CollectionName.extras).doc("Pizza Toppings");

  const fetchToppings = useCallback(() => {
    setLoading(true);

    ref.onSnapshot((querySnapshot) => {
      if (querySnapshot.exists) {
        setPizzaToppings(querySnapshot.data() as PizzaToppingsModel);
      }
    });

    setLoading(false);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchMenuItem = useCallback(async () => {
    const doc = await ref.get();

    if (doc.exists) {
      setExtras(doc.data() as Extras);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetchToppings();
  }, [fetchToppings]);

  useEffect(() => {
    fetchMenuItem().catch((err) => console.log(err));
  }, [fetchMenuItem]);

  if (loading || (!loading && !pizzaToppings)) return <WholesomeSpinner />;
  if (!pizzaToppings)
    return (
      <div className={classes.title}>
        <Typography variant="body1">Topping of your choice</Typography>
      </div>
    );
  return (
    <div className={classes.root}>
      <EditButton extras={extras} subCategory={subCategory} collectionName={CollectionName.extras} />
      <div className={classes.title}>
        <Typography variant="body1">{pizzaToppings.title}:</Typography>
      </div>
      <div className={classes.wrapper}>
        {pizzaToppings.list.map((topping, index) => (
          <p key={topping} className={classnames(index < 2 && classes.topMargin)}>
            {topping} {String.fromCharCode(183)}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PizzaToppings;

import React, { FC } from "react";
import { makeStyles, Theme, Typography, Grid } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { SubCategoryItem } from "models/menu";

const useStyles = makeStyles((theme: Theme) => ({
  gridItem: {
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "30px",
  },
  itemWrapper: {
    display: "flex",
    flexFlow: "column wrap",
    position: "relative",

    "&:hover $deleteWrapper": {
      visibility: "visible",
      opacity: 1,
    },
  },
  deleteWrapper: {
    position: "absolute",
    left: "50%",
    visibility: "hidden",

    "& svg": {
      color: theme.palette.primary.light,
    },
  },
  itemHead: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "&:hover": {
      cursor: "pointer",
      opacity: 0.3,
    },

    "& .MuiTypography-root": {
      fontFamily: "Grotesk",
      fontWeight: 600,
      color: "#000",
    },
  },
  itemSub: {
    "& .MuiTypography-root": {
      fontFamily: "Grotesk",
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.8)",
    },
  },
}));

interface Props {
  items: SubCategoryItem[];
}

const NormalList: FC<Props> = ({ items }) => {
  const classes = useStyles();

  const openDeleteModal = () => {};

  return (
    <>
      {items.map((item) => (
        <Grid item key={item.id} className={classes.gridItem} xs={12} sm={6} md={4}>
          <div className={classes.itemWrapper}>
            <div
              role="button"
              tabIndex={0}
              onKeyPress={() => {}}
              className={classes.deleteWrapper}
              onClick={openDeleteModal}
            >
              <DeleteIcon />
            </div>
            <div className={classes.itemHead}>
              <Typography variant="body1" color="textSecondary">
                {item.name}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {item.price && `$${item.price}`}
              </Typography>
            </div>
            <div className={classes.itemSub}>
              <Typography variant="body1" color="textSecondary">
                {(item.ingredients &&
                  Array.isArray(item.ingredients) &&
                  item.ingredients.length &&
                  `(${item.ingredients.join(", ").toString()})`) ||
                  ""}
              </Typography>
              {item.additional && item.additional.length && (
                <Typography variant="body1" color="textSecondary">
                  {`(${item.additional})`}
                </Typography>
              )}
            </div>
          </div>
        </Grid>
      ))}
    </>
  );
};

export default NormalList;

import React, { FC } from "react";
import { makeStyles, createStyles, Theme, Grid, Typography } from "@material-ui/core";
import { MenuItem } from "models/menu";
import classnames from "classnames";

import PizzaToppings from "./CategoryDetails/PizzaToppings"; // eslint-disable-line

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    subCategoryWrapper: {
      marginTop: "60px",

      "&:not(:first-child)": {
        marginTop: "100px",
      },
    },
    titleWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      color: theme.palette.secondary.main,
      fontFamily: "Grotesk",
      fontWeight: 600,
      fontSize: "24px",
      textTransform: "capitalize",
    },
    timeSheet: {
      color: theme.palette.secondary.main,
      fontFamily: "Grotesk",
      fontWeight: 400,
      fontSize: "18px",
      textTransform: "capitalize",
      margin: 0,
      marginTop: "-5px",
    },
    gridWrapper: {
      marginTop: "20px",
    },
    gridItem: {
      paddingLeft: "20px",
      paddingRight: "20px",
      marginTop: "30px",
    },
    itemWrapper: {
      display: "flex",
      flexFlow: "column wrap",
    },
    itemHead: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      "& .MuiTypography-root": {
        fontFamily: "Grotesk",
        fontWeight: 600,
        color: theme.palette.secondary.main,
      },
    },
    itemSub: {
      "& .MuiTypography-root": {
        fontFamily: "Grotesk",
        fontWeight: 400,
        color: theme.palette.secondary.main,
      },
    },
    additionalContainer: {
      margin: "100px 0",
    },
    additionalWrapper: {
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "center",
      alignItems: "center",

      "& .MuiTypography-root": {
        fontFamily: "Grotesk",
        color: theme.palette.secondary.main,

        "&:first-child": {
          fontSize: "24px",
          fontWeight: 600,
        },

        "&:last-child": {
          fontSize: "16px",
          fontWeight: 400,
        },
      },
    },
    marginBottom: {
      marginBottom: "100px",
    },
  })
);

interface Props {
  menuItem: MenuItem;
}

const MenuPage: FC<Props> = ({ menuItem }) => {
  const classes = useStyles();
  const pizzaMenu = Boolean(menuItem.name === "Pizza"); // eslint-disable-line

  return (
    <div
      className={classnames(classes.root, {
        [classes.marginBottom]: !menuItem.additional,
      })}
    >
      {menuItem.subCategories.map((subCategory) => (
        <div key={subCategory.id} className={classes.subCategoryWrapper}>
          <div className={classes.titleWrapper}>
            <Typography variant="body1" color="textSecondary" className={classes.title}>
              {subCategory.name}
            </Typography>
            {subCategory.timeSheet && <Typography className={classes.timeSheet}>{subCategory.timeSheet}</Typography>}
          </div>
          <Grid container className={classes.gridWrapper}>
            {subCategory.items.map((item) => (
              <Grid item key={item.id} className={classes.gridItem} xs={12} sm={6} md={4}>
                <div className={classes.itemWrapper}>
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
                      {item.ingredients && item.ingredients.length && `(${item.ingredients.join(", ").toString()})`}
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
          </Grid>
        </div>
      ))}
      {/* {pizzaMenu && <PizzaToppings />} */}
      {menuItem.additional && (
        <Grid container className={classes.additionalContainer}>
          <Grid item xs={12}>
            <div className={classes.additionalWrapper}>
              <Typography variant="body1" color="textSecondary">
                {menuItem.additional.title}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {menuItem.additional.description}
              </Typography>
            </div>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default MenuPage;

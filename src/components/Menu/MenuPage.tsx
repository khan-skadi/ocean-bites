import React, { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Parallax } from "react-parallax";
import { Grid, Typography, Button, Hidden } from "@material-ui/core";
import { useAuthContext } from "context/AuthContext";
import { MenuItem } from "models/menu";
import classnames from "classnames";
import appetizers from "assets/images/menu-items/ChickenWings.jpg";

// Helpers
import { openModal } from "store";
import { modalLookup } from "utils/appConstants";
import { getImage, renderSubcategory } from "./helpers";
import { useStyles } from "./MenuPage.styles";

interface Props {
  menuItem: MenuItem;
}

const MenuPage: FC<Props> = ({ menuItem }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const { isAuthenticated } = useAuthContext();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div
      className={classnames(classes.root, {
        [classes.marginBottom]: !menuItem.additional,
      })}
    >
      <Hidden xsDown>
        <div className={classes.imageWrapper}>
          <img src={getImage(location.pathname) || appetizers} alt="" width="300px" />
        </div>
      </Hidden>
      <Hidden smUp>
        <div className={classes.subCategoryImageWrapper}>
          <Parallax
            bgImage={getImage(location.pathname) || appetizers}
            strength={400}
            bgImageStyle={{ height: "450px" }}
          >
            <div className={classes.mobileImage} />
          </Parallax>
        </div>
      </Hidden>
      {menuItem.subCategories.map((subCategory) => (
        <div key={subCategory.id} className={classes.subCategoryWrapper}>
          <div className={classes.titleWrapper}>
            {isAuthenticated && (
              <Button
                className={classes.editButton}
                color="secondary"
                variant="contained"
                onClick={() => {
                  const initialState: { [key: string]: string | string[] } = {};

                  subCategory.items.forEach((item) => {
                    if (item.subItems && item.subItems.length) {
                      item.subItems.forEach((subItem) => {
                        initialState[subItem.name] = subItem.name;
                        initialState[`${subItem.name} price1`] = subItem.price1;
                        initialState[`${subItem.name} price2`] = subItem.price2;
                        initialState[`${subItem.name} ingredients`] = subItem.ingredients || [];
                        initialState[`${subItem.name} additional`] = subItem.additional || "";
                      });
                    } else {
                      initialState[item.name] = item.name;
                      initialState[`${item.name} price`] = item.price;
                      initialState[`${item.name} ingredients`] = item.ingredients || [];
                      initialState[`${item.name} additional`] = item.additional || "";
                    }
                  });

                  dispatch(
                    openModal({
                      type: modalLookup.EditMenu,
                      data: { subCategory, initialState, menuItem },
                    })
                  );
                }}
              >
                Edit Section
              </Button>
            )}
            <Typography variant="body1" color="textSecondary" className={classes.title}>
              {subCategory.name}
            </Typography>
            {subCategory.subtitle && (
              <Typography variant="body1" color="textSecondary" className={classes.subtitle}>
                {subCategory.subtitle}
              </Typography>
            )}
            {subCategory.timeSheet && <Typography className={classes.timeSheet}>{subCategory.timeSheet}</Typography>}
          </div>
          <Grid container className={classes.gridWrapper}>
            {renderSubcategory(subCategory)}
          </Grid>
        </div>
      ))}
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

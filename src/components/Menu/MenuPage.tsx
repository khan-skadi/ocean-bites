import React, { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Parallax } from "react-parallax";
import { Grid, Hidden, Typography } from "@material-ui/core";
import { CollectionName, MenuItem } from "models/menu";
import EditButton from "components/EditButton";
import classnames from "classnames";
import appetizers from "assets/images/menu-items/ChickenWings.jpg";

// Helpers
import { getImage, renderSubcategory } from "./helpers";
import { useStyles } from "./MenuPage.styles";

interface Props {
  menuItem: MenuItem;
}

const MenuPage: FC<Props> = ({ menuItem }) => {
  const classes = useStyles();
  const location = useLocation();

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
            <EditButton menuItem={menuItem} subCategory={subCategory} collectionName={CollectionName.menuItems} />
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

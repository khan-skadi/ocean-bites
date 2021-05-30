import React, { FC, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { Parallax } from "react-parallax";
import { Grid, Typography, Hidden } from "@material-ui/core";
import { MenuItem, SubCategory } from "models/menu";
import { PATHS } from "utils/appConstants";
import classnames from "classnames";
import appetizers from "assets/images/menu-items/ChickenWings.jpg";
import subs from "assets/images/menu-items/Cold&HotSubs.jpg";
import pizza from "assets/images/menu-items/Pizza.jpg";
import salad from "assets/images/menu-items/Salad.png";
import wraps from "assets/images/menu-items/Wraps.jpg";
import burgers from "assets/images/menu-items/Burgers.jpg";
import iceCream from "assets/images/wallpapers/iceCream.png";
import kidsMenu from "assets/images/instagram/1.jpg";

import { useStyles } from "./MenuPage.styles";

// Components
import {
  Pizza,
  Wraps,
  Snacks,
  Baskets,
  IceCream,
  KidsMenu,
  Beverages,
  NormalList,
  Sandwiches,
  FreshSalads,
  FountainSoda,
  HotAndColdSubs,
} from "./CategoryDetails";

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

  const renderSubcategory = (subCategory: SubCategory) => {
    const { name, items } = subCategory;

    switch (name) {
      case "Ocean Bites Baskets":
        return <Baskets items={items} />;
      case "Ocean Bites Pizza":
        return <Pizza items={items} showToppings={true} />;
      case "Pizza by Slice":
        return <Pizza items={items} showToppings={false} />;
      case "Ocean Bites Fresh Salads":
        return <FreshSalads items={items} />;
      case "Ocean Bites Wraps":
        return <Wraps items={items} />;
      case "Ocean Bites Hot Subs":
        return <HotAndColdSubs items={items} />;
      case "Ocean Bites Cold Subs":
        return <HotAndColdSubs items={items} />;
      case "Ocean Bites Sandwiches":
        return <Sandwiches items={items} />;
      case "Ocean Bites Ice Cream and Treats":
        return <IceCream items={items} />;
      case "Kids Menu":
        return <KidsMenu />;
      case "Ocean Bites Snacks":
        return <Snacks />;
      case "Beverages":
        return <Beverages />;
      case "Fountain Soda - Pepsi Products":
        return <FountainSoda />;
      default:
        return <NormalList items={items} />;
    }
  };

  const getImage = useCallback(() => {
    switch (location.pathname) {
      case PATHS.menuItems.pizza:
        return pizza;
      case PATHS.menuItems.wraps:
        return wraps;
      case PATHS.menuItems.salads:
        return salad;
      case PATHS.menuItems.appetizers:
        return appetizers;
      case PATHS.menuItems.hotAndColdSubs:
        return subs;
      case PATHS.menuItems.sandwiches:
        return burgers;
      case PATHS.menuItems.iceCreamAndTreats:
        return iceCream;
      case PATHS.menuItems.kidsMenu:
        return kidsMenu;
      default:
        return "";
    }
  }, [location.pathname]);

  return (
    <div
      className={classnames(classes.root, {
        [classes.marginBottom]: !menuItem.additional,
      })}
    >
      <Hidden xsDown>
        <div className={classes.imageWrapper}>
          <img src={getImage() || appetizers} alt="" width="300px" />
        </div>
      </Hidden>
      <Hidden smUp>
        <div
          style={{
            marginTop: "30px",
            marginBottom: "-60px",
          }}
        >
          <Parallax bgImage={getImage() || appetizers} strength={400} bgImageStyle={{ height: "450px" }}>
            <div className={classes.mobileImage} />
          </Parallax>
        </div>
      </Hidden>
      {menuItem.subCategories.map((subCategory) => (
        <div key={subCategory.id} className={classes.subCategoryWrapper}>
          <div className={classes.titleWrapper}>
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

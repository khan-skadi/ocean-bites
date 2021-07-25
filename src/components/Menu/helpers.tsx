import React from "react";

// Assets
import pizza from "assets/images/menu-items/Pizza.jpg";
import wraps from "assets/images/menu-items/Wraps.jpg";
import salad from "assets/images/menu-items/Salad.png";
import appetizers from "assets/images/menu-items/ChickenWings.jpg";
import subs from "assets/images/menu-items/Cold&HotSubs.jpg";
import burgers from "assets/images/menu-items/Burgers.jpg";
import iceCream from "assets/images/wallpapers/iceCream.png";
import kidsMenu from "assets/images/instagram/1.jpg";

// Helpers
import { PATHS } from "utils/appConstants";

// Models
import { SubCategory } from "models/menu";

// Components
import {
  Baskets,
  Beverages,
  FountainSoda,
  FreshSalads,
  HotAndColdSubs,
  IceCream,
  KidsMenu,
  NormalList,
  Pizza,
  Sandwiches,
  Snacks,
  Wraps,
} from "./CategoryDetails";

export const renderSubcategory = (subCategory: SubCategory) => {
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

export const getImage = (pathname: string) => {
  switch (pathname) {
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
};

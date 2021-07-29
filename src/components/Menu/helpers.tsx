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
import { SubCategory, subCategoryName } from "models/menu";

// Components
import {
  Pizza,
  Wraps,
  Baskets,
  IceCream,
  KidsMenu,
  NormalList,
  Sandwiches,
  FreshSalads,
  HotAndColdSubs,
} from "./CategoryDetails";

export const renderSubcategory = (subCategory: SubCategory) => {
  const { name, items } = subCategory;

  switch (name) {
    case subCategoryName.OceanBitesBaskets:
      return <Baskets items={items} />;
    case subCategoryName.OceanBitesHotSubs:
      return <HotAndColdSubs items={items} />;
    case subCategoryName.OceanBitesColdSubs:
      return <HotAndColdSubs items={items} />;
    case subCategoryName.OceanBitesIceCreamAndTreats:
      return <IceCream items={items} />;
    case subCategoryName.KidsMenu:
    case subCategoryName.OceanBitesSnacks:
    case subCategoryName.Beverages:
    case subCategoryName.FountainSodaPepsiProducts:
      return <KidsMenu items={items} />;
    case subCategoryName.PizzaBySlice:
      return <Pizza subCategory={subCategory} showToppings={false} />;
    case subCategoryName.OceanBitesPizza:
      return <Pizza subCategory={subCategory} showToppings={true} />;
    case subCategoryName.OceanBitesFreshSalads:
      return <FreshSalads items={items} />;
    case subCategoryName.OceanBitesSandwiches:
      return <Sandwiches items={items} />;
    case subCategoryName.OceanBitesWraps:
      return <Wraps items={items} />;
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

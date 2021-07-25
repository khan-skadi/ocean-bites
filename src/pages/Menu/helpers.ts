import { PATHS } from "utils/appConstants";
import { menuListItems } from "../../__data__/menuMockData";

export const getActiveMenuItem = (loc: string) => {
  switch (loc) {
    case PATHS.menuItems.appetizers:
      return menuListItems[0];
    case PATHS.menuItems.pizza:
      return menuListItems[1];
    case PATHS.menuItems.salads:
      return menuListItems[2];
    case PATHS.menuItems.wraps:
      return menuListItems[3];
    case PATHS.menuItems.hotAndColdSubs:
      return menuListItems[4];
    case PATHS.menuItems.sandwiches:
      return menuListItems[5];
    case PATHS.menuItems.iceCreamAndTreats:
      return menuListItems[6];
    case PATHS.menuItems.kidsMenu:
      return menuListItems[7];
    default:
      return menuListItems[0];
  }
};

export const getSpacing = (loc: string, isMobile: boolean) => {
  switch (loc) {
    case PATHS.menuItems.appetizers:
      return "";
    case PATHS.menuItems.pizza:
      return "";
    case PATHS.menuItems.salads:
      return isMobile ? "20px" : "90px";
    case PATHS.menuItems.wraps:
      return isMobile ? "40px" : "210px";
    case PATHS.menuItems.hotAndColdSubs:
      return "";
    case PATHS.menuItems.sandwiches:
      return isMobile ? "20px" : "0";
    case PATHS.menuItems.iceCreamAndTreats:
      return isMobile ? "20px" : "20px";
    case PATHS.menuItems.kidsMenu:
      return "";
    default:
      return "";
  }
};

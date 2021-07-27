import { PATHS } from "utils/appConstants";
import { MenuItem } from "models/menu";

export const getActiveMenuItem = (loc: string, menuItems: MenuItem[]) => {
  switch (loc) {
    case PATHS.menuItems.appetizers:
      return menuItems[0];
    case PATHS.menuItems.hotAndColdSubs:
      return menuItems[1];
    case PATHS.menuItems.iceCreamAndTreats:
      return menuItems[2];
    case PATHS.menuItems.kidsMenu:
      return menuItems[3];
    case PATHS.menuItems.pizza:
      return menuItems[4];
    case PATHS.menuItems.salads:
      return menuItems[5];
    case PATHS.menuItems.sandwiches:
      return menuItems[6];
    case PATHS.menuItems.wraps:
      return menuItems[7];
    default:
      return menuItems[0];
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

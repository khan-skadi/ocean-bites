type CategoryName =
  | "Pizza"
  | "Salads"
  | "Wraps"
  | "Kids Menu"
  | "Sandwiches"
  | "Appetizers"
  | "Hot and Cold Subs"
  | "Ice Cream and Treats";

type SubCategoryName =
  | "Beverages"
  | "Kids Menu"
  | "Pizza by Slice"
  | "Bites Appetizers"
  | "Ocean Bites Pizza"
  | "Ocean Bites Wraps"
  | "Ocean Bites Snacks"
  | "Bites Banana Split"
  | "Ocean Bites Baskets"
  | "Ocean Bites Hot Subs"
  | "Ocean Bites Cold Subs"
  | "Topping of Your Choice"
  | "Ocean Bites Sandwiches"
  | "Ocean Bites Fresh Salads"
  | "Fountain Soda - Pepsi Products"
  | "Ocean Bites Ice Cream and Treats";

// eslint-disable-next-line @typescript-eslint/naming-convention
export enum subCategoryName {
  "Beverages" = "Beverages",
  "KidsMenu" = "Kids Menu",
  "PizzaBySlice" = "Pizza by Slice",
  "BitesAppetizers" = "Bites Appetizers",
  "OceanBitesPizza" = "Ocean Bites Pizza",
  "OceanBitesWraps" = "Ocean Bites Wraps",
  "OceanBitesSnacks" = "Ocean Bites Snacks",
  "BitesBananaSplit" = "Bites Banana Split",
  "OceanBitesBaskets" = "Ocean Bites Baskets",
  "OceanBitesHotSubs" = "Ocean Bites Hot Subs",
  "OceanBitesColdSubs" = "Ocean Bites Cold Subs",
  "ToppingsOfYourChoice" = "Topping of Your Choice",
  "OceanBitesSandwiches" = "Ocean Bites Sandwiches",
  "OceanBitesFreshSalads" = "Ocean Bites Fresh Salads",
  "FountainSodaPepsiProducts" = "Fountain Soda - Pepsi Products",
  "OceanBitesIceCreamAndTreats" = "Ocean Bites Ice Cream and Treats",
}

export interface SubItem {
  id: number;
  name: string;
  price1: string;
  price2: string;
  additional?: string;
  ingredients?: string[];
}

export interface SubCategoryItem {
  id: number;
  name: string;
  price: string;
  additional?: string;
  ingredients?: string[];
  subItems?: SubItem[];
}

export interface SubCategory {
  id: number;
  name: SubCategoryName;
  subtitle?: string;
  items: SubCategoryItem[];
  timeSheet?: string;
  image?: string;
}

interface MenuItemAdditional {
  title: string;
  description: string;
}

export interface MenuItem {
  name: CategoryName;
  link: string;
  additional?: MenuItemAdditional;
  subCategories: SubCategory[];
}

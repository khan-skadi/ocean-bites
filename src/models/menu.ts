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

export interface SubCategoryItem {
  id: number;
  name: string;
  price: string;
  additional?: string;
  ingredients?: string[];
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

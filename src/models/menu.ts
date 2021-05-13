type CategoryName = "Breakfast" | "All Day" | "Dessert" | "Beverages" | "Wines" | "Happy Hour";
type SubCategoryName =
  | "Tea"
  | "Red"
  | "Beer"
  | "Rosé"
  | "Water"
  | "Sides"
  | "White"
  | "Coffee"
  | "Salads"
  | "Snacks"
  | "Toasts"
  | "Plates"
  | "Frozen"
  | "Dessert"
  | "Breakfast"
  | "Cocktails"
  | "Non-Alcoholic"
  | "Juices + Shots"
  | "Salad Additions"
  | "Sangria + Spritzer"
  | "Sparkling/Champagne";

interface SubCategoryItem {
  id: number;
  name: string;
  price: string;
  additional?: string;
  ingredients?: string[];
}

interface SubCategory {
  id: number;
  name: SubCategoryName;
  items: SubCategoryItem[];
  timeSheet?: string;
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

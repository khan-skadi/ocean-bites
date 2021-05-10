type CategoryName = "Breakfast" | "All Day" | "Dessert" | "Beverages" | "Wines" | "Happy Hour";
type SubCategoryName =
  | "Breakfast"
  | "Toasts"
  | "Sides"
  | "Snacks"
  | "Salads"
  | "Salad Additions"
  | "Plates"
  | "Dessert"
  | "Cocktails"
  | "Frozen"
  | "Sangria + Spritzer"
  | "Beer"
  | "Non-Alcoholic"
  | "Water"
  | "Juices + Shots"
  | "Tea"
  | "Coffee"
  | "Rosé"
  | "Sparkling/Champagne"
  | "White"
  | "Red";

interface SubCategoryItem {
  name: string;
  ingredients?: string[];
  price: string;
  additional?: string;
}

interface SubCategory {
  name: SubCategoryName;
  items: SubCategoryItem[];
}

export interface MenuItem {
  name: CategoryName;
  link: string;
  subCategories: SubCategory[];
}

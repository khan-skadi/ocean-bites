// "all day",
// "dessert",
// "beverages",
// "wines",
// "happy hour",
import { MenuItem } from "models/menu";
import { PATHS } from "utils/appConstants";

export const menuListItems: MenuItem[] = [
  {
    name: "Breakfast",
    link: PATHS.menuItems.breakfast,
    subCategories: [
      {
        name: "Breakfast",
        items: [
          {
            name: "Two Eggs Any Style",
            ingredients: ["Mixed greens", "home fries GF"],
            price: "15",
            additional: "",
          },
          {
            name: "Yogurt",
            ingredients: ["Greek yogurt", "granola", "banana", "seasonal jam GF"],
            price: "12",
            additional: "",
          },
          {
            name: "Omelette",
            ingredients: ["Mixed greens", " home fries GF"],
            price: "17",
            additional:
              "Choice of 2: bacon, chicken sausage, veggie sausage, cheddar, goat cheese, mushroom, tomato, onion, kale, spinach, roasted peppers",
          },
          {
            name: "Egg Sandwich",
            ingredients: ["Fried eggs", "cheddar", "bacon", "kewpie", "sesame bun", "home fries (GF)"],
            price: "16",
            additional: "",
          },
          {
            name: "Pancake",
            ingredients: ["Sorghum butter", "sorghum", "maple"],
            price: "14",
            additional: "Add Berries $5",
          },
          {
            name: "Vegan Scramble",
            ingredients: ["Mixed greens", "home fries V, GF"],
            price: "18",
            additional:
              "Choice of 2: bacon, chicken sausage, veggie sausage, cheddar, goat, cheese, mushroom, tomato, onion, kale, spinach, roasted peppers",
          },
          {
            name: "Fruit Plate",
            ingredients: ["Sliced seasonal fruit, V, GF"],
            price: "14",
            additional: "",
          },
        ],
      },
      {
        name: "Toasts",
        items: [
          {
            name: "Avocado Toast",
            ingredients: ["Sourdough", "avocado", "radish", "lime V", "(GF)"],
            price: "15",
            additional: "Add 2 Eggs $7",
          },
          {
            name: "*Smoked Salmon Toast",
            ingredients: ["Tomato", "red onion", "cucumber", "cream cheese", "red onion (GF)"],
            price: "18",
            additional: "",
          },
          {
            name: "BLT",
            ingredients: ["Lardon", "bibb lettuce", "tomato", "fried egg", "mayo (GF)"],
            price: "16",
            additional: "",
          },
          {
            name: "'AB&J' Toast",
            ingredients: ["Almond butter", "fresh fruit", "seasonal jam", "toasted coconut V, (GF)"],
            price: "14",
            additional: "",
          },
          {
            name: "Burrata Toast",
            ingredients: ["Heirloom tomatoes", "crunchy garlic", "miso"],
            price: "18",
            additional: "",
          },
        ],
      },
      {
        name: "Sides",
        items: [
          {
            name: "Avocado",
            price: "7",
          },
          {
            name: "Veggie Sausage",
            price: "7",
          },
          {
            name: "Home Fries",
            price: "5",
          },
          {
            name: "Bacon",
            price: "7",
          },
          {
            name: "Two Eggs",
            price: "7",
          },
          {
            name: "Two Eggs",
            price: "7",
          },
          {
            name: "Pork Sausage",
            price: "7",
          },
          {
            name: "Sliced Tomato",
            price: "5",
          },
          {
            name: "Toast, Butter & Jam",
            price: "5",
          },
        ],
      },
    ],
  },
  {
    name: "All Day",
    link: PATHS.menuItems.allDay,
    subCategories: [],
  },
  {
    name: "Dessert",
    link: PATHS.menuItems.dessert,
    subCategories: [],
  },
  {
    name: "Beverages",
    link: PATHS.menuItems.beverages,
    subCategories: [],
  },
  {
    name: "Wines",
    link: PATHS.menuItems.wines,
    subCategories: [],
  },
  {
    name: "Happy Hour",
    link: PATHS.menuItems.happyHour,
    subCategories: [],
  },
];

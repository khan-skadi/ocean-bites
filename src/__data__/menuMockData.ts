import { MenuItem } from "models/menu";
import { PATHS } from "utils/appConstants";

export const menuListItems: MenuItem[] = [
  {
    name: "Breakfast",
    link: PATHS.menuItems.breakfast,
    additional: {
      title: "Dietary",
      description:
        "V: Vegan GF: Gluten Free (Parantheses denote it can be made diet friendly) *Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of food-borne ilness.",
    },
    subCategories: [
      {
        id: 0,
        name: "Breakfast",
        timeSheet: "Daily, 8A - 11:15A",
        items: [
          {
            id: 100,
            name: "Two Eggs Any Style",
            ingredients: ["Mixed greens", "home fries GF"],
            price: "15",
            additional: "",
          },
          {
            id: 101,
            name: "Yogurt",
            ingredients: ["Greek yogurt", "granola", "banana", "seasonal jam GF"],
            price: "12",
            additional: "",
          },
          {
            id: 102,
            name: "Omelette",
            ingredients: ["Mixed greens", " home fries GF"],
            price: "17",
            additional:
              "Choice of 2: bacon, chicken sausage, veggie sausage, cheddar, goat cheese, mushroom, tomato, onion, kale, spinach, roasted peppers",
          },
          {
            id: 103,
            name: "Egg Sandwich",
            ingredients: ["Fried eggs", "cheddar", "bacon", "kewpie", "sesame bun", "home fries (GF)"],
            price: "16",
            additional: "",
          },
          {
            id: 104,
            name: "Pancake",
            ingredients: ["Sorghum butter", "sorghum", "maple"],
            price: "14",
            additional: "Add Berries $5",
          },
          {
            id: 105,
            name: "Vegan Scramble",
            ingredients: ["Mixed greens", "home fries V, GF"],
            price: "18",
            additional:
              "Choice of 2: bacon, chicken sausage, veggie sausage, cheddar, goat, cheese, mushroom, tomato, onion, kale, spinach, roasted peppers",
          },
          {
            id: 106,
            name: "Fruit Plate",
            ingredients: ["Sliced seasonal fruit, V, GF"],
            price: "14",
            additional: "",
          },
        ],
      },
      {
        name: "Toasts",
        id: 1,
        items: [
          {
            id: 107,
            name: "Avocado Toast",
            ingredients: ["Sourdough", "avocado", "radish", "lime V", "(GF)"],
            price: "15",
            additional: "Add 2 Eggs $7",
          },
          {
            id: 108,
            name: "*Smoked Salmon Toast",
            ingredients: ["Tomato", "red onion", "cucumber", "cream cheese", "red onion (GF)"],
            price: "18",
            additional: "",
          },
          {
            id: 109,
            name: "BLT",
            ingredients: ["Lardon", "bibb lettuce", "tomato", "fried egg", "mayo (GF)"],
            price: "16",
            additional: "",
          },
          {
            id: 110,
            name: "'AB&J' Toast",
            ingredients: ["Almond butter", "fresh fruit", "seasonal jam", "toasted coconut V, (GF)"],
            price: "14",
            additional: "",
          },
          {
            id: 111,
            name: "Burrata Toast",
            ingredients: ["Heirloom tomatoes", "crunchy garlic", "miso"],
            price: "18",
            additional: "",
          },
        ],
      },
      {
        name: "Sides",
        id: 2,
        items: [
          {
            name: "Avocado",
            id: 112,
            price: "7",
          },
          {
            name: "Veggie Sausage",
            id: 113,
            price: "7",
          },
          {
            name: "Home Fries",
            id: 114,
            price: "5",
          },
          {
            name: "Bacon",
            id: 115,
            price: "7",
          },
          {
            name: "Two Eggs",
            id: 116,
            price: "7",
          },
          {
            name: "Two Eggs",
            id: 117,
            price: "7",
          },
          {
            name: "Pork Sausage",
            id: 118,
            price: "7",
          },
          {
            name: "Sliced Tomato",
            id: 119,
            price: "5",
          },
          {
            name: "Toast, Butter & Jam",
            id: 120,
            price: "5",
          },
        ],
      },
    ],
  },
  {
    name: "All Day",
    link: PATHS.menuItems.allDay,
    additional: {
      title: "Dietary",
      description:
        "V: Vegan GF: Gluten Free (Parantheses denote it can be mode diet friendly) *Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of food-borne ilness. **There is a risk associated with consuming raw oysters. If you have chronic ilness of the liver, stomach or blood or have immune disorders, you are at greater risk of serious ilness from raw oysters and should eat oysters fully cooked. If unsure of your risk, consult a physician.",
    },
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

import { MenuItem } from "models/menu";
import { PATHS } from "utils/appConstants";

const blueCheeseAndRanch = "with Blue Cheese or Ranch";
const penny = "¢";

export const menuListItems: MenuItem[] = [
  {
    name: "Appetizers",
    link: PATHS.menuItems.appetizers,
    additional: {
      title: "",
      description: "",
    },
    subCategories: [
      {
        id: 0,
        name: "Bites Appetizers",
        timeSheet: "",
        items: [
          {
            id: 100,
            name: "Jalapeno Poppers (5)",
            ingredients: ["With Raunch or Old Bay sauce"],
            price: "6.49",
            additional: "",
          },
          {
            id: 101,
            name: "Chicken Wings (20)",
            ingredients: ["Hot", "Mild", "BBQ", "Old Bay"],
            price: "21",
            additional: blueCheeseAndRanch,
          },
          {
            id: 102,
            name: "Chicken Wings (8)",
            ingredients: ["Hot", "Mild", "BBQ", "Old Bay"],
            price: "9.99",
            additional: blueCheeseAndRanch,
          },
          {
            id: 103,
            name: "Buffalo Chicken Tenders (4)",
            ingredients: ["with Ranch or Blue Cheese"],
            price: "7.49",
            additional: "",
          },
          {
            id: 104,
            name: "Chicken Wings (15)",
            ingredients: ["Hot", "Mild", "BBQ", "Old Bay"],
            price: "16.99",
            additional: blueCheeseAndRanch,
          },
          {
            id: 105,
            name: "Chicken Tenders (4)",
            ingredients: ["with Honey Mustard or BBQ Sauce"],
            price: "6.99",
            additional: "",
          },
          {
            id: 106,
            name: "Mozzarella Sticks (5)",
            ingredients: ["with Marinara Sauce"],
            price: "6.49",
            additional: "",
          },
          {
            id: 107,
            name: "Onion Rings",
            ingredients: ["One size 8-9"],
            price: "5.25",
            additional: "with Marinara or Ketchup",
          },
          {
            id: 108,
            name: "French Fries - Small",
            ingredients: [`Add Cheese - .75${penny}`],
            price: "3.50",
            additional: "",
          },
          {
            id: 109,
            name: "French Fries - Large",
            ingredients: [`Add Cheese - .75${penny}`],
            price: "5.25",
            additional: "",
          },
        ],
      },
      {
        name: "Ocean Bites Baskets",
        subtitle: "Served with french fries",
        id: 1,
        items: [
          {
            id: 117,
            name: "Fried fish filets (2)",
            ingredients: ["Flounder"],
            price: "14.95",
            additional: "",
          },
          {
            id: 118,
            name: "Shrimp Basket",
            ingredients: [],
            price: "10.99",
            additional: "",
          },
          {
            id: 119,
            name: "Chicken Tenders (4)",
            ingredients: [],
            price: "9.99",
            additional: "",
          },
        ],
      },
    ],
  },
  {
    name: "Pizza",
    link: PATHS.menuItems.pizza,
    additional: {
      title: "",
      description: "",
    },
    subCategories: [
      {
        id: 200,
        name: "Ocean Bites Pizza",
        timeSheet: "",
        items: [
          {
            id: 201,
            name: 'Plain Cheese 12"',
            ingredients: ["Add One Topping - $1.60"],
            price: "11.50",
            additional: "",
          },
          {
            id: 202,
            name: 'Plain Cheese 16"',
            ingredients: ["Add One Topping - $2.00"],
            price: "15.00",
            additional: "",
          },
        ],
      },
      {
        name: "Pizza by Slice",
        subtitle: "",
        timeSheet: "",
        id: 130,
        items: [
          {
            id: 131,
            name: "Cheese",
            ingredients: [],
            price: "2.75",
            additional: "",
          },
          {
            id: 132,
            name: "Pepperoni",
            ingredients: [],
            price: "3.00",
            additional: "",
          },
        ],
      },
    ],
  },
  {
    name: "Salads",
    link: PATHS.menuItems.salads,
    subCategories: [
      {
        id: 300,
        name: "Ocean Bites Fresh Salads",
        items: [
          {
            id: 301,
            name: "House Salad",
            ingredients: [],
            price: "6.50",
            additional: "",
          },
          {
            id: 302,
            name: "Grilled Chicken Caesar",
            ingredients: [],
            price: "10.00",
            additional: "",
          },
          {
            id: 303,
            name: "Grilled Chicken Salad",
            ingredients: [],
            price: "10.00",
            additional: "",
          },
          {
            id: 304,
            name: "Buffalo Chicken Salad",
            ingredients: ["Buffalo Fried Chicken Tenders"],
            price: "10.00",
            additional: "",
          },
          {
            id: 305,
            name: "Caesar Salad",
            ingredients: ["Lettuce", "Permesan", "Cruttons", "Caesar Dressing"],
            price: "6.50",
            additional: "",
          },
          {
            id: 306,
            name: "Extra Dressing",
            ingredients: [],
            price: ".50",
            additional: "",
          },
        ],
      },
    ],
  },
  {
    name: "Wraps",
    link: PATHS.menuItems.wraps,
    subCategories: [
      {
        id: 400,
        name: "Ocean Bites Wraps",
        timeSheet: "",
        subtitle: "",
        items: [
          {
            id: 401,
            name: "Buffalo Chicken",
            ingredients: ["Fried Chicken Tenders", "Buffalo Sauce", "Lettuce", "Tomato", "Ranch"],
            price: "8.00",
          },
          {
            id: 402,
            name: "Chicken Caesar",
            ingredients: ["Lettuce", "Tomatoes", "Parmesan", "Caesar Dressing"],
            price: "8.00",
          },
        ],
      },
    ],
  },
  {
    name: "Hot and Cold Subs",
    link: PATHS.menuItems.hotAndColdSubs,
    subCategories: [
      {
        id: 500,
        name: "Ocean Bites Hot Subs",
        timeSheet: "",
        subtitle: "",
        items: [
          {
            id: 501,
            name: "Cheesesteak #1 Seller!",
            ingredients: ["Grilled steak", "cheese", "choice of toppings"],
            price: "7.49",
            additional: "10.99",
          },
          {
            id: 502,
            name: "Chicken Cheesesteak",
            ingredients: ["Grilled chicken", "cheese", "choice of toppings"],
            price: "7.49",
            additional: "10.99",
          },
          {
            id: 503,
            name: "Grilled Chicken",
            ingredients: ["Grilled chicken breast", "choice of toppings"],
            price: "7.49",
            additional: "10.99",
          },
          {
            id: 504,
            name: "Buffalo Chicken",
            ingredients: ["Grilled chicken tenders", "Buffalo sauce", "lettuce", "tomatoes", "Ranch"],
            price: "7.49",
            additional: "10.99",
          },
          {
            id: 505,
            name: "Chicken Parmesan",
            ingredients: ["Grilled chicken breast", "Marinara", "Provolone", "Parmesan"],
            price: "7.49",
            additional: "10.99",
          },
          {
            id: 506,
            name: "Cheeseburger",
            ingredients: ["1/2lb fresh ground beef patty", "cheese", "choice of toppings"],
            price: "7.49",
            additional: "10.99",
          },
          {
            id: 507,
            name: "Add Bacon",
            ingredients: [],
            price: ".75",
            additional: "1.20",
          },
        ],
      },
      {
        id: 530,
        name: "Ocean Bites Cold Subs",
        timeSheet: "",
        subtitle: "",
        items: [
          {
            id: 531,
            name: "Ocean Bites Club",
            ingredients: ["Mound of Turkey", "Ham", "Bacon", "Provolone"],
            price: "7.99",
            additional: "10.99",
          },
          {
            id: 532,
            name: "Italian Cold Cut",
            ingredients: ["Thin sliced Ham", "Salami", "Capricola", "Provolone"],
            price: "7.99",
            additional: "10.99",
          },
          {
            id: 533,
            name: "Turkey Breast",
            ingredients: ["Thin sliced roasted Turkey breast"],
            price: "7.49",
            additional: "10.99",
          },
          {
            id: 534,
            name: "Ham and Cheese",
            ingredients: ["Thin sliced ham", "choice of cheese"],
            price: "7.49",
            additional: "10.99",
          },
          {
            id: 535,
            name: "Veggie, veggie & cheese",
            ingredients: ["Thin green the way you want it!"],
            price: "6.49",
            additional: "8.99",
          },
        ],
      },
    ],
  },
  {
    name: "Sandwiches",
    link: PATHS.menuItems.sandwiches,
    subCategories: [
      {
        id: 600,
        name: "Ocean Bites Sandwiches",
        timeSheet: "",
        subtitle: "Choice of Bread: White * Wheat * Kaiser Roll * Pita Bread",
        items: [
          {
            id: 601,
            name: "Gyro Pita",
            ingredients: ["Grilled Lamb and Beef", "lettuce", "tomatoes", "onions", "tzatziki sauce"],
            price: "8.50",
            additional: "",
          },
          {
            id: 602,
            name: "Grilled Chicken",
            ingredients: ["Grilled Chicken Breast", "choice of toppings"],
            price: "7.00",
            additional: "",
          },
          {
            id: 603,
            name: "Chicken Pita",
            ingredients: ["Grilled Chicken Breast", "lettuce", "tomatoes", "onions", "tzatziki sauce"],
            price: "8.50",
            additional: "",
          },
          {
            id: 604,
            name: "Grilled Cheese",
            ingredients: ["Grilled Golden"],
            price: "3.75",
            additional: "",
          },
          {
            id: 606,
            name: "Cheeseburger",
            ingredients: ["1/2lb fresh ground patty grilled to perfection", "cheese"],
            price: "6.50",
            additional: "",
          },
          {
            id: 607,
            name: "Add bacon or Cheese",
            ingredients: [],
            price: ".75",
          },
        ],
      },
    ],
  },
  {
    name: "Ice Cream and Treats",
    link: PATHS.menuItems.iceCreamAndTreats,
    subCategories: [
      {
        id: 700,
        name: "Ocean Bites Ice Cream and Treats",
        timeSheet: "",
        subtitle: "",
        items: [
          {
            id: 701,
            name: "Hand Dipped Ice Cream",
            ingredients: [],
            price: "",
            additional: "",
          },
          {
            id: 702,
            name: "Sundaes",
            ingredients: [],
            price: "",
            additional: "",
          },
        ],
      },
      {
        id: 800,
        name: "Bites Banana Split",
        timeSheet: "",
        subtitle:
          "Scoop Vanilla, Scoop Chocolate, Scoop Strawbery Topped with Strawberries, Chocolate Syrup, Whipper Cream and Cherries",
        items: [
          {
            id: 801,
            name: "Italian Ice",
            ingredients: [],
            price: "",
            additional: "",
          },
        ],
      },
    ],
  },
  {
    name: "Kids Menu",
    link: PATHS.menuItems.kidsMenu,
    subCategories: [
      {
        id: 900,
        name: "Ocean Bites Snacks",
        timeSheet: "",
        subtitle: "",
        items: [
          {
            id: 901,
            name: "Nacho & Cheese",
            ingredients: [],
            price: "3.00",
          },
          {
            id: 902,
            name: "Chips",
            ingredients: [],
            price: "1.69",
          },
          {
            id: 903,
            name: "Cup of Cheese",
            ingredients: [],
            price: ".75",
          },
        ],
      },
      {
        id: 904,
        name: "Kids Menu",
        items: [
          {
            id: 905,
            name: "Tenders (2)",
            ingredients: ["with French Fries"],
            price: "5.75",
          },
          {
            id: 906,
            name: "Slice of Cheese Pizza",
            ingredients: ["and French Fries"],
            price: "5.75",
          },
        ],
      },
      {
        id: 907,
        name: "Beverages",
        items: [
          {
            id: 908,
            name: "Pepsi Products 20OZ",
            ingredients: [],
            price: "2.00",
          },
          {
            id: 909,
            name: "Juice, Gatorade, Lipton Tea",
            ingredients: [],
            price: "2.75",
          },
          {
            id: 910,
            name: "Energy Drinks",
            ingredients: [],
            price: "3.00",
          },
        ],
      },
      {
        id: 911,
        name: "Fountain Soda - Pepsi Products",
        items: [
          {
            id: 912,
            name: "Regular 24 OZ",
            ingredients: [],
            price: "2.25",
          },
          {
            id: 913,
            name: "Large 32 OZ",
            ingredients: [],
            price: "3.10",
          },
          {
            id: 914,
            name: "Refils",
            ingredients: [],
            price: "1.00",
          },
          {
            id: 915,
            name: "Cup of Ice",
            ingredients: [],
            price: ".25",
          },
          {
            id: 916,
            name: "Water Bottles 20 OZ",
            ingredients: [],
            price: "2.12",
          },
          {
            id: 917,
            name: "Hot Coffee",
            ingredients: [],
            price: "2.00",
          },
          {
            id: 918,
            name: "Milk",
            ingredients: [],
            price: "2.00",
          },
          {
            id: 919,
            name: "Chocolate Milk",
            ingredients: [],
            price: "2.751",
          },
        ],
      },
    ],
  },
];

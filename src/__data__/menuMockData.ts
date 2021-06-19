import { MenuItem } from "models/menu";
import { PATHS } from "utils/appConstants";

const blueCheeseAndRanch = "with Blue Cheese or Ranch";
// const penny = "¢";

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
            name: "Small Fries",
            ingredients: [],
            price: "4",
            additional: "",
          },
          {
            id: 101,
            name: "Large Fries",
            ingredients: [],
            price: "6.25",
            additional: "",
          },
          {
            id: 102,
            name: "Chicken Wings (8)",
            ingredients: ["Hot", "Mild", "BBQ", "Old Bay"],
            price: "11.99",
            additional: blueCheeseAndRanch,
          },
          {
            id: 103,
            name: "Chicken Wings (15)",
            ingredients: ["Hot", "Mild", "BBQ", "Old Bay"],
            price: "19.99",
            additional: blueCheeseAndRanch,
          },
          {
            id: 104,
            name: "Jalapeno Poppers",
            ingredients: ["With Raunch or Old Bay sauce"],
            price: "7.25",
            additional: "",
          },
          {
            id: 105,
            name: "Mozzarella Sticks",
            ingredients: ["with Marinara Sauce"],
            price: "7.49",
            additional: "",
          },
          {
            id: 106,
            name: "Onion Rings",
            ingredients: ["One size 8-9"],
            price: "6.99",
            additional: "with Marinara or Ketchup",
          },
          {
            id: 107,
            name: "Chicken Tenders (4)",
            ingredients: [],
            price: "7.49",
            additional: "",
          },
          {
            id: 108,
            name: "Buffalo Chicken Tenders (4)",
            ingredients: ["with Ranch or Blue Cheese"],
            price: "8.49",
            additional: "",
          },
        ],
      },
      {
        name: "Ocean Bites Baskets",
        subtitle: "Served with french fries",
        id: 1,
        image: "assets/images/newImages/IMG_0024.jpg",
        items: [
          {
            id: 117,
            name: "Chicken Tenders Basket",
            ingredients: [],
            price: "11.00",
            additional: "",
          },
          {
            id: 118,
            name: "Shrimp Basket",
            ingredients: [],
            price: "12.49",
            additional: "",
          },
          {
            id: 119,

            name: "Fried fish Basket (Flounder)",
            ingredients: [],
            price: "15.99",
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
            name: 'Regular Cheese 12"',
            ingredients: ["Add topping (each) - $1.60"],
            price: "11.99",
            additional: "",
          },
          {
            id: 202,
            name: 'Large Cheese 16"',
            ingredients: ["Add topping (each) - $2.00"],
            price: "15.99",
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
            price: "3.50",
            additional: "",
          },
          {
            id: 132,
            name: "Pepperoni",
            ingredients: [],
            price: "3.75",
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
            ingredients: ["Lettuce", "Tomatoes", "onion", "sweet pepper", "green pepper", "croutons"],
            price: "7.00",
            additional: "",
          },
          {
            id: 302,
            name: "Grilled Chicken Salad",
            ingredients: ["Grilled Chicken", "House Salad"],
            price: "11.00",
            additional: "",
          },
          {
            id: 303,
            name: "Buffalo Chicken Salad",
            ingredients: ["Buffalo Chicken Tenders", "House Salad"],
            price: "10.00",
            additional: "",
          },
          {
            id: 304,
            name: "Caesar Salad",
            ingredients: ["Lettuce", "Permesan", "Croutons", "Caesar Dressing"],
            price: "7.00",
            additional: "",
          },
          {
            id: 305,
            name: "Grilled Chicken Caesar Salad",
            ingredients: [],
            price: "11.00",
            additional: "",
          },
          {
            id: 306,
            name: "Extra Dressing",
            ingredients: [],
            price: "0.50",
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
            name: "Buffalo Chicken Wrap",
            ingredients: ["Fried Chicken Tenders", "Lettuce", "Tomatoes", "Ranch"],
            price: "8.49",
          },
          {
            id: 402,
            name: "Chicken Caesar Wrap",
            ingredients: ["Grilled Chicken", "Lettuce", "Tomatoes", "Parmesan", "Caesar"],
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
            name: "Cheesesteak",
            ingredients: ["Grilled Steak", "Cheese", "Choice of Toppings"],
            price: "8.49",
            additional: "11.49",
          },
          {
            id: 502,
            name: "Chicken Cheesesteak",
            ingredients: ["Grilled Chicken", "Cheese", "Choice of Toppings"],
            price: "8.49",
            additional: "11.49",
          },
          {
            id: 503,
            name: "Grilled Chicken",
            ingredients: ["Grilled Chicken Breast", "Choice of Toppings"],
            price: "8.99",
            additional: "12.49",
          },
          {
            id: 504,
            name: "Buffalo Chicken",
            ingredients: ["Grilled Chicken Tenders", "Buffalo Sauce", "Lettuce", "Tomatoes", "Ranch"],
            price: "8.49",
            additional: "11.49",
          },
          {
            id: 505,
            name: "Chicken Parmesan",
            ingredients: ["Grilled Chicken Breast", "Marinara", "Provolone", "Parmesan"],
            price: "8.99",
            additional: "11.99",
          },
          {
            id: 506,
            name: "Cheeseburger",
            ingredients: ["1/2lb Fresh Ground Beef Patty", "Cheese", "Choice of Toppings"],
            price: "8.49",
            additional: "11.49",
          },
          {
            id: 507,
            name: "Add Bacon",
            ingredients: [],
            price: "1",
            additional: "",
          },
          {
            id: 508,
            name: "Extra Cheese",
            ingredients: [],
            price: "0.50",
            additional: "1",
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
            name: "Italian Cold Cut",
            ingredients: ["Thin Sliced Ham", "Salami", "Capricola", "Provolone"],
            price: "8.49",
            additional: "11.49",
          },
          {
            id: 532,
            name: "Ham and Cheese",
            ingredients: ["Thin Sliced Ham", "Choice of Cheese"],
            price: "8.49",
            additional: "11.49",
          },
          {
            id: 533,
            name: "Turkey Breast",
            ingredients: ["Thin Sliced Roasted Turkey Breast"],
            price: "8.49",
            additional: "11.49",
          },
          {
            id: 534,
            name: "Ocean Bites Club",
            ingredients: ["Mound of Turkey", "Ham", "Bacon", "Provolone"],
            price: "8.49",
            additional: "11.49",
          },
          {
            id: 535,
            name: "Veggie",
            ingredients: ["Thin Green the way you want it!"],
            price: "7.49",
            additional: "9.99",
          },
          {
            id: 536,
            name: "Add Bacon",
            ingredients: [],
            price: "1",
            additional: "",
          },
          {
            id: 537,
            name: "Extra Cheese",
            ingredients: [],
            price: "0.50",
            additional: "1.00",
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
        subtitle: "",
        items: [
          {
            id: 601,
            name: "Cheeseburger",
            ingredients: ["1/2lb Fresh Ground Patty grilled to perfection", "Cheese"],
            price: "7.49",
            additional: "",
          },
          {
            id: 602,
            name: "Grilled Chicken",
            ingredients: ["Grilled Chicken Breast", "Choice of Toppings"],
            price: "7.49",
            additional: "",
          },
          {
            id: 603,
            name: "Crab Cake",
            ingredients: [],
            price: "11.49",
            additional: "",
          },
          {
            id: 604,
            name: "Gyro Pita",
            ingredients: ["Grilled Lamb and Beef", "Lettuce", "Tomatoes", "Onions", "Tzatziki Sauce"],
            price: "8.49",
            additional: "",
          },
          {
            id: 605,
            name: "Chicken Pita",
            ingredients: ["Grilled Chicken Breast", "Lettuce", "Tomatoes", "Onions", "Tzatziki Sauce"],
            price: "8.49",
            additional: "",
          },
          {
            id: 606,
            name: "Grilled Cheese",
            ingredients: ["Grilled Golden"],
            price: "4.25",
            additional: "",
          },
          {
            id: 607,
            name: "Hot Dog",
            ingredients: ["1/4lb All Beef"],
            price: "4.25",
            additional: "",
          },
          {
            id: 608,
            name: "Add Bacon",
            ingredients: [],
            price: "1.00",
            additional: "",
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
            name: "Chicken Tenders",
            ingredients: ["with French Fries"],
            price: "6.25",
          },
          {
            id: 906,
            name: "Slice of Cheese Pizza",
            ingredients: ["with French Fries"],
            price: "6.25",
          },
        ],
      },
      {
        id: 907,
        name: "Beverages",
        items: [
          {
            id: 908,
            name: "Pepsi Products 20oz",
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
            name: "Fountain Soda Regular 24oz",
            ingredients: [],
            price: "2.50",
          },
          {
            id: 913,
            name: "Fountain Soda Large 32oz",
            ingredients: [],
            price: "3.25",
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

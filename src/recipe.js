const recipes = [
  {
    id: 1,
    name: "Grilled Cheese",
    description: "A crispy sandwich with melted cheese inside.",
    cookTime: "10 mins",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Bread", "Cheese", "Butter"],
    rating: 2,
    difficulty: "easy",
    createDate: "2026-04-01",
  },
  {
    id: 2,
    name: "Pancakes",
    description: "Fluffy pancakes perfect for breakfast.",
    cookTime: "15 mins",
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Flour", "Eggs", "Milk"],
    rating: 2,
    difficulty: "easy",
    createDate: "2026-04-03",
  },
  {
    id: 3,
    name: "Spaghetti",
    description: "Classic pasta with tomato sauce.",
    cookTime: "20 mins",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Pasta", "Tomato Sauce", "Parmesan"],
    rating: 3,
    difficulty: "medium",
    createDate: "2026-04-05",
  },
  {
    id: 4,
    name: "Omelette",
    description: "Eggs cooked with your favorite fillings.",
    cookTime: "8 mins",
    image:
      "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Eggs", "Cheese", "Veggies"],
    rating: 5,
    difficulty: "easy",
    createDate: "2026-04-07",
  },
  {
    id: 5,
    name: "Fruit Salad",
    description: "A fresh mix of different fruits.",
    cookTime: "5 mins",
    image:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Strawberries", "Blueberries", "Banana"],
    rating: 5,
    difficulty: "easy",
    createDate: "2026-04-09",
  },
  {
    id: 6,
    name: "Buffalo Pizza",
    description: "Spicy pizza topped with buffalo flavor.",
    cookTime: "25 mins",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Dough", "Cheese", "Buffalo Sauce"],
    rating: 5,
    difficulty: "hard",
    createDate: "2026-04-11",
  },
  {
    id: 7,
    name: "Chicken Tacos",
    description: "Tasty tacos filled with seasoned chicken.",
    cookTime: "18 mins",
    image:
      "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Tortillas", "Chicken", "Lettuce"],
    rating: 4,
    difficulty: "medium",
    createDate: "2026-04-13",
  },
  {
    id: 8,
    name: "Caesar Salad",
    description: "A crunchy salad with creamy dressing.",
    cookTime: "12 mins",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Lettuce", "Croutons", "Caesar Dressing"],
    rating: 4,
    difficulty: "medium",
    createDate: "2026-04-15",
  },
];

export default recipes;

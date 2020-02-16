const foodItems = [
  { name: 'Grinder', img: '/img/grinder.jpg', section: 'Sandwiches' },
  {
    name: 'Ham and Cheese',
    img: '/img/hamandcheese.jpeg',
    section: 'Sandwiches',
  },
  { name: 'Philly Cheese', img: '/img/philly.jpg', section: 'Sandwiches' },
  { name: 'The Veggie', img: '/img/veggie.jpeg', section: 'Sandwiches' },
  {
    name: 'Deluxe Burger',
    img: '/img/deluxeBurger.jpeg',
    section: 'Sandwiches',
  },
  { name: 'Pizza', img: '/img/pizza.jpeg', section: 'Pizzas' },
  { name: 'Hot Wings', img: '/img/wings.jpeg', section: 'Sides' },
  { name: 'Salads', img: '/img/salad.jpeg', section: 'Sides' },
  { name: 'Fries', img: '/img/fries.jpeg', section: 'Sides' },
];

export const foods = foodItems.reduce((result, food) => {
  if (!result[food.section]) {
    result[food.section] = [];
  }
  result[food.section].push(food);
  return result;
}, {});

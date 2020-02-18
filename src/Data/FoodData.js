export function formatPrice(price) {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}

const foodItems = [
  {
    name: 'Grinder',
    img: '/img/grinder.jpg',
    section: 'Sandwiches',
    price: 10.5,
  },
  {
    name: 'Ham and Cheese',
    img: '/img/hamandcheese.jpeg',
    section: 'Sandwiches',
    price: 8.5,
  },
  {
    name: 'Philly Cheese',
    img: '/img/philly.jpg',
    section: 'Sandwiches',
    price: 11.95,
  },
  {
    name: 'The Veggie',
    img: '/img/veggie.jpeg',
    section: 'Sandwiches',
    price: 8.5,
  },
  {
    name: 'Deluxe Burger',
    img: '/img/deluxeBurger.jpeg',
    section: 'Sandwiches',
    price: 9.5,
  },
  { name: 'Pizza', img: '/img/pizza.jpeg', section: 'Pizzas', price: 2.5 },
  { name: 'Hot Wings', img: '/img/wings.jpeg', section: 'Sides', price: 6.5 },
  { name: 'Salads', img: '/img/salad.jpeg', section: 'Sides', price: 7.5 },
  { name: 'Fries', img: '/img/fries.jpeg', section: 'Sides', price: 2.5 },
  {
    name: 'Soda',
    section: 'Drinks',
    price: 1.5,
    choices: ['Coke', 'Sprite', 'Root Beer', 'Dr. Pepper', 'Cherry Coke'],
  },
];

export const foods = foodItems.reduce((result, food) => {
  if (!result[food.section]) {
    result[food.section] = [];
  }
  result[food.section].push(food);
  return result;
}, {});

const options = { weekday: 'long' };
const date = new Date().getDay();
export const dotw = new Intl.DateTimeFormat('en-US', options).format(date);

export function formatPrice(price) {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}

export const dailySpecials = {
  Monday: {
    name: 'Roast Beef & Provolone',
    img: '/img/roastBeef.jpg',
    credit:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.campbells.com%2Fkitchen%2Frecipes%2Fdripping-roast-beef-sandwiches-with-melted-provolone%2F&psig=AOvVaw30mA0QjrwWWDdchBtokcC3&ust=1582221102470000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDfmI6X3ucCFQAAAAAdAAAAABAJ',
  },
  Tuesday: {
    name: 'Chicken Salad Sandwich',
    img: '/img/chickenSalad.jpg',
    credit:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.seriouseats.com%2Frecipes%2F2014%2F09%2Ffried-chicken-salad-from-fried-true.html&psig=AOvVaw1MJNUR8bDQAaVzxFVqde--&ust=1582221057526000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNj02vqW3ucCFQAAAAAdAAAAABAD',
  },
  Wednesday: {
    name: 'Smoked Brisket Sandwich',
    img: '/img/smokedBrisket.png',
    credit: 'https://www.cambriawines.com/blog/smoked-brisket-sandwiches',
  },
  Thursday: {
    name: 'French Dip',
    img: '/img/frenchDip.jpg',
    credit:
      'https://www.tastingtable.com/cook/recipes/braised-oxtail-french-dip-sandwich-recipe',
  },
  Friday: {
    name: 'Meatball Sandwich',
    img: '/img/meatball.jpg',
    credit:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thecuriouschickpea.com%2Fvegan-chickpea-meatball-subs-with-homemade-mozzarella%2F&psig=AOvVaw3XMD9bv0RWXrGRlbyK117v&ust=1582221203326000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKitq72X3ucCFQAAAAAdAAAAABAD',
  },
  Saturday: {
    name: 'BLT',
    img: '/img/blt.jpg',
    credit:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcourthousepizzanashua.com%2Fproduct%2Fblt-sub%2F&psig=AOvVaw3MZ-UGqFD18n7K-0i68YBp&ust=1582221339403000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNibyPmX3ucCFQAAAAAdAAAAABAO',
  },
  Sunday: {
    name: 'New York Steak',
    img: '/img/nysteak.jpg',
    credit:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fanovaculinary.com%2Fsous-vide-steak-sandwiches%2F&psig=AOvVaw0QURcmM1Jtk40LcfCjtnyJ&ust=1582221507524000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDii8qY3ucCFQAAAAAdAAAAABAP',
  },
};

export const foodItems = [
  {
    name: `Daily Special for ${dotw}: ${dailySpecials[dotw].name}`,
    img: `${dailySpecials[dotw].img}`,
    section: 'Special of the Day',
    credit: `${dailySpecials[dotw].credit}`,
    price: 10.5,
  },
  {
    name: 'Grinder',
    img: '/img/grinder.jpeg',
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
    img: '/img/sodas.jpg',
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

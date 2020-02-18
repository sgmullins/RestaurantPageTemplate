import { useState } from 'react';

export function useToppings(defaultTopping) {
  const [toppings, setToppings] = useState(
    defaultTopping || getDefaultToppings(),
  );
  function checkTopping(index) {
    const newToppings = [...toppings];
    newToppings[index].checked = !newToppings[index].checked;
    setToppings(newToppings);
  }
  return { toppings, checkTopping };
}

const toppingsList = [
  'Extra Cheese',
  'Pepperoni',
  'Sausage',
  'Onion',
  'Banana Peppers',
  'Bell Peppers',
  'Spinach',
  'Pineapple',
  'Extra Meat',
  'Mushrooms',
  'Oil & Vinegar',
];

function getDefaultToppings() {
  return toppingsList.map(topping => ({
    name: topping,
    checked: false,
  }));
}

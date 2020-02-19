import React from 'react';
import { GlobalStyle } from './Styles/GlobalStyle';
import { Navbar } from './Navbar/Navbar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';
import { FoodDialog } from './FoodDialog/FoodDialog';
import { Order } from './Order/Order';
import { useOpenFood } from './Hooks/useOpenFood';
import { useOrders } from './Hooks/useOrders';
import { useTitle } from './Hooks/useTitle';
import { Footer } from './Footer/Footer';

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  useTitle({ ...openFood, ...orders });

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <Order {...orders} {...openFood} />
      <FoodDialog {...openFood} {...orders} />
      <Menu {...openFood} />
      <Footer>
        Images and Logos were used for educational purposes. Where possible I
        credited the artist. This website does not represent the franchise
        Zeros, I just love their subs!
      </Footer>
    </>
  );
}

export default App;

import React from 'react';
import styled from 'styled-components';
import { FoodLabel } from '../Menu/FoodGrid';
import { zerosRed } from '../Styles/colors';
import { Title } from '../Styles/title';
import { formatPrice } from '../Data/FoodData';
import { QuantityInput } from './QuantityInput';
import { useQuantity } from '../Hooks/useQuantity';
import { Toppings } from './Toppings';
import { useToppings } from '../Hooks/useToppings';
import { useChoice } from '../Hooks/useChoice';
import { Choices } from '../FoodDialog/Choices';

const Dialog = styled.div`
  width: 600px;
  position: fixed;
  background-color: white;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

const DialogBannerName = styled(FoodLabel)`
  font-size: 30px;
  padding: 5px 40px;
  top: ${({ img }) => (img ? `100px` : '20px')};
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => (img ? `background-image: url(${img});` : `min-height: 75px;`)}
  background-position: center;
  background-size: cover;
`;

export const ModalContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 0 40px;
  padding-bottom: 80px;
`;

export const FooterContainer = styled.div`
  box-shadow: 0 -2px 10px 0 grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;

export const ConfirmButton = styled(Title)`
  margin: 10px;
  padding: 10px;
  height: 20px;
  border-radius: 5px;
  color: white;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${zerosRed};
  ${({ disabled }) =>
    disabled &&
    `
  opacity: .5;
  background-color: grey;
  pointer-events: none
  `}
`;
const ImgCredit = styled.div`
position: absolute;
    top: 180px;
    right: 10px;
    font-size: 14px
}
`;

const pricePerTopping = 0.5;

export function getPrice(order) {
  return (
    order.quantity *
    (order.price +
      order.toppings.filter(t => t.checked).length * pricePerTopping)
  );
}

function hasToppings(food) {
  return (
    food.section === 'Sandwiches' ||
    food.section === 'Pizzas' ||
    food.section === 'Special of the Day'
  );
}

function FoodDialogContainer({ openFood, setOpenFood, orders, setOrders }) {
  const quantity = useQuantity(openFood && openFood.quantity);
  const toppings = useToppings(openFood.toppings);
  const choiceRadio = useChoice(openFood.choice);
  const isEditing = openFood.index > -1;

  function handleClose() {
    setOpenFood();
  }

  const order = {
    ...openFood,
    quantity: quantity.value,
    toppings: toppings.toppings,
    choice: choiceRadio.value,
  };

  function handleAddToOrder() {
    setOrders([...orders, order]);
    handleClose();
  }

  function editOrder() {
    const newOrders = [...orders];
    newOrders[openFood.index] = order;
    setOrders(newOrders);
    handleClose();
  }

  return (
    <React.Fragment>
      <DialogShadow onClick={handleClose} />
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
        <ModalContent>
          <QuantityInput quantity={quantity} />
          {hasToppings(openFood) && (
            <>
              <h3>Choose your toppings</h3>
              <Toppings {...toppings} />
            </>
          )}
          {openFood.choices && (
            <Choices openFood={openFood} choiceRadio={choiceRadio} />
          )}
          {openFood.credit && (
            <ImgCredit>
              <a
                href={openFood.credit}
                style={{ textDecoration: 'underline', color: 'black' }}
              >
                img credit
              </a>
            </ImgCredit>
          )}
        </ModalContent>
        <FooterContainer>
          <ConfirmButton
            onClick={isEditing ? editOrder : handleAddToOrder}
            disabled={openFood.choices && !choiceRadio.value}
          >
            {isEditing ? `Update order:` : `Add To Order:`}{' '}
            {formatPrice(getPrice(order))}
          </ConfirmButton>
        </FooterContainer>
      </Dialog>
    </React.Fragment>
  );
}

export function FoodDialog(props) {
  if (!props.openFood) return null;
  return <FoodDialogContainer {...props} />;
}

import React from 'react';
import styled from 'styled-components';
import {
  FooterContainer,
  ConfirmButton,
  ModalContent,
} from '../FoodDialog/FoodDialog';
import { formatPrice } from '../Data/FoodData';
import { getPrice } from '../FoodDialog/FoodDialog';

const OrderStyled = styled.div`
  position: fixed;
  right: 0;
  top: 59px;
  width: 340px;
  background-color: white;
  height: calc(100% - 64px);
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
  display: flex;
  flex-direction: column;
`;

const OrderContent = styled(ModalContent)`
  padding: 20px;
  height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid grey;
  ${({ editable }) =>
    editable
      ? `&:hover { cursor: pointer; background-color: #e7e7e7;}`
      : `pointer-events: none`}
`;

const OrderItem = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

const ItemDetails = styled.div`
  color: grey;
  font-size: 10px;
`;

export function Order({ orders, setOrders, setOpenFood }) {
  const subTotal = orders.reduce((total, nextOrder) => {
    return total + getPrice(nextOrder);
  }, 0);
  const tax = subTotal * 0.07;
  const total = subTotal + tax;

  const deleteItems = index => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };

  return (
    <>
      {orders.length > 0 && (
        <OrderStyled>
          {orders.length === 0 ? (
            <OrderContent>Your order is empty</OrderContent>
          ) : (
            <OrderContent>
              <OrderContainer>Your Order: </OrderContainer>
              {orders.map((order, index) => (
                <OrderContainer editable>
                  <OrderItem
                    onClick={() => {
                      setOpenFood({ ...order, index });
                    }}
                  >
                    <div>{order.quantity}</div>
                    <div>{order.name}</div>
                    <div
                      style={{ cursor: 'pointer' }}
                      onClick={e => {
                        e.stopPropagation();
                        deleteItems(index);
                      }}
                    >
                      🗑
                    </div>
                    <div>{formatPrice(getPrice(order))}</div>
                  </OrderItem>
                  <ItemDetails>
                    {order.toppings
                      .filter(t => t.checked)
                      .map(topping => topping.name)
                      .join(', ')}
                  </ItemDetails>
                  {order.choice && <ItemDetails>{order.choice}</ItemDetails>}
                </OrderContainer>
              ))}
              <OrderContainer>
                <OrderItem>
                  <div></div>
                  <div>Sub-Total:</div>
                  <div>{formatPrice(subTotal)}</div>
                </OrderItem>
                <OrderItem>
                  <div></div>
                  <div>Tax:</div>
                  <div>{formatPrice(tax)}</div>
                </OrderItem>
                <OrderItem>
                  <div></div>
                  <div>Total:</div>
                  <div>{formatPrice(total)}</div>
                </OrderItem>
              </OrderContainer>
            </OrderContent>
          )}
          <FooterContainer>
            <ConfirmButton>Checkout</ConfirmButton>
          </FooterContainer>
        </OrderStyled>
      )}
    </>
  );
}

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
  top: 47px;
  width: 340px;
  background-color: white;
  height: calc(100% - 50px);
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
`;

const OrderItem = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

export function Order({ orders }) {
  return (
    <>
      <OrderStyled>
        {orders.length === 0 ? (
          <OrderContent>Your order is empty</OrderContent>
        ) : (
          <OrderContent>
            <OrderContainer>Your Order: </OrderContainer>
            {orders.map(order => (
              <OrderContainer>
                <OrderItem>
                  <div>{order.quantity}</div>
                  <div>{order.name}</div>
                  <div></div>
                  <div>{formatPrice(getPrice(order))}</div>
                </OrderItem>
              </OrderContainer>
            ))}
          </OrderContent>
        )}
        <FooterContainer>
          <ConfirmButton>Checkout</ConfirmButton>
        </FooterContainer>
      </OrderStyled>
    </>
  );
}

import React from 'react';
import styled from 'styled-components';

const ToppingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ToppingCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;
const ToppingLabel = styled.label`
  cursor: pointer;
`;

export function Toppings({ toppings, checkTopping }) {
  return (
    <ToppingGrid>
      {toppings.map((topping, index) => (
        <ToppingLabel>
          <ToppingCheckbox
            type='checkbox'
            checked={topping.checked}
            onClick={() => checkTopping(index)}
          />
          {topping.name}
        </ToppingLabel>
      ))}
    </ToppingGrid>
  );
}

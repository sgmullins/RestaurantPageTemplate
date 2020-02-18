import React from 'react';
import styled from 'styled-components';

const CursorPointer = `cursor: pointer`;

const RadioInput = styled.input`
  ${CursorPointer}
`;
const RadioLabel = styled.label`
  ${CursorPointer};
  padding-right: 15px;
`;

export function Choices({ openFood, choiceRadio }) {
  return (
    <>
      <h3>Choose One</h3>
      {openFood.choices.map(choice => (
        <React.Fragment key={choice}>
          <RadioInput
            type='radio'
            id={choice}
            key={`Radio${choice}`}
            name='choice'
            value={choice}
            checked={choiceRadio.value === choice}
            onChange={choiceRadio.onChange}
          />
          <RadioLabel key={`Label${choice}`} htmlFor={choice}>
            {choice}
          </RadioLabel>
        </React.Fragment>
      ))}
    </>
  );
}

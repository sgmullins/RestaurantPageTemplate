import styled from 'styled-components';
import { Title } from '../Styles/title';
export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const FoodLabel = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 5px;
`;

export const Food = styled(Title)`
  height: 100px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  filter: contrast(0.9);
  padding: 10px;
  font-size: 20px;
  border-radius: 6px;
  box-shadow: 0px 0px 10px 0px grey;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

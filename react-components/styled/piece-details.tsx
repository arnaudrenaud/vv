import styled from 'styled-components';
import { SERIF_FONT_FAMILY } from '../global/common';

export const StyledMainContainer = styled.main`
  padding: 0 0 64px;
`;

export const StyledImageWrapper = styled.div``;

export const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const StyledTitle = styled.h1`
  margin: 0;
  border-left: 1px solid black;
  padding: 16px 16px 0 16px;
  font-size: 1.125rem;
  font-weight: normal;
  font-style: italic;
  font-family: ${SERIF_FONT_FAMILY};
`;

export const StyledDetails = styled.div`
  margin: 16px 0;
  display: grid;
  gap: 8px;
`;

export const StyledYearOfProduction = styled.div``;

export const StyledDimensions = styled.div`
  color: #555;
`;

export const StyledTechniqueDetails = styled.div`
  color: #555;

  &::first-letter {
    text-transform: capitalize;
  }
`;

export const StyledPriceAndOrder = styled.div`
  margin-top: 8px;
  border-left: 1px solid #999;
  padding-top: 8px;
  padding-left: 12px;
  font-size: 1rem;
`;

export const StyledTotalPrice = styled.div`
  font-size: 1.125rem;
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

export const StyledPriceDetails = styled.div``;

export const StyledPriceDetailsList = styled.ul`
  margin: 6px 0 0;
  padding-inline-start: 8px;
  list-style-type: none;
  font-size: 0.8125rem;
  color: #555;
`;

export const StyledPriceDetailsListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const StyledPriceDetailsListItemTotalPrice = styled.span`
  text-align: end;
  white-space: nowrap;
`;

export const StyledOrderButton = styled.button`
  float: right;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 6px 8px;
  font-size: 0.8125rem;
  text-transform: uppercase;
  font-weight: bold;
  color: initial;
  background: transparent;
  box-shadow: 1px 1px black;

  &:active {
    background: #ddd;
    box-shadow: inset 1px 1px black;
  }
`;

export const StyledTotalPriceLabel = styled.span`
  font-size: 1rem;
`;

import styled from 'styled-components';
import { PieceOrientation } from '../../model/piece/types';
import { Button, SERIF_FONT_FAMILY } from '../global/common';

export const StyledMainContainer = styled.main`
  padding: 0 0 64px;
`;

export const StyledImageWrapper = styled.div`
  @media (min-width: 960px) and (min-aspect-ratio: 4 / 3) {
    position: fixed;
    top: 0;
    right: 0;
    width: 100vh;
    height: 100vh;
  } ;
`;

export const StyledPieceWrapper = styled.div`
  border-left: 1px solid;
`;

export const StyledImageLink = styled.a<{ orientation: PieceOrientation }>`
  display: block;
  @media (min-width: 960px) and (min-aspect-ratio: 4 / 3) {
    ${({ orientation }) =>
      orientation === PieceOrientation.PORTRAIT
        ? 'width: 71.4%; height: 100%; margin-left: 64px'
        : 'margin-top: 79px'}
  }
`;

export const StyledImage = styled.img<{ orientation: PieceOrientation }>`
  display: block;
  width: 100%;
  height: auto;

  @media (min-width: 960px) and (min-aspect-ratio: 4 / 3) {
    ${({ orientation }) =>
      orientation === PieceOrientation.PORTRAIT &&
      `
      height: 100%;
      margin-top: 0;
    `}
  }
`;

export const StyledTitle = styled.h1`
  margin: 0 16px 0;
  padding-top: 24px;
  font-size: 1.125rem;
  font-weight: normal;
  font-style: italic;
  font-family: ${SERIF_FONT_FAMILY};

  @media (min-width: 960px) and (min-aspect-ratio: 4 / 3) {
    margin-top: 32px;
    margin-bottom: 24px;
  }
`;

export const StyledDetails = styled.div`
  margin: 16px 16px 8px;
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
  padding-top: 8px;
  font-size: 1rem;
`;

export const StyledTotalPrice = styled.div`
  font-size: 1.125rem;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
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

export const StyledOrderButton = styled(Button)`
  margin: 0 16px 0 0;
`;

export const StyledTotalPriceLabel = styled.span`
  font-size: 1rem;
`;

export const StyledOrderFormWrapper = styled.div`
  margin-top: 4px;
  padding: 16px;
  background: #f9f9f9;
`;

export const StyledOrderFormInfo = styled.p`
  font-size: calc(15rem / 16);
`;

export const StyledOrderFormAdditionalInfo = styled.span`
  font-size: calc(13rem / 16);
`;

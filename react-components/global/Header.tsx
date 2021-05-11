import React from 'react';
import styled from 'styled-components';

import { SITE_TITLE } from '../../utils/constants';
import { StyledCenteringWrapper } from './common';

const StyledHeader = styled.header`
  border-left: 1px solid black;
  padding: 24px 16px 8px;
  display: grid;
  gap: 12px;
`;

const StyledParagraph = styled.p`
  margin: 0;
  font-size: 0.9375rem;
`;

const StyledHeadParagraph = styled(StyledParagraph)`
  font-size: 1.0625rem;
`;

const StyledServiceTitle = styled.span`
  font-style: italic;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 1.1875rem;
`;

const StyledLogo = styled.img`
  display: block;
  height: 1.0625rem;
  margin-bottom: 30px;
`;

const Header = ({
  isOnIndexPage,
  isOnPieceDetailsPage,
}: {
  isOnIndexPage?: boolean;
  isOnPieceDetailsPage?: boolean;
}) => {
  return (
    <StyledCenteringWrapper isOnPieceDetailsPage={isOnPieceDetailsPage}>
      <StyledHeader>
        <StyledHeadParagraph>
          <StyledLogo src={'/logo.svg'} />
          {isOnIndexPage && (
            <>
              <StyledServiceTitle>{SITE_TITLE}</StyledServiceTitle>
              <span> est un service de vidéosurveillance artisanale.</span>
            </>
          )}
        </StyledHeadParagraph>
        {isOnIndexPage && (
          <StyledParagraph>
            <a href="/special-order">Commandez un dessin paramétrable</a> ou
            consultez les dessins existants :
          </StyledParagraph>
        )}
      </StyledHeader>
    </StyledCenteringWrapper>
  );
};

export default Header;

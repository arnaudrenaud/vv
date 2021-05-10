import React from 'react';
import styled from 'styled-components';

import { StyledCenteringWrapper } from './CenteringWrapper';

const StyledHeader = styled.header`
  border-left: 1px solid black;
  padding: 48px 16px 0px;
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
  height: 1.0625rem;
  margin-right: 8px;
`;

const Header = () => (
  <StyledCenteringWrapper>
    <StyledHeader>
      <StyledHeadParagraph>
        <StyledLogo src={'/logo.svg'} />
        <StyledServiceTitle>Traces</StyledServiceTitle> est un service de
        vidéosurveillance artisanale.
      </StyledHeadParagraph>
      <StyledParagraph>
        <a href="/special-order">Commandez un dessin paramétrable</a> ou
        consultez les dessins existants :
      </StyledParagraph>
    </StyledHeader>
  </StyledCenteringWrapper>
);

export default Header;

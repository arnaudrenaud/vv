import React from 'react';
import styled from 'styled-components';

import { SITE_TITLE } from '../../utils/constants';
import StyledCenteringWrapper from './CenteringWrapper';
import Logo from './Logo';

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
        <Logo isOnIndexPage={isOnIndexPage} />
        <StyledHeadParagraph>
          {isOnIndexPage && (
            <>
              <StyledServiceTitle>{SITE_TITLE}</StyledServiceTitle>{' '}
              <span>est un projet de transcription manuelle du mouvement.</span>
            </>
          )}
        </StyledHeadParagraph>
        {isOnIndexPage && (
          <StyledParagraph>
            Chaque trait résulte du suivi d’une figure dans une scène filmée.
          </StyledParagraph>
        )}
      </StyledHeader>
    </StyledCenteringWrapper>
  );
};

export default Header;

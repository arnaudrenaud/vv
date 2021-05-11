import React from 'react';
import styled from 'styled-components';
import { StyledCenteringWrapper } from './common';

const StyledPositioningWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const StyledFooter = styled.footer`
  border-right: 1px solid black;
  padding: 0px 16px 32px;
  text-align: end;
  font-size: 0.9375rem;
`;

const Footer = ({
  isOnPieceDetailsPage,
}: {
  isOnPieceDetailsPage?: boolean;
}) => (
  <StyledPositioningWrapper>
    <StyledCenteringWrapper isOnPieceDetailsPage={isOnPieceDetailsPage}>
      <StyledFooter>
        <a
          href="https://www.arnaudrenaud.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.arnaudrenaud.com
        </a>
      </StyledFooter>
    </StyledCenteringWrapper>
  </StyledPositioningWrapper>
);

export default Footer;

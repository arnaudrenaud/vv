import styled from 'styled-components';
import { WIDE_SCREEN_MEDIA_QUERY } from './constants';

export default styled.div<{
  isOnPieceDetailsPage?: boolean;
}>`
  max-width: 640px;
  margin: 0 auto;
  padding: 0 16px;

  ${({ isOnPieceDetailsPage }) =>
    isOnPieceDetailsPage &&
    `
    ${WIDE_SCREEN_MEDIA_QUERY} {
      max-width: none;
      margin-right: 100vh;
      padding: 0 48px;
  }`}
`;

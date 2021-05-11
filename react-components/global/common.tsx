import styled from 'styled-components';

export const SERIF_FONT_FAMILY = "Georgia, 'Times New Roman', Times, serif";

export const WIDE_SCREEN_MEDIA_QUERY =
  '@media (min-width: 960px) and (min-aspect-ratio: 4 / 3)';

export const StyledCenteringWrapper = styled.div<{
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

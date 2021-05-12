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

export const Button = styled.button`
  margin: 10px 0 0;
  border: 1px solid black;
  border-radius: 4px;
  padding: 6px 8px;
  font-size: 0.8125rem;
  text-transform: uppercase;
  font-weight: bold;
  color: initial;
  background: white;
  box-shadow: 1px 1px black;

  &:active {
    background: #eee;
    box-shadow: inset 1px 1px black;
  }
`;

export const StyledInputField = styled.input`
  margin: 0;
  border: 1px solid #999;
  border-radius: 4px;
  padding: 4px 4px 5px;
  font-size: 1rem;
  -webkit-appearance: none;
`;

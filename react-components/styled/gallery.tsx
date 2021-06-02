import styled from 'styled-components';
import { PieceOrientation } from '../../model/piece/types';

export const Main = styled.main`
  padding: 64px 0;
`;

export const LinkToPieceDetails = styled.a<{ orientation: PieceOrientation }>`
  display: block;
  margin: 0 auto;
  width: ${({ orientation }) =>
    orientation === PieceOrientation.LANDSCAPE ? '100%' : '71.4%'};
`;

export const PiecePrice = styled.span<{ isAvailable: boolean }>`
  ${({ isAvailable }) => !isAvailable && 'text-decoration: line-through'}
`;

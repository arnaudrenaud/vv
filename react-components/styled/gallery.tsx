import styled from 'styled-components';
import { PieceOrientation } from '../../model/piece/types';

export const LinkToPieceDetails = styled.a<{ orientation: PieceOrientation }>`
  display: block;
  margin: 0 auto;
  width: ${({ orientation }) =>
    orientation === PieceOrientation.LANDSCAPE ? '100%' : '71.4%'};
`;

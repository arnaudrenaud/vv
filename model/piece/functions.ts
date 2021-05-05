import { Piece } from './types';
import { pieces } from './collection';

const PAGE_SIZE = 5;
export const getPieces = ({ pageNumber }: { pageNumber: number }): Piece[] => {
  const skip = PAGE_SIZE * (pageNumber - 1);
  return pieces.slice(skip, skip + PAGE_SIZE);
};

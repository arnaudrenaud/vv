import { Piece } from './types';
import { pieces } from './collection';
import {
  PIECE_BASE_PRICE,
  PIECE_PRICE_PER_ADULT,
  PIECE_PRICE_PER_CHILD,
  PIECE_PRICE_PER_DOG,
  PIECE_PRICE_PER_NON_FLYING_BIRD,
  PIECE_PRICE_PER_FLYING_BIRD,
  PIECE_PRICE_PER_SUBJECT_COMING_AND_GOING,
} from './constants';

const PAGE_SIZE = 5;
export const getPieces = ({ pageNumber }: { pageNumber: number }): Piece[] => {
  const skip = PAGE_SIZE * (pageNumber - 1);
  return pieces.slice(skip, skip + PAGE_SIZE);
};

export const getPiece = (id: string) => pieces.find((piece) => piece.id === id);

export const getPiecePrice = (piece: Piece): number =>
  PIECE_BASE_PRICE +
  PIECE_PRICE_PER_ADULT * (piece.numberOfAdults || 0) +
  PIECE_PRICE_PER_CHILD * (piece.numberOfChildren || 0) +
  PIECE_PRICE_PER_DOG * (piece.numberOfDogs || 0) +
  PIECE_PRICE_PER_NON_FLYING_BIRD * (piece.numberOfNonFlyingBirds || 0) +
  PIECE_PRICE_PER_FLYING_BIRD * (piece.numberOfFlyingBirds || 0) +
  PIECE_PRICE_PER_SUBJECT_COMING_AND_GOING *
    (piece.numberOfSubjectsComingAndGoing || 0);

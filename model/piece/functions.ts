import { Piece } from './types';
import { pieces } from './collection';
import {
  PIECE_PRICE_FOR_SCENE_RECORDING,
  PIECE_PRICE_PER_ADULT,
  PIECE_PRICE_PER_CHILD,
  PIECE_PRICE_PER_DOG,
  PIECE_PRICE_PER_NON_FLYING_BIRD,
  PIECE_PRICE_PER_FLYING_BIRD,
  PIECE_PRICE_PER_SUBJECT_COMING_AND_GOING,
  PIECE_PRICE_FOR_DOUBLE_TRACING,
} from './constants';
import { KNOWN_ERRORS } from '../../utils/model/constants';

const PAGE_SIZE = 5;
export const getPieces = ({ pageNumber }: { pageNumber: number }): Piece[] => {
  const skip = PAGE_SIZE * (pageNumber - 1);
  return pieces.slice(skip, skip + PAGE_SIZE);
};

export const getPiece = (id: string) => {
  const piece = pieces.find((piece) => piece.id === id);
  if (!piece) {
    throw Error(KNOWN_ERRORS.PIECE_DOES_NOT_EXIST.id);
  }
  return piece;
};

export const getPiecePrice = (piece: Piece): number =>
  (piece.sceneRecording ? PIECE_PRICE_FOR_SCENE_RECORDING : 0) +
  (piece.doubleTracing ? PIECE_PRICE_FOR_DOUBLE_TRACING : 0) +
  PIECE_PRICE_PER_ADULT * (piece.numberOfAdults || 0) +
  PIECE_PRICE_PER_CHILD * (piece.numberOfChildren || 0) +
  PIECE_PRICE_PER_DOG * (piece.numberOfDogs || 0) +
  PIECE_PRICE_PER_NON_FLYING_BIRD * (piece.numberOfNonFlyingBirds || 0) +
  PIECE_PRICE_PER_FLYING_BIRD * (piece.numberOfFlyingBirds || 0) +
  PIECE_PRICE_PER_SUBJECT_COMING_AND_GOING *
    (piece.numberOfSubjectsComingAndGoing || 0);

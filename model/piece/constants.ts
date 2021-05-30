import { PieceTechnique, PieceTechniqueDetails } from './types';

export const pieceTechniqueHTMLLabel = {
  [PieceTechnique.FELT_PEN_ON_PAPER]: 'feutre sur papier',
};
export const pieceTechniqueDetailsHTMLLabel = {
  [PieceTechniqueDetails.ONE_POINT_0_MM_FELT_PEN_ON_180_G_PER_SQ_M_GRAIN_PAPER]:
    'feutre 1,0&thinsp;mm sur papier à grain 180 g&thinsp;/&thinsp;m²',
};

export const PIECE_PRICE_FOR_SCENE_RECORDING = 12;
export const PIECE_PRICE_FOR_DOUBLE_TRACING = 18;
export const PIECE_PRICE_PER_ADULT = 3;
export const PIECE_PRICE_PER_CHILD = 4;
export const PIECE_PRICE_PER_DOG = 4;
export const PIECE_PRICE_PER_NON_FLYING_BIRD = 5;
export const PIECE_PRICE_PER_FLYING_BIRD = 7;
export const PIECE_PRICE_PER_SUBJECT_COMING_AND_GOING = 6;

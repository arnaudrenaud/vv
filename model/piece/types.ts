export enum PieceOrientation {
  PORTRAIT = 'portrait',
  LANDSCAPE = 'landscape',
}

export enum PieceTechnique {
  FELT_PEN_ON_PAPER = 'feutre sur papier',
}

export enum PieceTechniqueDetails {
  ONE_POINT_0_MM_FELT_PEN_ON_180_G_PER_SQ_M_GRAIN_PAPER = 'feutre 1,0&thinsp;mm sur papier à grain 180 g&thinsp;/&thinsp;m²',
}

export type Piece = {
  id: string;
  orientation: PieceOrientation;
  title: string;
  heightCm: number;
  widthCm: number;
  technique: PieceTechnique;
  techniqueDetails: PieceTechniqueDetails;
  videoRecording?: boolean;
  firstTracing?: boolean;
  secondTracing?: boolean;
  numberOfAdults?: number;
  numberOfChildren?: number;
  numberOfDogs?: number;
  numberOfNonFlyingBirds?: number;
  numberOfFlyingBirds?: number;
  numberOfSubjectsComingAndGoing?: number;
};

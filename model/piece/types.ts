export enum PieceOrientation {
  PORTRAIT = 'portrait',
  LANDSCAPE = 'landscape',
}

export enum PieceTechnique {
  FELT_PEN_ON_PAPER = 'FELT_PEN_ON_PAPER',
}

export enum PieceTechniqueDetails {
  ONE_POINT_0_MM_FELT_PEN_ON_180_G_PER_SQ_M_GRAIN_PAPER = 'ONE_POINT_0_MM_FELT_PEN_ON_180_G_PER_SQ_M_GRAIN_PAPER',
}

export type Piece = {
  id: string;
  isAvailable: boolean;
  orientation: PieceOrientation;
  title: string;
  heightCm: number;
  widthCm: number;
  technique: PieceTechnique;
  techniqueDetails: PieceTechniqueDetails;
  sceneRecording?: boolean;
  doubleTracing?: boolean;
  numberOfAdults?: number;
  numberOfChildren?: number;
  numberOfDogs?: number;
  numberOfNonFlyingBirds?: number;
  numberOfFlyingBirds?: number;
  numberOfSubjectsComingAndGoing?: number;
};

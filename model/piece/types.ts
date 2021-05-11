export enum PieceOrientation {
  PORTRAIT = 'portrait',
  LANDSCAPE = 'landscape',
}

export type Piece = {
  id: string;
  orientation: PieceOrientation;
  title: string;
  heightCm: number;
  widthCm: number;
  technique: string;
  techniqueDetails: string;
  numberOfAdults?: number;
  numberOfChildren?: number;
  numberOfDogs?: number;
  numberOfNonFlyingBirds?: number;
  numberOfFlyingBirds?: number;
  numberOfSubjectsComingAndGoing?: number;
};

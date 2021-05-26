import {
  Piece,
  PieceOrientation,
  PieceTechnique,
  PieceTechniqueDetails,
} from './types';

export const pieces: Piece[] = [
  {
    id: 'rue-des-alouettes-pigeon-deux-chiens-trois-personnes-dont-maitresse',
    orientation: PieceOrientation.PORTRAIT,
    title:
      'Un pigeon, deux chiens, trois personnes dont la maîtresse des chiens (rue des Alouettes, Paris)',
    heightCm: 42,
    widthCm: 30,
    technique: PieceTechnique.FELT_PEN_ON_PAPER,
    techniqueDetails:
      PieceTechniqueDetails.ONE_POINT_0_MM_FELT_PEN_ON_180_G_PER_SQ_M_GRAIN_PAPER,
    numberOfAdults: 3,
    numberOfDogs: 2,
    numberOfNonFlyingBirds: 1,
  },
  {
    id: 'rue-des-alouettes-trois-pigeons-corbeau-scooter',
    orientation: PieceOrientation.PORTRAIT,
    title:
      'Trois pigeons, un corbeau, un scooter les chassant (rue des Alouettes, Paris)',
    heightCm: 42,
    widthCm: 30,
    technique: PieceTechnique.FELT_PEN_ON_PAPER,
    techniqueDetails:
      PieceTechniqueDetails.ONE_POINT_0_MM_FELT_PEN_ON_180_G_PER_SQ_M_GRAIN_PAPER,
    numberOfAdults: 1,
    numberOfFlyingBirds: 4,
  },
  {
    id: 'rue-des-alouettes-deux-chiens-maitre',
    orientation: PieceOrientation.PORTRAIT,
    title: 'Deux chiens, leur maître (rue des Alouettes, Paris)',
    heightCm: 42,
    widthCm: 30,
    technique: PieceTechnique.FELT_PEN_ON_PAPER,
    techniqueDetails:
      PieceTechniqueDetails.ONE_POINT_0_MM_FELT_PEN_ON_180_G_PER_SQ_M_GRAIN_PAPER,
    numberOfAdults: 1,
    numberOfDogs: 2,
  },
  {
    id: 'rue-des-alouettes-six-pigeons-disperses-deux-corbeaux',
    orientation: PieceOrientation.LANDSCAPE,
    title:
      'Six pigeons dispersés par deux corbeaux non représentés (rue des Alouettes, Paris)',
    heightCm: 30,
    widthCm: 42,
    technique: PieceTechnique.FELT_PEN_ON_PAPER,
    techniqueDetails:
      PieceTechniqueDetails.ONE_POINT_0_MM_FELT_PEN_ON_180_G_PER_SQ_M_GRAIN_PAPER,
    numberOfFlyingBirds: 6,
  },
  {
    id: 'rue-des-alouettes-cinq-pigeons',
    orientation: PieceOrientation.LANDSCAPE,
    title: 'Cinq pigeons (rue des Alouettes, Paris)',
    heightCm: 30,
    widthCm: 42,
    technique: PieceTechnique.FELT_PEN_ON_PAPER,
    techniqueDetails:
      PieceTechniqueDetails.ONE_POINT_0_MM_FELT_PEN_ON_180_G_PER_SQ_M_GRAIN_PAPER,
    numberOfNonFlyingBirds: 4,
    numberOfFlyingBirds: 1,
  },
  {
    id: 'rue-des-alouettes-deux-pigeons',
    orientation: PieceOrientation.LANDSCAPE,
    title: 'Deux pigeons (rue des Alouettes, Paris)',
    heightCm: 30,
    widthCm: 42,
    technique: PieceTechnique.FELT_PEN_ON_PAPER,
    techniqueDetails:
      PieceTechniqueDetails.ONE_POINT_0_MM_FELT_PEN_ON_180_G_PER_SQ_M_GRAIN_PAPER,
    numberOfNonFlyingBirds: 2,
  },
  {
    id: 'rue-des-alouettes-trois-personnes-banc',
    orientation: PieceOrientation.LANDSCAPE,
    title: 'Trois personnes gagnant un banc (rue des Alouettes, Paris)',
    heightCm: 30,
    widthCm: 42,
    technique: PieceTechnique.FELT_PEN_ON_PAPER,
    techniqueDetails:
      PieceTechniqueDetails.ONE_POINT_0_MM_FELT_PEN_ON_180_G_PER_SQ_M_GRAIN_PAPER,
    numberOfAdults: 3,
  },
  {
    id: 'rue-des-alouettes-quatre-pigeons-chien-maitre',
    orientation: PieceOrientation.LANDSCAPE,
    title:
      'Quatre pigeons, un chien accompagné de son maître les dérangeant (rue des Alouettes, Paris)',
    heightCm: 30,
    widthCm: 42,
    technique: PieceTechnique.FELT_PEN_ON_PAPER,
    techniqueDetails:
      PieceTechniqueDetails.ONE_POINT_0_MM_FELT_PEN_ON_180_G_PER_SQ_M_GRAIN_PAPER,
    numberOfAdults: 1,
    numberOfDogs: 1,
    numberOfFlyingBirds: 4,
  },
  {
    id: 'rue-des-alouettes-chien-maitre-personne',
    orientation: PieceOrientation.LANDSCAPE,
    title:
      'Un chien, son maître, une personne l’accompagnant (rue des Alouettes, Paris)',
    heightCm: 30,
    widthCm: 42,
    technique: PieceTechnique.FELT_PEN_ON_PAPER,
    techniqueDetails:
      PieceTechniqueDetails.ONE_POINT_0_MM_FELT_PEN_ON_180_G_PER_SQ_M_GRAIN_PAPER,
    numberOfAdults: 2,
    numberOfDogs: 1,
  },
  {
    id: 'rue-des-alouettes-maitre-chien',
    orientation: PieceOrientation.LANDSCAPE,
    title: 'Un maître, son chien (rue des Alouettes, Paris)',
    heightCm: 30,
    widthCm: 42,
    technique: PieceTechnique.FELT_PEN_ON_PAPER,
    techniqueDetails:
      PieceTechniqueDetails.ONE_POINT_0_MM_FELT_PEN_ON_180_G_PER_SQ_M_GRAIN_PAPER,
    numberOfAdults: 1,
    numberOfDogs: 1,
  },
  {
    id: 'rue-des-alouettes-deux-enfants-femme',
    orientation: PieceOrientation.LANDSCAPE,
    title:
      'Deux enfants, une femme les accompagnant (rue des Alouettes, Paris)',
    heightCm: 30,
    widthCm: 42,
    technique: PieceTechnique.FELT_PEN_ON_PAPER,
    techniqueDetails:
      PieceTechniqueDetails.ONE_POINT_0_MM_FELT_PEN_ON_180_G_PER_SQ_M_GRAIN_PAPER,
    numberOfAdults: 1,
    numberOfChildren: 2,
  },
  {
    id: 'rue-des-alouettes-deux-pigeons-homme-banc-livreur-scooter',
    orientation: PieceOrientation.LANDSCAPE,
    title:
      "Deux pigeons, un homme s'asseyant sur un banc, un livreur à pied saluant l'homme du banc puis partant à scooter (rue des Alouettes, Paris)",
    heightCm: 30,
    widthCm: 42,
    technique: PieceTechnique.FELT_PEN_ON_PAPER,
    techniqueDetails:
      PieceTechniqueDetails.ONE_POINT_0_MM_FELT_PEN_ON_180_G_PER_SQ_M_GRAIN_PAPER,
    numberOfAdults: 2,
    numberOfNonFlyingBirds: 2,
    numberOfSubjectsComingAndGoing: 1,
  },
  {
    id: 'rue-des-alouettes-homme-enfant-ballon',
    orientation: PieceOrientation.LANDSCAPE,
    title: 'Un homme et un enfant jouant au ballon (rue des Alouettes, Paris)',
    heightCm: 30,
    widthCm: 42,
    technique: PieceTechnique.FELT_PEN_ON_PAPER,
    techniqueDetails:
      PieceTechniqueDetails.ONE_POINT_0_MM_FELT_PEN_ON_180_G_PER_SQ_M_GRAIN_PAPER,
    numberOfAdults: 1,
    numberOfChildren: 1,
    numberOfSubjectsComingAndGoing: 2,
  },
  {
    id: 'rue-des-alouettes-homme-deux-enfants-voiture',
    orientation: PieceOrientation.LANDSCAPE,
    title:
      'Un homme et deux enfants descendant d’une voiture (rue des Alouettes, Paris)',
    heightCm: 30,
    widthCm: 42,
    technique: PieceTechnique.FELT_PEN_ON_PAPER,
    techniqueDetails:
      PieceTechniqueDetails.ONE_POINT_0_MM_FELT_PEN_ON_180_G_PER_SQ_M_GRAIN_PAPER,
    numberOfAdults: 1,
    numberOfChildren: 2,
  },
  {
    id: 'rue-des-alouettes-deux-femmes-enfant-suivant-une-femme',
    orientation: PieceOrientation.LANDSCAPE,
    title:
      "Deux femmes marchant chacune avec un enfant, les enfants suivant l'une d'elles, l'autre repartant seule (rue des Alouettes, Paris)",
    heightCm: 30,
    widthCm: 42,
    technique: PieceTechnique.FELT_PEN_ON_PAPER,
    techniqueDetails:
      PieceTechniqueDetails.ONE_POINT_0_MM_FELT_PEN_ON_180_G_PER_SQ_M_GRAIN_PAPER,
    numberOfAdults: 2,
    numberOfChildren: 2,
  },
];

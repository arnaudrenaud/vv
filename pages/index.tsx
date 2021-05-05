import Head from 'next/head';
import styles from '../styles/Home.module.css';
import galleryStyles from '../styles/Gallery.module.css';

enum PieceOrientation {
  PORTRAIT = 'portrait',
  LANDSCAPE = 'landscape',
}

type Piece = {
  id: string;
  orientation: PieceOrientation;
  title: string;
  heightCm: number;
  widthCm: number;
  technique: string;
  numberOfAdults?: number;
  numberOfChildren?: number;
  numberOfDogs?: number;
  numberOfNonFlyingBirds?: number;
  numberOfFlyingBirds?: number;
  numberOfSubjectsComingAndGoing?: number;
};

const getPiecePrice = (piece: Piece): number =>
  30 +
  3 * (piece.numberOfAdults || 0) +
  4 * (piece.numberOfChildren || 0) +
  4 * (piece.numberOfDogs || 0) +
  5 * (piece.numberOfNonFlyingBirds || 0) +
  7 * (piece.numberOfFlyingBirds || 0) +
  6 * (piece.numberOfSubjectsComingAndGoing || 0);

const GalleryPiece = ({ piece }: { piece: Piece }) => (
  <li>
    <img
      className={`${galleryStyles.piece__image} ${
        galleryStyles[`piece__image--${piece.orientation}`]
      }`}
      src={`/gallery-images/${piece.id}.jpg`}
      loading="lazy"
      width={piece.orientation === 'landscape' ? 600 : 428}
      height={piece.orientation === 'landscape' ? 428 : 600}
    />
    <div className={galleryStyles['piece-title']}>
      {piece.title}
      <div className={galleryStyles['piece-technique']}>
        {piece.heightCm}&thinsp;x&thinsp;{piece.widthCm}&thinsp;cm,{' '}
        {piece.technique}
      </div>
      <div className={galleryStyles['piece-details']}>
        {getPiecePrice(piece)} € — <a href="/">détails</a>
      </div>
    </div>
  </li>
);

export default function Home() {
  const pieces = [
    {
      id: 'rue-des-alouettes-pigeon-deux-chiens-trois-personnes-dont-maitresse',
      orientation: PieceOrientation.PORTRAIT,
      title:
        'Un pigeon, deux chiens, trois personnes dont la maîtresse des chiens (rue des Alouettes, Paris)',
      heightCm: 42,
      widthCm: 30,
      technique: 'feutre sur papier',
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
      technique: 'feutre sur papier',
      numberOfAdults: 1,
      numberOfFlyingBirds: 4,
    },
    {
      id: 'rue-des-alouettes-deux-chiens-maitre',
      orientation: PieceOrientation.PORTRAIT,
      title: 'Deux chiens, leur maître (rue des Alouettes, Paris)',
      heightCm: 42,
      widthCm: 30,
      technique: 'feutre sur papier',
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
      technique: 'feutre sur papier',
      numberOfFlyingBirds: 6,
    },
    {
      id: 'rue-des-alouettes-cinq-pigeons',
      orientation: PieceOrientation.LANDSCAPE,
      title: 'Cinq pigeons (rue des Alouettes, Paris)',
      heightCm: 30,
      widthCm: 42,
      technique: 'feutre sur papier',
      numberOfNonFlyingBirds: 4,
      numberOfFlyingBirds: 1,
    },
    {
      id: 'rue-des-alouettes-deux-pigeons',
      orientation: PieceOrientation.LANDSCAPE,
      title: 'Deux pigeons (rue des Alouettes, Paris)',
      heightCm: 30,
      widthCm: 42,
      technique: 'feutre sur papier',
      numberOfNonFlyingBirds: 2,
    },
    {
      id: 'rue-des-alouettes-trois-personnes-banc',
      orientation: PieceOrientation.LANDSCAPE,
      title: 'Trois personnes gagnant un banc (rue des Alouettes, Paris)',
      heightCm: 30,
      widthCm: 42,
      technique: 'feutre sur papier',
      numberOfAdults: 3,
    },
    {
      id: 'rue-des-alouettes-quatre-pigeons-chien-maitre',
      orientation: PieceOrientation.LANDSCAPE,
      title:
        'Quatre pigeons, un chien accompagné de son maître les dérangeant (rue des Alouettes, Paris)',
      heightCm: 30,
      widthCm: 42,
      technique: 'feutre sur papier',
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
      technique: 'feutre sur papier',
      numberOfAdults: 2,
      numberOfDogs: 1,
    },
    {
      id: 'rue-des-alouettes-maitre-chien',
      orientation: PieceOrientation.LANDSCAPE,
      title: 'Un maître, son chien (rue des Alouettes, Paris)',
      heightCm: 30,
      widthCm: 42,
      technique: 'feutre sur papier',
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
      technique: 'feutre sur papier',
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
      technique: 'feutre sur papier',
      numberOfAdults: 2,
      numberOfNonFlyingBirds: 2,
      numberOfSubjectsComingAndGoing: 1,
    },
    {
      id: 'rue-des-alouettes-homme-enfant-ballon',
      orientation: PieceOrientation.LANDSCAPE,
      title:
        'Un homme et un enfant jouant au ballon (rue des Alouettes, Paris)',
      heightCm: 30,
      widthCm: 42,
      technique: 'feutre sur papier',
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
      technique: 'feutre sur papier',
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
      technique: 'feutre sur papier',
      numberOfAdults: 2,
      numberOfChildren: 2,
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Vestiges vidéo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.header__icon}></div>
        <p className={styles.header__paragraph}>
          <i>Vestiges vidéo</i> est un service de vidéosurveillance dessinée.
        </p>
        <p className={styles.header__paragraph}>
          <a href="/special-order">Commandez un dessin inédit</a> ou consultez
          les dessins existants :
        </p>
      </header>

      <main className={styles.main}>
        <ul className={galleryStyles.gallery}>
          {pieces.map((piece) => (
            <GalleryPiece piece={piece} key={piece.id} />
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.arnaudrenaud.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.arnaudrenaud.com
        </a>
      </footer>
    </div>
  );
}

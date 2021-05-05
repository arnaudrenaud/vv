import next, { GetServerSideProps } from 'next';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import galleryStyles from '../styles/Gallery.module.css';
import { getPieces } from '../model/piece/functions';
import { Piece } from '../model/piece/types';
import { useInfiniteScrollPagination } from '../utils/react-hooks';

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

export const getServerSideProps: GetServerSideProps = async (): Promise<{
  props: { initialPieces: Piece[] };
}> => {
  const pieces = getPieces({ pageNumber: 1 });
  return { props: { initialPieces: pieces } };
};

const Index = ({ initialPieces }: { initialPieces: Piece[] }) => {
  const [pieces] = useInfiniteScrollPagination(initialPieces, 'pieces') as [
    Piece[]
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
};

export default Index;

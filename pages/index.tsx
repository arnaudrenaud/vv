import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Common.module.css';
import galleryStyles from '../styles/Gallery.module.css';
import { getPieces } from '../model/piece/functions';
import { Piece } from '../model/piece/types';
import { useInfiniteScrollPagination } from '../utils/react-hooks';
import Header from '../react-components/global/Header';
import Footer from '../react-components/global/Footer';

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
    <Link href={`/pieces/${piece.id}`} passHref>
      <a>
        <img
          className={`${galleryStyles.piece__image} ${
            galleryStyles[`piece__image--${piece.orientation}`]
          }`}
          src={`/gallery-images/${piece.id}.jpg`}
          loading="lazy"
          width={piece.orientation === 'landscape' ? 600 : 428}
          height={piece.orientation === 'landscape' ? 428 : 600}
        />
      </a>
    </Link>
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
        <title>Traces</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <ul className={galleryStyles.gallery}>
          {pieces.map((piece) => (
            <GalleryPiece piece={piece} key={piece.id} />
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

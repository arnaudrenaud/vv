import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import galleryStyles from '../styles/Gallery.module.css';
import { LinkToPieceDetails } from '../react-components/styled/gallery';
import { Piece } from '../model/piece/types';
import { getPieces, getPiecePrice } from '../model/piece/functions';
import { PageContainer } from '../react-components/global/PageContainer';
import Header from '../react-components/global/Header';
import Footer from '../react-components/global/Footer';
import { useInfiniteScrollPagination } from '../utils/react-hooks';
import { pieceTechniqueHTMLLabel, SITE_TITLE } from '../utils/constants';

const StyledMain = styled.main`
  padding: 64px 0;
`;

const GalleryPiece = ({ piece }: { piece: Piece }) => (
  <li>
    <Link href={`/pieces/${piece.id}`} passHref>
      <LinkToPieceDetails orientation={piece.orientation}>
        <img
          className={galleryStyles.piece__image}
          src={`/gallery-images/${piece.id}.jpg`}
          loading="lazy"
          width={piece.orientation === 'landscape' ? 600 : 428}
          height={piece.orientation === 'landscape' ? 428 : 600}
        />
      </LinkToPieceDetails>
    </Link>
    <div className={galleryStyles['piece-title']}>
      {piece.title}
      <div className={galleryStyles['piece-technique']}>
        {piece.heightCm}&thinsp;x&thinsp;{piece.widthCm}&thinsp;cm,{' '}
        {pieceTechniqueHTMLLabel[piece.technique]}
      </div>
      <div className={galleryStyles['piece-details']}>
        {getPiecePrice(piece)}&thinsp;€ —{' '}
        <Link href={`/pieces/${piece.id}`} passHref>
          <a>détails</a>
        </Link>
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
    <PageContainer>
      <Head>
        <title>{SITE_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header isOnIndexPage />

      <StyledMain>
        <ul className={galleryStyles.gallery}>
          {pieces.map((piece) => (
            <GalleryPiece piece={piece} key={piece.id} />
          ))}
        </ul>
      </StyledMain>

      <Footer />
    </PageContainer>
  );
};

export default Index;

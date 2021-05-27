import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import {
  PIECE_PRICE_FOR_DOUBLE_TRACING,
  PIECE_PRICE_FOR_SCENE_RECORDING,
  PIECE_PRICE_PER_ADULT,
  PIECE_PRICE_PER_CHILD,
  PIECE_PRICE_PER_DOG,
  PIECE_PRICE_PER_FLYING_BIRD,
  PIECE_PRICE_PER_NON_FLYING_BIRD,
  PIECE_PRICE_PER_SUBJECT_COMING_AND_GOING,
} from '../../model/piece/constants';

import { getPiece, getPiecePrice } from '../../model/piece/functions';
import { Piece } from '../../model/piece/types';
import {
  Button,
  StyledCenteringWrapper,
  StyledInputField,
} from '../../react-components/global/common';
import Footer from '../../react-components/global/Footer';
import Header from '../../react-components/global/Header';
import { PageContainer } from '../../react-components/global/PageContainer';
import {
  StyledPriceDetails,
  StyledPriceDetailsList,
  StyledPriceDetailsListItem,
  StyledPriceDetailsListItemTotalPrice,
  StyledMainContainer,
  StyledImageWrapper,
  StyledImage,
  StyledTitle,
  StyledDetails,
  StyledYearOfProduction,
  StyledDimensions,
  StyledTechniqueDetails,
  StyledPriceAndOrder,
  StyledTotalPrice,
  StyledTotalPriceLabel,
  StyledOrderButton,
  StyledPieceWrapper,
  StyledOrderFormInfo,
  StyledOrderFormWrapper,
  StyledImageLink,
} from '../../react-components/styled/piece-details';
import {
  pieceTechniqueDetailsHTMLLabel,
  SITE_TITLE,
} from '../../utils/constants';

const PriceDetails = ({ piece }: { piece: Piece }) => {
  const fixedPriceFeatures = [
    {
      key: 'sceneRecording',
      label: 'captation de la scène',
      price: PIECE_PRICE_FOR_SCENE_RECORDING,
    },
    {
      key: 'doubleTracing',
      label: 'décalque double',
      price: PIECE_PRICE_FOR_DOUBLE_TRACING,
    },
  ];

  const multipliablePriceFeatures = [
    {
      key: 'numberOfAdults',
      labelForSingular: 'tracé d’adulte',
      labelForPlural: 'tracés d’adulte',
      unitPrice: PIECE_PRICE_PER_ADULT,
    },
    {
      key: 'numberOfChildren',
      labelForSingular: 'tracé d’enfant',
      labelForPlural: 'tracés d’enfant',
      unitPrice: PIECE_PRICE_PER_CHILD,
    },
    {
      key: 'numberOfDogs',
      labelForSingular: 'tracé de chien',
      labelForPlural: 'tracés de chien',
      unitPrice: PIECE_PRICE_PER_DOG,
    },
    {
      key: 'numberOfNonFlyingBirds',
      labelForSingular: 'tracé d’oiseau non volant',
      labelForPlural: 'tracés d’oiseau non volant',
      unitPrice: PIECE_PRICE_PER_NON_FLYING_BIRD,
    },
    {
      key: 'numberOfFlyingBirds',
      labelForSingular: 'tracé d’oiseau volant',
      labelForPlural: 'tracés d’oiseau volant',
      unitPrice: PIECE_PRICE_PER_FLYING_BIRD,
    },
    {
      key: 'numberOfSubjectsComingAndGoing',
      labelForSingular: 'tracé de figure faisant des allers et retours',
      labelForPlural: 'tracés de figure faisant des allers et retours',
      unitPrice: PIECE_PRICE_PER_SUBJECT_COMING_AND_GOING,
    },
  ];

  return (
    <StyledPriceDetails>
      Prix détaillé&thinsp;:&thinsp;
      <StyledPriceDetailsList>
        {fixedPriceFeatures.map(
          (feature) =>
            piece[feature.key] && (
              <StyledPriceDetailsListItem key={feature.key}>
                {feature.label}&thinsp;:&thinsp;
                <StyledPriceDetailsListItemTotalPrice>
                  {feature.price}&thinsp;€
                </StyledPriceDetailsListItemTotalPrice>
              </StyledPriceDetailsListItem>
            )
        )}
        {multipliablePriceFeatures.map(
          (feature) =>
            piece[feature.key] && (
              <StyledPriceDetailsListItem key={feature.key}>
                {piece[feature.key]}{' '}
                {piece[feature.key] > 1
                  ? feature.labelForPlural
                  : feature.labelForSingular}
                &thinsp;:&thinsp;
                <StyledPriceDetailsListItemTotalPrice>
                  {piece[feature.key]}&thinsp;x&thinsp;{feature.unitPrice}
                  &thinsp;=&thinsp;
                  {feature.unitPrice * piece[feature.key]}&thinsp;€
                </StyledPriceDetailsListItemTotalPrice>
              </StyledPriceDetailsListItem>
            )
        )}
      </StyledPriceDetailsList>
    </StyledPriceDetails>
  );
};

const OrderForm = () => (
  <>
    <div>Commande&thinsp;:</div>
    <StyledOrderFormInfo>
      Entrez votre adresse email et vous serez contacté pour convenir des modes
      de paiement et de livraison.
    </StyledOrderFormInfo>
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label>
        Email&thinsp;:{' '}
        <StyledInputField
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
        />
      </label>
      <br />
      <Button type="submit">Envoyer</Button>
    </form>
  </>
);

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<{
  props: { piece: Piece };
}> => {
  const { id } = context.query;

  const piece = getPiece(id as string);
  return { props: { piece: piece } };
};

export default function PieceDetails({ piece }: { piece: Piece }) {
  const [showOrderForm, setShowOrderForm] = useState(false);

  return (
    <PageContainer>
      <Head>
        <title>
          {SITE_TITLE} – {piece.title}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header isOnPieceDetailsPage />

      <StyledMainContainer>
        <StyledImageWrapper>
          <StyledImageLink
            href={`/detail-images/${piece.id}.jpg`}
            target="_blank"
            rel="noopener noreferrer"
            orientation={piece.orientation}
          >
            <StyledImage
              src={`/detail-images/${piece.id}.jpg`}
              orientation={piece.orientation}
              width={piece.orientation === 'landscape' ? 600 : 428}
              height={piece.orientation === 'landscape' ? 428 : 600}
            />
          </StyledImageLink>
        </StyledImageWrapper>
        <StyledCenteringWrapper isOnPieceDetailsPage>
          <StyledPieceWrapper>
            <StyledTitle>{piece.title}</StyledTitle>
            <StyledDetails>
              <StyledYearOfProduction>2021</StyledYearOfProduction>
              <StyledDimensions>
                {piece.heightCm}&thinsp;x&thinsp;{piece.widthCm}&thinsp;cm
              </StyledDimensions>
              <StyledTechniqueDetails
                dangerouslySetInnerHTML={{
                  __html:
                    pieceTechniqueDetailsHTMLLabel[piece.techniqueDetails],
                }}
              />
              <StyledPriceAndOrder>
                <PriceDetails piece={piece} />
                <StyledTotalPrice>
                  <StyledTotalPriceLabel>
                    Prix total&thinsp;:&thinsp;
                  </StyledTotalPriceLabel>
                  {getPiecePrice(piece)}&thinsp;€
                </StyledTotalPrice>
              </StyledPriceAndOrder>
            </StyledDetails>
            <StyledOrderFormWrapper>
              {showOrderForm ? (
                <OrderForm />
              ) : (
                <StyledOrderButton
                  onClick={() => {
                    setShowOrderForm(true);
                  }}
                >
                  Commander
                </StyledOrderButton>
              )}
            </StyledOrderFormWrapper>
          </StyledPieceWrapper>
        </StyledCenteringWrapper>
      </StyledMainContainer>

      <Footer isOnPieceDetailsPage />
    </PageContainer>
  );
}

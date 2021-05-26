import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import {
  PIECE_PRICE_FOR_FIRST_TRACING,
  PIECE_PRICE_FOR_SECOND_TRACING,
  PIECE_PRICE_FOR_VIDEO_RECORDING,
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
  StyledOrderFormAdditionalInfo,
  StyledImageLink,
} from '../../react-components/styled/piece-details';
import { SITE_TITLE } from '../../utils/constants';

const PriceDetails = ({ piece }: { piece: Piece }) => {
  const fixedPriceFeatures = [
    {
      key: 'videoRecording',
      label: 'captation vidéo',
      price: PIECE_PRICE_FOR_VIDEO_RECORDING,
    },
    {
      key: 'firstTracing',
      label: 'premier décalque',
      price: PIECE_PRICE_FOR_FIRST_TRACING,
    },
    {
      key: 'secondTracing',
      label: 'second décalque',
      price: PIECE_PRICE_FOR_SECOND_TRACING,
    },
  ];

  const multipliablePriceFeatures = [
    {
      key: 'numberOfAdults',
      label: 'par adulte',
      unitPrice: PIECE_PRICE_PER_ADULT,
    },
    {
      key: 'numberOfChildren',
      label: 'par enfant',
      unitPrice: PIECE_PRICE_PER_CHILD,
    },
    {
      key: 'numberOfDogs',
      label: 'par chien',
      unitPrice: PIECE_PRICE_PER_DOG,
    },
    {
      key: 'numberOfNonFlyingBirds',
      label: 'par oiseau non volant',
      unitPrice: PIECE_PRICE_PER_NON_FLYING_BIRD,
    },
    {
      key: 'numberOfFlyingBirds',
      label: 'par oiseau volant',
      unitPrice: PIECE_PRICE_PER_FLYING_BIRD,
    },
    {
      key: 'numberOfSubjectsComingAndGoing',
      label: 'par sujet faisant des allers et retours',
      unitPrice: PIECE_PRICE_PER_SUBJECT_COMING_AND_GOING,
    },
  ];

  return (
    <StyledPriceDetails>
      Détail du prix&thinsp;:&thinsp;
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
                {feature.unitPrice}&thinsp;€ {feature.label}&thinsp;:&thinsp;
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
                dangerouslySetInnerHTML={{ __html: piece.techniqueDetails }}
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

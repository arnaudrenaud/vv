import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';

import {
  pieceTechniqueDetailsHTMLLabel,
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
import InputFieldSet from '../../react-components/global/InputFieldSet';
import InputField from '../../react-components/global/InputField';
import StyledCenteringWrapper from '../../react-components/global/CenteringWrapper';
import { ButtonWithLoadingIndicator } from '../../react-components/global/ButtonWithLoadingIndicator';
import Footer from '../../react-components/global/Footer';
import Header from '../../react-components/global/Header';
import { PageContainer } from '../../react-components/global/PageContainer';
import * as styled from '../../react-components/styled/piece-details';
import { SITE_TITLE } from '../../utils/constants';
import { queryApi } from '../../utils/query-api';

const PriceDetails = ({ piece }: { piece: Piece }) => {
  const fixedPriceFeatures = [
    {
      key: 'sceneRecording',
      label: 'captation vidéo de la scène',
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
      labelForSingular: 'figure d’adulte',
      labelForPlural: 'figures d’adulte',
      unitPrice: PIECE_PRICE_PER_ADULT,
    },
    {
      key: 'numberOfChildren',
      labelForSingular: 'figure d’enfant',
      labelForPlural: 'figures d’enfant',
      unitPrice: PIECE_PRICE_PER_CHILD,
    },
    {
      key: 'numberOfDogs',
      labelForSingular: 'figure de chien',
      labelForPlural: 'figures de chien',
      unitPrice: PIECE_PRICE_PER_DOG,
    },
    {
      key: 'numberOfNonFlyingBirds',
      labelForSingular: 'figure d’oiseau non volant',
      labelForPlural: 'figures d’oiseau non volant',
      unitPrice: PIECE_PRICE_PER_NON_FLYING_BIRD,
    },
    {
      key: 'numberOfFlyingBirds',
      labelForSingular: 'figure d’oiseau volant',
      labelForPlural: 'figures d’oiseau volant',
      unitPrice: PIECE_PRICE_PER_FLYING_BIRD,
    },
    {
      key: 'numberOfSubjectsComingAndGoing',
      labelForSingular: 'figure faisant des allers et retours',
      labelForPlural: 'figures faisant des allers et retours',
      unitPrice: PIECE_PRICE_PER_SUBJECT_COMING_AND_GOING,
    },
  ];

  return (
    <styled.StyledPriceDetails>
      Prix détaillé&thinsp;:&thinsp;
      <styled.StyledPriceDetailsList>
        {fixedPriceFeatures.map(
          (feature) =>
            piece[feature.key] && (
              <styled.StyledPriceDetailsListItem key={feature.key}>
                {feature.label}&thinsp;:&thinsp;
                <styled.StyledPriceDetailsListItemTotalPrice>
                  {feature.price}&thinsp;€
                </styled.StyledPriceDetailsListItemTotalPrice>
              </styled.StyledPriceDetailsListItem>
            )
        )}
        {multipliablePriceFeatures.map(
          (feature) =>
            piece[feature.key] && (
              <styled.StyledPriceDetailsListItem key={feature.key}>
                {piece[feature.key]}{' '}
                {piece[feature.key] > 1
                  ? feature.labelForPlural
                  : feature.labelForSingular}
                &thinsp;:&thinsp;
                <styled.StyledPriceDetailsListItemTotalPrice>
                  {piece[feature.key]}&thinsp;x&thinsp;{feature.unitPrice}
                  &thinsp;=&thinsp;
                  {feature.unitPrice * piece[feature.key]}&thinsp;€
                </styled.StyledPriceDetailsListItemTotalPrice>
              </styled.StyledPriceDetailsListItem>
            )
        )}
      </styled.StyledPriceDetailsList>
    </styled.StyledPriceDetails>
  );
};

enum OrderFormSubmissionStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
}

const OrderForm = ({ pieceId }: { pieceId: string }) => {
  const [submissionStatus, setSubmissionStatus] =
    useState<OrderFormSubmissionStatus>(OrderFormSubmissionStatus.IDLE);

  const submit = async (email: string) => {
    setSubmissionStatus(OrderFormSubmissionStatus.LOADING);
    try {
      await queryApi(
        'POST',
        'orders',
        {},
        {
          pieceId,
          email,
        }
      );
      setSubmissionStatus(OrderFormSubmissionStatus.SUCCEEDED);
    } catch (error) {
      setSubmissionStatus(OrderFormSubmissionStatus.FAILED);
    }
  };

  return (
    <>
      <div>Commande&thinsp;:</div>
      <styled.StyledOrderFormInfo>
        Entrez votre adresse email et vous serez contacté pour convenir des
        modes de paiement et de livraison.
      </styled.StyledOrderFormInfo>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          if (submissionStatus === OrderFormSubmissionStatus.IDLE) {
            const formData = new FormData(event.currentTarget);
            const email = formData.get('email') as string;
            await submit(email);
          }
        }}
      >
        <InputFieldSet
          disabled={submissionStatus !== OrderFormSubmissionStatus.IDLE}
        >
          <label>
            Email&thinsp;:{' '}
            <InputField
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              autoFocus
            />
          </label>
        </InputFieldSet>
        <br />
        {(submissionStatus === OrderFormSubmissionStatus.IDLE ||
          submissionStatus === OrderFormSubmissionStatus.LOADING) && (
          <ButtonWithLoadingIndicator
            type="submit"
            loading={submissionStatus === OrderFormSubmissionStatus.LOADING}
          >
            <span>Envoyer</span>
          </ButtonWithLoadingIndicator>
        )}
      </form>
      {submissionStatus === OrderFormSubmissionStatus.SUCCEEDED ? (
        <styled.StyledOrderFormSubmissionStatus>
          Votre commande a été enregistrée. Vous allez recevoir un email de
          confirmation.
        </styled.StyledOrderFormSubmissionStatus>
      ) : submissionStatus === OrderFormSubmissionStatus.FAILED ? (
        <styled.StyledOrderFormSubmissionStatusFailed>
          Votre commande n’a pas pu être enregistrée. Veuillez rafraîchir la
          page et réessayer.
        </styled.StyledOrderFormSubmissionStatusFailed>
      ) : null}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<{
  props: { piece: Piece };
}> => {
  const { id } = context.query;

  const piece = getPiece(id as string);
  return { props: { piece } };
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

      <styled.StyledMainContainer>
        <styled.StyledImageWrapper>
          <styled.StyledImageLink
            href={`/detail-images/${piece.id}.jpg`}
            target="_blank"
            rel="noopener noreferrer"
            orientation={piece.orientation}
          >
            <styled.StyledImage
              src={`/detail-images/${piece.id}.jpg`}
              orientation={piece.orientation}
              width={piece.orientation === 'landscape' ? 600 : 428}
              height={piece.orientation === 'landscape' ? 428 : 600}
            />
          </styled.StyledImageLink>
        </styled.StyledImageWrapper>
        <StyledCenteringWrapper isOnPieceDetailsPage>
          <styled.StyledPieceWrapper>
            <styled.StyledTitle>{piece.title}</styled.StyledTitle>
            <styled.StyledDetails>
              <styled.StyledYearOfProduction>
                2021
              </styled.StyledYearOfProduction>
              <styled.StyledDimensions>
                {piece.heightCm}&thinsp;x&thinsp;{piece.widthCm}&thinsp;cm
              </styled.StyledDimensions>
              <styled.StyledTechniqueDetails
                dangerouslySetInnerHTML={{
                  __html:
                    pieceTechniqueDetailsHTMLLabel[piece.techniqueDetails],
                }}
              />
              <styled.StyledPriceAndOrder>
                <PriceDetails piece={piece} />
                <styled.StyledTotalPrice>
                  <styled.StyledTotalPriceLabel>
                    Prix total&thinsp;:&thinsp;
                  </styled.StyledTotalPriceLabel>
                  {getPiecePrice(piece)}&thinsp;€
                </styled.StyledTotalPrice>
              </styled.StyledPriceAndOrder>
            </styled.StyledDetails>
            <styled.StyledOrderFormWrapper>
              {showOrderForm ? (
                <OrderForm pieceId={piece.id} />
              ) : piece.isAvailable ? (
                <styled.StyledOrderButton
                  onClick={() => {
                    setShowOrderForm(true);
                  }}
                >
                  Commander
                </styled.StyledOrderButton>
              ) : (
                'Cette pièce n‘est pas disponible à la vente.'
              )}
            </styled.StyledOrderFormWrapper>
          </styled.StyledPieceWrapper>
        </StyledCenteringWrapper>
      </styled.StyledMainContainer>

      <Footer isOnPieceDetailsPage />
    </PageContainer>
  );
}

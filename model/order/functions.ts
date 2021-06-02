import dotenv from 'dotenv';
import { connect as connectToMailjet, Email } from 'node-mailjet';
import { v4 as uuidV4 } from 'uuid';
import validator from 'validator';

const { isEmail, isURL } = validator;

import { SITE_TITLE } from '../../utils/constants';
import { getPiece, getPiecePrice } from '../piece/functions';

dotenv.config();

const {
  MAILJET_APIKEY_PUBLIC,
  MAILJET_APIKEY_PRIVATE,
  SERVICE_EMAIL_ADDRESS,
  MANAGER_EMAIL_ADDRESS,
} = process.env;
const mailjet = connectToMailjet(MAILJET_APIKEY_PUBLIC, MAILJET_APIKEY_PRIVATE);

const serviceEmailsSender = {
  Email: SERVICE_EMAIL_ADDRESS,
  Name: SITE_TITLE,
};

const getContentForOrderConfirmationEmailToBuyer = (
  orderId: string,
  pieceDetailsUrl: string,
  piecePrice: number
) =>
  `Votre commande a bien été enregistrée. Vous serez prochainement contacté pour convenir des modes de paiement et de livraison.

––––––––––

Identifiant de commande : ${orderId}
Pièce commandée : ${pieceDetailsUrl}
Prix : ${piecePrice} €
`;

const getOrderConfirmationEmailToBuyer = (
  orderId: string,
  pieceDetailsUrl: string,
  piecePrice: number,
  buyerEmailAddress: string
): Email.SendParamsMessage => {
  return {
    From: serviceEmailsSender,
    To: [
      {
        Email: buyerEmailAddress,
      },
    ],
    Subject: 'Confirmation de votre commande',
    TextPart: getContentForOrderConfirmationEmailToBuyer(
      orderId,
      pieceDetailsUrl,
      piecePrice
    ),
    HTMLPart: '',
  };
};

const getContentForOrderConfirmationEmailToManager = (
  buyerEmailAddress: string,
  orderId: string,
  pieceDetailsUrl: string,
  piecePrice: number
) =>
  `${buyerEmailAddress} a passé une commande.

––––––––––

Identifiant de commande : ${orderId}
Pièce commandée : ${pieceDetailsUrl}
Prix : ${piecePrice} €
`;

const getOrderConfirmationEmailToManager = (
  orderId: string,
  pieceDetailsUrl: string,
  piecePrice: number,
  buyerEmailAddress: string
): Email.SendParamsMessage => {
  return {
    From: serviceEmailsSender,
    To: [
      {
        Email: MANAGER_EMAIL_ADDRESS,
      },
    ],
    ReplyTo: { Email: buyerEmailAddress },
    Subject: `Nouvelle commande de ${buyerEmailAddress}`,
    TextPart: getContentForOrderConfirmationEmailToManager(
      buyerEmailAddress,
      orderId,
      pieceDetailsUrl,
      piecePrice
    ),
    HTMLPart: '',
  };
};

const sendOrderEmails = async (
  orderId: string,
  pieceDetailsUrl: string,
  piecePrice: number,
  buyerEmailAddress: string
) => {
  await mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      getOrderConfirmationEmailToBuyer(
        orderId,
        pieceDetailsUrl,
        piecePrice,
        buyerEmailAddress
      ),
      getOrderConfirmationEmailToManager(
        orderId,
        pieceDetailsUrl,
        piecePrice,
        buyerEmailAddress
      ),
    ],
  });
};

export const PROCESS_ORDER_ERROR_MESSAGES = {
  INVALID_INPUT: 'Invalid input.',
};

export const processOrder = async (
  webOrigin: string,
  pieceId: string,
  buyerEmailAddress: string
): Promise<void> => {
  const piece = getPiece(pieceId);
  if (
    !isURL(webOrigin, { require_tld: false }) ||
    !isEmail(buyerEmailAddress) ||
    !piece
  ) {
    throw Error(PROCESS_ORDER_ERROR_MESSAGES.INVALID_INPUT);
  }
  const orderId = uuidV4();
  const piecePrice = getPiecePrice(piece);
  const pieceDetailsUrl = `${webOrigin}/pieces/${pieceId}`;
  await sendOrderEmails(
    orderId,
    pieceDetailsUrl,
    piecePrice,
    buyerEmailAddress
  );
};

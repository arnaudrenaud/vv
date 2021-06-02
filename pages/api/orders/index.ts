import type { NextApiRequest, NextApiResponse } from 'next';
import {
  processOrder,
  PROCESS_ORDER_ERROR_MESSAGES,
} from '../../../model/order/functions';
import { INTERNAL_ERROR_MESSAGE } from '../../../utils/api/constants';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { origin: webOrigin } = req.headers;
  const { pieceId, email } = req.body;
  if (
    !webOrigin ||
    !pieceId ||
    !email ||
    typeof pieceId !== 'string' ||
    typeof email !== 'string'
  ) {
    return res
      .status(400)
      .json({ error: PROCESS_ORDER_ERROR_MESSAGES.INVALID_INPUT });
  }
  try {
    await processOrder(webOrigin, pieceId, email);
    return res.status(201).json({});
  } catch (error) {
    if (error.message === PROCESS_ORDER_ERROR_MESSAGES.INVALID_INPUT) {
      return res
        .status(400)
        .json({ error: PROCESS_ORDER_ERROR_MESSAGES.INVALID_INPUT });
    }
    console.error(error);
    return res.status(500).json({ error: INTERNAL_ERROR_MESSAGE });
  }
};

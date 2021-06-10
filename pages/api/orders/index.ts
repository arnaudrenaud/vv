import type { NextApiRequest, NextApiResponse } from 'next';
import {
  processOrder,
  PROCESS_ORDER_ERROR_MESSAGES,
} from '../../../model/order/functions';
import { INTERNAL_ERROR_MESSAGE } from '../../../utils/api/constants';

const handleError = async (
  req: NextApiRequest,
  res: NextApiResponse,
  runController: () => Promise<void>
): Promise<void> => {
  try {
    await runController();
  } catch (error) {
    console.error({ error, req });
    if (error.message === PROCESS_ORDER_ERROR_MESSAGES.INVALID_INPUT) {
      return res
        .status(400)
        .json({ error: PROCESS_ORDER_ERROR_MESSAGES.INVALID_INPUT });
    }
    return res.status(500).json({ error: INTERNAL_ERROR_MESSAGE });
  }
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> =>
  handleError(req, res, async () => {
    const { origin: webOrigin } = req.headers;
    const { pieceId, email } = req.body;
    if (
      !webOrigin ||
      !pieceId ||
      !email ||
      typeof pieceId !== 'string' ||
      typeof email !== 'string'
    ) {
      throw Error(PROCESS_ORDER_ERROR_MESSAGES.INVALID_INPUT);
    }
    await processOrder(webOrigin, pieceId, email);
    return res.status(201).json({});
  });

import type { NextApiRequest, NextApiResponse } from 'next';
import { processOrder } from '../../../model/order/functions';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { origin: webOrigin } = req.headers;
  const { pieceId, email } = req.body;
  await processOrder(webOrigin, pieceId, email);
  return res.status(201).json({});
};

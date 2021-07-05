import type { NextApiRequest, NextApiResponse } from 'next';
import { processOrder } from '../../../model/order/functions';
import { handleApiError, allowOnlyMethods } from '../../../utils/api/functions';
import { KNOWN_ERRORS } from '../../../utils/model/constants';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> =>
  handleApiError(req, res, async () => {
    allowOnlyMethods(req.method, ['POST']);

    const { origin: webOrigin } = req.headers;
    const { pieceId, email } = req.body;
    if (
      !webOrigin ||
      !pieceId ||
      !email ||
      typeof pieceId !== 'string' ||
      typeof email !== 'string'
    ) {
      throw Error(KNOWN_ERRORS.PROCESS_ORDER_INVALID_INPUT.id);
    }
    await processOrder(webOrigin, pieceId, email);
    return res.status(201).json({});
  });

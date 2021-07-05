import type { NextApiRequest, NextApiResponse } from 'next';
import {
  handleApiError,
  allowOnlyMethods,
  logClientError,
} from '../../../utils/api/functions';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> =>
  handleApiError(req, res, async () => {
    allowOnlyMethods(req.method, ['POST']);

    const { message, stack } = req.body;
    logClientError(message, stack, req);
    return res.status(201).json({});
  });

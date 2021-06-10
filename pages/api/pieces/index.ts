import type { NextApiRequest, NextApiResponse } from 'next';

import { getPieces } from '../../../model/piece/functions';
import { respondWithErrorIfMethodNotAllowed } from '../../../utils/api/functions';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  respondWithErrorIfMethodNotAllowed(req.method, ['GET']);

  return res.status(200).json({
    pieces: getPieces({
      pageNumber: parseInt(req.query.pageNumber as string, 10),
    }),
  });
};

import type { NextApiRequest, NextApiResponse } from 'next';

import { getPieces } from '../../../model/piece/functions';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  return res.status(200).json({
    pieces: getPieces({
      pageNumber: parseInt(req.query.pageNumber as string, 10),
    }),
  });
};

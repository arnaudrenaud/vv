import { NextApiRequest, NextApiResponse } from 'next';
import { KNOWN_ERRORS } from '../model/constants';

export const allowOnlyMethods = (method: string, allowedMethods: string[]) => {
  if (!allowedMethods.includes(method)) {
    throw Error(KNOWN_ERRORS.METHOD_NOT_ALLOWED.id);
  }
};

export const handleApiError = async (
  req: NextApiRequest,
  res: NextApiResponse,
  runController: () => Promise<void>
): Promise<void> => {
  try {
    const response = await runController();
    return response;
  } catch (error) {
    console.error({ errorType: 'server', error, req });
    const knownError = KNOWN_ERRORS[error.message] || {
      message: 'Internal error.',
      httpStatusCode: 500,
    };
    return res
      .status(knownError.httpStatusCode)
      .json({ error: knownError.message });
  }
};

export const logClientError = async (
  message: string,
  stack: string,
  req: NextApiRequest
) => {
  console.error({ errorType: 'client', message, stack, req });
};

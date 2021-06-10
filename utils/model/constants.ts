type KnownError = {
  id: string;
  message: string;
  httpStatusCode: number;
};

export const KNOWN_ERRORS: Record<string, KnownError> = {
  PROCESS_ORDER_INVALID_INPUT: {
    id: 'PROCESS_ORDER_INVALID_INPUT',
    message: 'Invalid input.',
    httpStatusCode: 400,
  },
  METHOD_NOT_ALLOWED: {
    id: 'METHOD_NOT_ALLOWED',
    message: 'Method not allowed.',
    httpStatusCode: 405,
  },
};

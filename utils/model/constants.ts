type KnownError = {
  id: string;
  message: string;
  httpStatusCode: number;
};

export const KNOWN_ERRORS: Record<string, KnownError> = {
  METHOD_NOT_ALLOWED: {
    id: 'METHOD_NOT_ALLOWED',
    message: 'Method not allowed.',
    httpStatusCode: 405,
  },
  PROCESS_ORDER_INVALID_INPUT: {
    id: 'PROCESS_ORDER_INVALID_INPUT',
    message: 'Invalid input.',
    httpStatusCode: 400,
  },
  PIECE_DOES_NOT_EXIST: {
    id: 'PIECE_DOES_NOT_EXIST',
    message: 'Piece does not exist.',
    httpStatusCode: 404,
  },
};

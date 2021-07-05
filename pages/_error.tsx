import Error from 'next/error';
import { KNOWN_ERRORS } from '../utils/model/constants';

Error.getInitialProps = ({ req, err }) => {
  console.error({ err, req });

  const knownError = KNOWN_ERRORS[err.message] || {
    httpStatusCode: 500,
  };

  return { statusCode: knownError.httpStatusCode };
};

export default Error;

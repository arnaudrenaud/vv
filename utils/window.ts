import { logError } from './query-api';

export function getPageLocation(): string | (() => string) {
  return typeof window === 'undefined' ? '' : window.location.href;
}

export const reportErrorsToServer = () => {
  console.log('adding event listeners');

  window.addEventListener('error', (event) => {
    const { message, stack } = event.error;
    logError(message, stack);
  });

  window.addEventListener(
    'unhandledrejection',
    (event: PromiseRejectionEvent) => {
      const { message, stack } = event.reason;
      logError(message, stack);
    }
  );
};

export function getPageLocation(): string | (() => string) {
  return typeof window === 'undefined' ? '' : window.location.href;
}

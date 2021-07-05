export const queryApi = async (
  method: string,
  ressourceName: string,
  query: Record<string, string | number> = {},
  body: Record<string, string | number> = null
): Promise<unknown> => {
  const queryString = new URLSearchParams(
    query as Record<string, string>
  ).toString();
  const response = await fetch(`/api/${ressourceName}?${queryString}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    ...(body && { body: JSON.stringify(body) }),
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.error);
  }
  return json;
};

export const getPieces = async (pageNumber: number) =>
  (await queryApi('GET', 'pieces', { pageNumber }))['pieces'];

export const logError = async (message: string, stack: string) =>
  await queryApi('POST', 'client-errors', {}, { message, stack });

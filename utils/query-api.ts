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
  if (!response.ok) {
    throw new Error();
  }
  return response.json();
};

export const getPieces = async (pageNumber: number) =>
  (await queryApi('GET', 'pieces', { pageNumber }))['pieces'];

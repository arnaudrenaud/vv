export const queryApi = async (
  ressourceName: string,
  query: Record<string, string | number>
): Promise<unknown> => {
  const queryString = new URLSearchParams(
    query as Record<string, string>
  ).toString();
  const response = await fetch(`/api/${ressourceName}?${queryString}`);
  return response.json();
};

export const getPieces = async (pageNumber: number) =>
  (await queryApi('pieces', { pageNumber }))['pieces'];

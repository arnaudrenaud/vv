const queryApi = async (
  ressourceName: string,
  query: Record<string, string | number>
): Promise<unknown> => {
  const queryString = new URLSearchParams(
    query as Record<string, string>
  ).toString();
  const response = await fetch(`/api/${ressourceName}?${queryString}`);
  return (await response.json())[ressourceName];
};

export { queryApi };

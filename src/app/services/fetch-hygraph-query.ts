export const fetchHygraphQuery = async <T>(query: string): Promise<T> => {
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN!}`,
    },
    body: JSON.stringify({
      query,
    }),
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }

  const result = await response.json();
  return result.data as T;
};

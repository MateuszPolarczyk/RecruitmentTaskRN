export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

export const fetchCharacters = async (
  params?: Record<string, string>,
): Promise<ApiResponse> => {
  const queryString = params
    ? '?' +
      Object.entries(params)
        .map(
          ([key, value]) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
        )
        .join('&')
    : '';

  const response = await fetch(
    `https://rickandmortyapi.com/api/character${queryString}`,
  );

  if (!response.ok) {
    throw new Error('Network response error');
  }

  return response.json();
};

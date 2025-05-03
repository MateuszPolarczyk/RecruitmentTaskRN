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

const speciesMap: Record<string, string> = {
  Human: 'Human',
};

export const fetchCharacters = async (
  params?: Record<string, string | string[]>,
): Promise<ApiResponse> => {
  if (params?.species) {
    const species = Array.isArray(params.species) ? params.species : [params.species];
    const mappedSpecies = species.map((s) => speciesMap[s] || s);
    params.species = mappedSpecies.length === 1 ? mappedSpecies[0] : mappedSpecies;
  }

  const queryString = params
    ? '?' +
      Object.entries(params)
        .map(([key, value]) => {
          const valueStr = Array.isArray(value) ? value.join(',') : value;
          return `${encodeURIComponent(key)}=${encodeURIComponent(valueStr)}`;
        })
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

export const fetchCharacter = async (id: number): Promise<Character> => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`,
  );

  if (!response.ok) {
    throw new Error('Failed to fetch character');
  }

  return response.json();
};

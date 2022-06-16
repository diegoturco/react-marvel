export interface CharacterData {
  results: Character[];
}

export interface Character {
  id: number;
  name: string;
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  extension: string;
  path: string;
}

export interface CharacterPagination {
  nameStartsWith: string;
  page: number;
  limit: number;
}

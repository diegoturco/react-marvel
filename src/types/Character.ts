export interface Character {
  id: number,
  name: string,
  thumbnail: Thumbnail
}

export interface Thumbnail {
  extension: string,
  path: string,
}
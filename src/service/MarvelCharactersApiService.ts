import { ROOT_MARVEL_API_URL } from '../utils/constants';

export interface Paginate {
  nameStartsWith: string,
  page: number,
  limit: number
}

const getCharactersList = ({ nameStartsWith, page = 0, limit = 20 } : Paginate) => {
  let nameParam = '';

  if (nameStartsWith) {
    nameParam = `nameStartsWith=${nameStartsWith}&`;
  }
  
  return `${ROOT_MARVEL_API_URL}/characters?limit=${limit}&offset=${
    page * limit
  }&${nameParam}apikey=${process.env.REACT_APP_API_PUBLIC_KEY}`;
};

export class MarvelCharactersApiService {  
  static getPaginated({ nameStartsWith, page, limit } : Paginate) {
    return fetch(getCharactersList({ nameStartsWith, page, limit }))
      .then((response) => response.json())
      .then((responseJson) => responseJson?.data);
  }
}
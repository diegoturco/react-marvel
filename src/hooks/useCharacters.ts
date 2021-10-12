import { useQuery } from 'react-query';
import { MarvelCharactersApiService, Paginate } from '../service/MarvelCharactersApiService';
import { Character } from '../types/Character';

export function useCharacters(charactersListParams: Paginate): Character[] {    
  const { data } = useQuery(['characters', charactersListParams], () => MarvelCharactersApiService.getPaginated(charactersListParams));      
  return data?.results || [] as Character[];  
}
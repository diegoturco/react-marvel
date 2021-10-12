import { useQuery } from 'react-query';
import { MarvelCharactersApiService } from '../service/MarvelCharactersApiService';
import { Character, CharacterPagination } from '../types/Character';

export function useCharacters(charactersListParams: CharacterPagination): Character[] {    
  const { data } = useQuery(['characters', charactersListParams], () => MarvelCharactersApiService.getPaginated(charactersListParams));      
  return data?.results || [] as Character[];  
}
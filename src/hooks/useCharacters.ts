import { useQuery } from 'react-query';
import { MarvelCharactersApiService } from '../service';
import { Character, CharacterPagination } from '../types/Character';

const useCharacters = (
  charactersListParams: CharacterPagination
): Character[] => {
  const { data } = useQuery(['characters', charactersListParams], () =>
    MarvelCharactersApiService.getPaginated(charactersListParams)
  );
  return data?.results || ([] as Character[]);
};

export default useCharacters;

import { StylesProvider, CardContent, Typography, CardActions } from '@material-ui/core';
import { PAGE_LIMIT } from '../utils/constants';
import { Card, CardMedia, Grid } from './styled';
import { useCharacters } from '../hooks/useCharacters';
import { Paginate } from '../service/MarvelCharactersApiService';

function Characters(): JSX.Element {

  const paginate: Paginate = {
    nameStartsWith: '',
    page: 0,
    limit: PAGE_LIMIT
  };

  const characters = useCharacters(paginate);

  return (
    <>
      <StylesProvider injectFirst>
        <Grid container>        
          {characters.map((character, index) =>  (        
            <Grid key={index} item md={2}>     
              <Card variant="outlined">
                <CardMedia
                  component="img"
                  image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                /> 
                <CardContent>
                  <Typography>{character.name}</Typography>
                </CardContent>    
                <CardActions>
                </CardActions>         
              </Card>                                         
            </Grid>                              
          ))}
        </Grid>
      </StylesProvider>
    </>
  );
}

export default Characters;

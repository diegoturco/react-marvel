import { Grid as MuiGrid, Card as MuiCard, CardMedia as MuiCardMedia } from '@material-ui/core';
import styled from 'styled-components';

export const Grid = styled(MuiGrid)`
  flex-basis: 0;
  max-width: none
`;

export const Card = styled(MuiCard)`
  padding: 4px
`;

interface CardMediaProps {
  readonly component: string, 
  readonly image: string, 
  readonly alt: string
};

export const CardMedia = styled(MuiCardMedia)<CardMediaProps>`  
  width: 245px
`;

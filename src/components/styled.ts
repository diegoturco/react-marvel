import { Grid as MuiGrid, Card as MuiCard, CardMedia as MuiCardMedia } from "@material-ui/core";
import styled from "styled-components";

export const Grid = styled(MuiGrid)`
  flex-basis: 0;
  max-width: none
`;

export const Card = styled(MuiCard)`
  padding: 4px
`;

export const CardMedia = styled(MuiCardMedia)<{ component: string, image: string, alt: string}>`  
  width: 245px
`;

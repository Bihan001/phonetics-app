import { Paper } from '@mui/material';
import styled from '@mui/system/styled';
import Flex from 'components/flex';

export const RootContainer = styled(Paper)((props) => ({
  background: '#1ab27333',
  borderRadius: props.theme.shape.borderRadius,
  marginLeft: props.theme.spacing(10),
  marginRight: props.theme.spacing(10),
  padding: '1rem',
}));

export const Header = styled(Paper)((props) => ({
  background: '#1ab27366',
  textAlign: 'center',
  height: '5rem',
  marginTop: '1rem',
  marginBottom: '1.5rem',
  '& > div': {
    height: '100%',
  },
  '& p': {
    fontSize: '1.2rem',
  },
  '& button:not(:last-child)': {
    marginRight: '1rem',
  },
}));


export const CardsContainer = styled(Flex)((props) => ({
  flexWrap: 'wrap',
  marginTop: '1rem',
  '& *:not(:last-child)': {
    marginRight: '1rem',
  },
}));

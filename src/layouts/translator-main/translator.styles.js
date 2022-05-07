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
  padding: '0.1rem 0',
  marginTop: '1rem',
  marginBottom: '1.5rem',
  '& p': {
    fontSize: '1rem',
  },
}));

export const TextArea = styled('textarea')((props) => ({
  width: '100%',
  height: '100%',
  border: 'none',
  outline: 'none',
  resize: 'none',
  padding: '1rem',
  fontSize: '1.4rem',
}));

export const CardsContainer = styled(Flex)((props) => ({
  flexWrap: 'wrap',
  marginTop: '1rem',
  '& *:not(:last-child)': {
    marginRight: '1rem',
  },
}));

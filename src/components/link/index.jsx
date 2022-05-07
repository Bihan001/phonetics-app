import { Link as RouterLink } from 'react-router-dom';
import styled from '@mui/system/styled';
import PropTypes from 'prop-types';

const Link = styled(RouterLink)((props) => ({
  textDecoration: 'none',
  color: props.active ? props.theme.palette.primary.main : props.theme.palette.text.primary,
  ':hover': {
    color: props.theme.palette.primary.main,
  },
}));

Link.propTypes = {
  active: PropTypes.bool,
};

export default Link;

import styled from '@mui/system/styled';
import { oneOf } from 'prop-types';

const Flex = styled('div')((props) => ({
  display: 'flex',
  flexDirection: props.direction,
  justifyContent: props.justify,
  alignItems: props.align,
  flexWrap: props.wrap,
}));

Flex.propTypes = {
  direction: oneOf(['row', 'column']),
  justify: oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around']),
  align: oneOf(['flex-start', 'flex-end', 'center', 'stretch']),
  wrap: oneOf(['nowrap', 'wrap', 'wrap-reverse']),
};

export default Flex;

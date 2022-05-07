import PropTypes, { oneOf } from 'prop-types';
import Flex from 'components/flex';
import { StyledCard } from '../cards.styles';

const InfoCard = ({ label, value, type, ...rest }) => {
  return (
    <StyledCard {...rest}>
      <Flex justify='center'>
        <p>{`${label}: ${value}`}</p>
      </Flex>
    </StyledCard>
  );
};

InfoCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  type: oneOf(['primary', 'secondary']),
};

export default InfoCard;

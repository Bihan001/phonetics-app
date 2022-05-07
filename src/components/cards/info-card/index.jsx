import Flex from 'components/flex';
import React from 'react';
import { StyledCard } from '../cards.styles';

const InfoCard = ({ label, value, type, ...rest }) => {
  return (
    <StyledCard {...rest}>
      <Flex>
        <p>{`${label}: ${value}`}</p>
      </Flex>
    </StyledCard>
  );
};

export default InfoCard;

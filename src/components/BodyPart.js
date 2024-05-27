import React from 'react';
import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Icon from '../assets/icons/gym.png';

const StyledStack = styled(Stack)(({ theme, selected }) => ({
  background: '#fff',
  borderBottomLeftRadius: '20px',
  width: '270px',
  height: '282px',
  cursor: 'pointer',
  gap: '47px',
  borderTop: selected ? '4px solid #FF2625' : 'none',
  '&:hover': {
    boxShadow: theme.shadows[3],
  },
}));

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const handleClick = () => {
    setBodyPart(item);
    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
  };

  return (
    <StyledStack
      type="button"
      alignItems="center"
      justifyContent="center"
      selected={bodyPart === item}
      onClick={handleClick}
    >
      <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </StyledStack>
  );
};

BodyPart.propTypes = {
  item: PropTypes.string.isRequired,
  setBodyPart: PropTypes.func.isRequired,
  bodyPart: PropTypes.string.isRequired,
};

export default React.memo(BodyPart);

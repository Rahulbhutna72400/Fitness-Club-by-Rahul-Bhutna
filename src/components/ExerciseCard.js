import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledLink = styled(Link)({
  display: 'block',
  textDecoration: 'none',
  '& .exercise-card': {
    width: '100%',
    maxWidth: '400px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderTop: '4px solid #FF2625',
    borderBottomLeftRadius: '20px',
    background: '#fff',
    paddingBottom: '10px',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
});

const StyledButton = styled(Button)({
  marginLeft: '21px',
  color: '#fff',
  fontSize: '14px',
  borderRadius: '20px',
  textTransform: 'capitalize',
});

const ExerciseCard = ({ exercise }) => (
  <StyledLink to={`/exercise/${exercise.id}`} className="exercise-card">
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row">
      <StyledButton sx={{ background: '#FFA9A9' }}>
        {exercise.bodyPart}
      </StyledButton>
      <StyledButton sx={{ background: '#FCC757' }}>
        {exercise.target}
      </StyledButton>
    </Stack>
    <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {exercise.name}
    </Typography>
  </StyledLink>
);

ExerciseCard.propTypes = {
  exercise: PropTypes.shape({
    id: PropTypes.string.isRequired,
    gifUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bodyPart: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(ExerciseCard);

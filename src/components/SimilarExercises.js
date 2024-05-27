import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, Stack } from '@mui/material';
import { styled } from '@mui/system';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SectionContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing({ lg: 12.5, xs: 0 }),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '25px',
  marginLeft: theme.spacing(2.5),
  fontWeight: 700,
  color: '#000',
  marginBottom: theme.spacing(4),
  '@media (min-width: 600px)': {
    fontSize: '44px',
  },
}));

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <SectionContainer>
    <SectionTitle>
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </SectionTitle>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}
    </Stack>
    <SectionTitle sx={{ mt: { lg: 12.5, xs: 7.5 } }}>
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </SectionTitle>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? (
        <HorizontalScrollbar data={equipmentExercises} />
      ) : (
        <Loader />
      )}
    </Stack>
  </SectionContainer>
);

SimilarExercises.propTypes = {
  targetMuscleExercises: PropTypes.array.isRequired,
  equipmentExercises: PropTypes.array.isRequired,
};

export default React.memo(SimilarExercises);

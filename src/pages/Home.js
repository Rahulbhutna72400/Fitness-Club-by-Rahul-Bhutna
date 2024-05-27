import React, { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import CarouselComponent from '../components/CarouselComponent';
import DietPlan from '../components/DietPlan'; // Import the new DietPlan component

const HomeContainer = styled(Box)({
  padding: 0,
  margin: 0,
});

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <HomeContainer>
      <HeroBanner />
      <CarouselComponent />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Box id="exercises">
        <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
      </Box>
      <DietPlan /> {/* Add the DietPlan component */}
    </HomeContainer>
  );
};

export default React.memo(Home);


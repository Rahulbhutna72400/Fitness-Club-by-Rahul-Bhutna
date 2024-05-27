import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchContainer = styled(Stack)({
  alignItems: 'center',
  marginTop: '37px',
  justifyContent: 'center',
  padding: '20px',
});

const SearchTitle = styled(Typography)({
  fontWeight: 700,
  textAlign: 'center',
  marginBottom: '49px',
  fontSize: '30px',
  '@media (min-width: 600px)': {
    fontSize: '44px',
  },
});

const SearchBox = styled(Box)({
  position: 'relative',
  marginBottom: '72px',
});

const SearchInput = styled(TextField)({
  height: '76px',
  '& .MuiInputBase-input': {
    fontWeight: 700,
    border: 'none',
    borderRadius: '4px',
  },
  width: '350px',
  backgroundColor: '#fff',
  borderRadius: '40px',
  '@media (min-width: 600px)': {
    width: '1170px',
  },
});

const SearchButton = styled(Button)({
  backgroundColor: '#FF2625',
  color: '#fff',
  textTransform: 'none',
  width: '80px',
  height: '56px',
  position: 'absolute',
  right: '0px',
  fontSize: '14px',
  '@media (min-width: 600px)': {
    width: '173px',
    fontSize: '20px',
  },
});

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  const fetchExercisesData = useCallback(async () => {
    try {
      const response = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      console.log('Body Parts Data:', response); // Debugging line

      if (Array.isArray(response)) {
        setBodyParts(['all', ...response]);
      } else {
        console.error('Fetched body parts data is not an array:', response);
        setBodyParts(['all']);
      }
    } catch (error) {
      console.error('Error fetching body parts data:', error);
      setBodyParts(['all']);
    }
  }, []);

  useEffect(() => {
    fetchExercisesData();
  }, [fetchExercisesData]);

  const handleSearch = async () => {
    if (search) {
      try {
        const response = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=900', exerciseOptions);
        console.log('Searched Exercises Data:', response); // Debugging line

        if (Array.isArray(response)) {
          const searchedExercises = response.filter(
            (item) =>
              item.name.toLowerCase().includes(search) ||
              item.target.toLowerCase().includes(search) ||
              item.equipment.toLowerCase().includes(search) ||
              item.bodyPart.toLowerCase().includes(search)
          );

          window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

          setSearch('');
          setExercises(searchedExercises);
        } else {
          console.error('Fetched exercises data is not an array:', response);
          setExercises([]);
        }
      } catch (error) {
        console.error('Error fetching exercises data:', error);
        setExercises([]);
      }
    }
  };

  return (
    <SearchContainer>
      <SearchTitle>
        Awesome Exercises You <br /> Should Know
      </SearchTitle>
      <SearchBox>
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </SearchBox>
      <Box sx={{ position: 'relative', width: '100%', padding: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </SearchContainer>
  );
};

SearchExercises.propTypes = {
  setExercises: PropTypes.func.isRequired,
  bodyPart: PropTypes.string.isRequired,
  setBodyPart: PropTypes.func.isRequired,
};

export default React.memo(SearchExercises);

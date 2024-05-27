import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const ArrowButton = styled(Typography)({
  cursor: 'pointer',
  background: 'transparent',
  outline: 'none',
  border: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#FF2625',
  fontSize: '25px',
  borderRadius: '4px',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.3)',
  },
});

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <ArrowButton onClick={() => scrollPrev()}>
      <img src={LeftArrowIcon} alt="left-arrow" />
    </ArrowButton>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <ArrowButton onClick={() => scrollNext()}>
      <img src={RightArrowIcon} alt="right-arrow" />
    </ArrowButton>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {bodyParts ? (
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        ) : (
          <ExerciseCard exercise={item} />
        )}
      </Box>
    ))}
  </ScrollMenu>
);

HorizontalScrollbar.propTypes = {
  data: PropTypes.array.isRequired,
  bodyParts: PropTypes.bool,
  setBodyPart: PropTypes.func,
  bodyPart: PropTypes.string,
};

HorizontalScrollbar.defaultProps = {
  bodyParts: false,
  setBodyPart: () => {},
  bodyPart: '',
};

export default React.memo(HorizontalScrollbar);

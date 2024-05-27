import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, Stack } from '@mui/material';
import { styled } from '@mui/system';
import Loader from './Loader';

const VideoLink = styled('a')({
  textDecoration: 'none',
  margin: '10px',
  '& img': {
    borderTopLeftRadius: '20px',
    width: '100%',
    height: 'auto',
  },
});

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' }, padding: '20px' }}>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack
        sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideos.slice(0, 3).map((item, index) => (
          <VideoLink
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </VideoLink>
        ))}
      </Stack>
    </Box>
  );
};

ExerciseVideos.propTypes = {
  exerciseVideos: PropTypes.arrayOf(
    PropTypes.shape({
      video: PropTypes.shape({
        videoId: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        thumbnails: PropTypes.arrayOf(
          PropTypes.shape({
            url: PropTypes.string.isRequired,
          })
        ).isRequired,
        channelName: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
};

export default React.memo(ExerciseVideos);

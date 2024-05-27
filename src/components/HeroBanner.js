import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link as ScrollLink } from 'react-scroll';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBannerContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: '#fff',
  backgroundImage: `url(${HeroBannerImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)', // Dark overlay
    backdropFilter: 'blur(5px)', // Blur effect
    zIndex: 1,
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const HeroBannerText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '26px',
  color: theme.palette.primary.main,
}));

const HeroBannerTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2.875),
  marginTop: theme.spacing(3.75),
  fontSize: '40px',
  [theme.breakpoints.up('lg')]: {
    fontSize: '44px',
  },
}));

const HeroBannerSubtitle = styled(Typography)({
  fontSize: '22px',
  fontFamily: 'Alegreya',
  lineHeight: '35px',
  color: '#fff',
});

const HeroBannerButton = styled(Button)({
  marginTop: '45px',
  textDecoration: 'none',
  width: '200px',
  textAlign: 'center',
  backgroundColor: '#FF2625',
  padding: '14px',
  fontSize: '22px',
  textTransform: 'none',
  color: 'white',
  borderRadius: '4px',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: '#e02424',
  },
});

const HeroBanner = () => (
  <HeroBannerContainer>
    <HeroContent>
      <HeroBannerText>Fitness Club</HeroBannerText>
      <HeroBannerTitle>
        Sweat, Smile <br />
        And Repeat
      </HeroBannerTitle>
      <HeroBannerSubtitle>
        Check out the most effective exercises personalized to you
      </HeroBannerSubtitle>
      <Stack alignItems="center">
        <ScrollLink to="exercises" smooth={true} duration={1000}>
          <HeroBannerButton>
            Explore Exercises
          </HeroBannerButton>
        </ScrollLink>
      </Stack>
    </HeroContent>
  </HeroBannerContainer>
);

export default React.memo(HeroBanner);

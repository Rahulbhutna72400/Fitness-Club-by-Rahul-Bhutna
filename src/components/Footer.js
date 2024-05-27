import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Logo from '../assets/images/Logo.png';

const FooterContainer = styled(Box)({
  marginTop: '80px',
  backgroundColor: '#FFF3F4',
  padding: '40px',
  textAlign: 'center',
});

const FooterLogo = styled('img')({
  width: '250px',
  height: '250px',
});

const FooterText = styled(Typography)({
  marginTop: '41px',
  paddingBottom: '40px',
  fontSize: '20px',
  '@media (min-width:600px)': {
    fontSize: '28px',
  },
});

const Footer = () => (
  <FooterContainer>
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap">
      <FooterLogo src={Logo} alt="logo" />
    </Stack>
    <FooterText variant="h5">
      By Rahul Bhutna
    </FooterText>
  </FooterContainer>
);

export default React.memo(Footer);

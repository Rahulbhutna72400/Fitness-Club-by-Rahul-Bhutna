import React from 'react';
import { Stack } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';
import { styled } from '@mui/system';

const LoaderContainer = styled(Stack)({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Loader = () => (
  <LoaderContainer direction="row">
    <InfinitySpin color="grey" />
  </LoaderContainer>
);

export default React.memo(Loader);

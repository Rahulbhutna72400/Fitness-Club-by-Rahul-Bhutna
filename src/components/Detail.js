import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Stack, Button } from '@mui/material';
import { styled } from '@mui/system';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const DetailImage = styled('img')({
  width: '100%',
  maxWidth: '500px',
  height: 'auto',
});

const ExtraDetailButton = styled(Button)({
  background: '#FFF2DB',
  borderRadius: '50%',
  width: '100px',
  height: '100px',
});

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <DetailImage src={gifUrl} alt={name} loading="lazy" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <ExtraDetailButton>
              <img src={item.icon} alt={item.name} style={{ width: '50px', height: '50px' }} />
            </ExtraDetailButton>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

Detail.propTypes = {
  exerciseDetail: PropTypes.shape({
    bodyPart: PropTypes.string.isRequired,
    gifUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    equipment: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(Detail);

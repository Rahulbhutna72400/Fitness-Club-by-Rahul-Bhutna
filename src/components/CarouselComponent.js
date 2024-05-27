
import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { styled } from '@mui/system';

const workouts = [
  {
    name: "Full Body Workout",
    description: "An intense full-body workout to build strength and endurance.",
    details: "This workout includes squats, push-ups, burpees, and planks. Start with a 5-minute warm-up of light cardio, followed by 3 sets of 12 reps for each exercise. Rest for 60 seconds between sets.",
  },
  {
    name: "HIIT Cardio",
    description: "High-intensity interval training for fat loss and cardiovascular health.",
    details: "This workout includes alternating intervals of high-intensity exercises like jumping jacks, mountain climbers, and sprints with short rest periods. Perform each exercise for 30 seconds, followed by 15 seconds of rest. Repeat for 20 minutes.",
  },
  {
    name: "Strength Training",
    description: "Focused on building muscle strength with weightlifting exercises.",
    details: "This routine includes deadlifts, bench presses, and barbell rows. Perform 4 sets of 8-10 reps for each exercise with appropriate weights. Ensure proper form and rest for 2 minutes between sets.",
  }
];

const ItemContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function WorkoutItem({ item, handleCheckItOut }) {
  return (
    <ItemContainer>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <Button variant="contained" color="primary" onClick={() => handleCheckItOut(item)}>
        Check it out!
      </Button>
    </ItemContainer>
  );
}

function CarouselComponent() {
  const [open, setOpen] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const handleCheckItOut = (workout) => {
    setSelectedWorkout(workout);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedWorkout(null);
  };

  return (
    <>
      <Carousel>
        {workouts.map((item, i) => (
          <WorkoutItem key={i} item={item} handleCheckItOut={handleCheckItOut} />
        ))}
      </Carousel>

      <Dialog open={open} onClose={handleClose} aria-labelledby="workout-dialog-title">
        <DialogTitle id="workout-dialog-title">{selectedWorkout?.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {selectedWorkout?.details}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CarouselComponent;

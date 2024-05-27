import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box, Typography, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { styled } from '@mui/system';

const dietPlans = [
    {
      name: "Keto Diet",
      description: "A high-fat, low-carb diet that helps in weight loss.",
      details: "The ketogenic diet is a high-fat, adequate-protein, low-carbohydrate diet. Example meal plan:\n\nBreakfast: Avocado and eggs\nLunch: Grilled chicken salad with olive oil\nDinner: Salmon with asparagus\nSnacks: Cheese, nuts, and seeds",
      image: "https://upmeals.com/wp-content/uploads/2021/01/keto-diet-foods-46FGGSA-1.jpg" // Replace with actual image URL
    },
    {
      name: "Mediterranean Diet",
      description: "A heart-healthy diet that includes fruits, vegetables, and whole grains.",
      details: "The Mediterranean diet includes high consumption of olive oil, fruits, vegetables, nuts, and whole grains. Example meal plan:\n\nBreakfast: Greek yogurt with honey and berries\nLunch: Quinoa salad with chickpeas and feta\nDinner: Grilled fish with a side of roasted vegetables\nSnacks: Fresh fruit, hummus with carrots",
      image: "https://www.scripps.org/sparkle-assets/images/mediterraneandiet_web-7ce12493f37a553ff8892a1c8ea600eb.jpg" // Replace with actual image URL
    },
    {
      name: "Vegan Diet",
      description: "A plant-based diet that excludes all animal products.",
      details: "Veganism is a plant-based diet that excludes all animal products. Example meal plan:\n\nBreakfast: Smoothie with almond milk, spinach, banana, and chia seeds\nLunch: Lentil soup with whole grain bread\nDinner: Stir-fried tofu with mixed vegetables\nSnacks: Apple slices with almond butter, nuts",
      image: "https://images.everydayhealth.com/images/diet-nutrition/what-is-a-vegan-diet-benefits-food-list-beginners-guide-alt-1440x810.jpg?sfvrsn=1d260c85_1" // Replace with actual image URL
    },
    {
      name: "Paleo Diet",
      description: "A diet based on the types of foods presumed to have been eaten by early humans.",
      details: "The Paleo diet consists of unprocessed foods. Example meal plan:\n\nBreakfast: Scrambled eggs with vegetables\nLunch: Grilled chicken with mixed greens\nDinner: Beef stir-fry with broccoli\nSnacks: Carrot sticks, almonds",
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2023/09/Paleo-diet-foods-3eaa4b8.jpg" // Replace with actual image URL
    },
    {
      name: "Gluten-Free Diet",
      description: "A diet that excludes the protein gluten, found in grains such as wheat, barley, and rye.",
      details: "The Gluten-Free diet is necessary for people with celiac disease. Example meal plan:\n\nBreakfast: Gluten-free oatmeal with berries\nLunch: Quinoa salad with grilled vegetables\nDinner: Baked salmon with quinoa and spinach\nSnacks: Rice cakes with almond butter",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlngSdxviBDB2VX-sYCVizGwsuEekdXG3-XQ&s" // Replace with actual image URL
    },
    {
      name: "Low-Carb Diet",
      description: "A diet that limits carbohydrates and emphasizes high-protein and fat foods.",
      details: "The Low-Carb diet is beneficial for weight loss. Example meal plan:\n\nBreakfast: Eggs and spinach\nLunch: Chicken Caesar salad\nDinner: Grilled steak with asparagus\nSnacks: Greek yogurt, nuts",
      image: "https://media.post.rvohealth.io/wp-content/uploads/2020/04/low-carb-diet-meal-plan-and-menu-1200x628-facebook-1200x628.jpg" // Replace with actual image URL
    },
    {
      name: "Intermittent Fasting",
      description: "An eating pattern that cycles between periods of fasting and eating.",
      details: "Intermittent Fasting includes eating windows. Example meal plan:\n\nBreakfast (after fast): Omelette with vegetables\nLunch: Grilled chicken breast with salad\nDinner: Baked fish with green beans\nSnacks: Mixed nuts, fresh fruit",
      image: "https://www.verywellfit.com/thmb/QNktAcgna2UOS_wNi7mwV5DZ0zs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/overview-intermittent-fasting-2223396-a-9c901805a7fa451088810ccba49e4d59.jpg" // Replace with actual image URL
    },
    {
      name: "DASH Diet",
      description: "Dietary Approaches to Stop Hypertension - a diet to reduce blood pressure.",
      details: "The DASH diet focuses on reducing sodium intake. Example meal plan:\n\nBreakfast: Oatmeal with bananas\nLunch: Turkey sandwich on whole grain bread\nDinner: Stir-fried tofu with vegetables\nSnacks: Carrot sticks, hummus",
      image: "https://images.everydayhealth.com/images/diet-nutrition/weight/what-is-the-dash-diet-1440x810.jpg" // Replace with actual image URL
    },
    {
      name: "Whole30 Diet",
      description: "A 30-day diet that eliminates sugar, alcohol, grains, legumes, soy, and dairy.",
      details: "Whole30 focuses on whole foods. Example meal plan:\n\nBreakfast: Sweet potato hash with eggs\nLunch: Grilled chicken salad\nDinner: Beef and vegetable stew\nSnacks: Apple slices, almond butter",
      image: "https://blog.nasm.org/hubfs/whole30-diet-blog.jpg" // Replace with actual image URL
    },
    {
      name: "Flexitarian Diet",
      description: "A flexible vegetarian diet that occasionally includes meat or fish.",
      details: "The Flexitarian diet is primarily vegetarian but allows flexibility. Example meal plan:\n\nBreakfast: Smoothie with spinach, banana, and almond milk\nLunch: Vegetable stir-fry with tofu\nDinner: Grilled salmon with quinoa and vegetables\nSnacks: Mixed nuts, fresh fruit",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDUxutnijW1yCICF8FilDaPpZ5yPWmgvuGkQ&s" // Replace with actual image URL
    }
  ];

const ItemContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const DietImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  marginBottom: '16px',
});

function DietPlanItem({ item, handleLearnMore }) {
  return (
    <ItemContainer>
      <DietImage src={item.image} alt={item.name} />
      <Typography variant="h5" component="h2">
        {item.name}
      </Typography>
      <Typography variant="body1" component="p" marginBottom="16px">
        {item.description}
      </Typography>
      <Button variant="contained" color="primary" onClick={() => handleLearnMore(item)}>
        Learn More
      </Button>
    </ItemContainer>
  );
}

function DietPlan() {
  const [open, setOpen] = useState(false);
  const [selectedDiet, setSelectedDiet] = useState(null);

  const handleLearnMore = (diet) => {
    setSelectedDiet(diet);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedDiet(null);
  };

  return (
    <Box marginTop="40px">
      <Typography variant="h4" component="h1" textAlign="center" marginBottom="20px">
        Diet Plans
      </Typography>
      <Carousel>
        {dietPlans.map((item, i) => (
          <DietPlanItem key={i} item={item} handleLearnMore={handleLearnMore} />
        ))}
      </Carousel>

      <Dialog open={open} onClose={handleClose} aria-labelledby="diet-plan-dialog-title">
        <DialogTitle id="diet-plan-dialog-title">{selectedDiet?.name}</DialogTitle> {/* Corrected the closing tag */}
        <DialogContent>
          <DialogContentText>
            {selectedDiet?.details}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default DietPlan;

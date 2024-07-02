import React, { useState } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
  Grid,
} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
 
const cardImages = {
  apartment1: '/image/apartment1.jpg',
  apartment2: '/image/apartment2.jpg',
};
 
interface PropertyCard {
  title: string;
  description: string;
  image: string; // Ensure this is typed as string
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
}
 
const cards: PropertyCard[] = [
  {
    title: 'New Apartment Nice View',
    description: 'Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood.',
    image: cardImages.apartment1,
    price: '$34,900',
    location: 'Belmont Gardens, Chicago',
    bedrooms: 3,
    bathrooms: 2,
    area: 3450,
  },
  {
    title: 'Modern Apartments',
    description: 'Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood.',
    image: cardImages.apartment2,
    price: '$34,900',
    location: 'Belmont Gardens, Chicago',
    bedrooms: 3,
    bathrooms: 2,
    area: 3450,
  },
  {
    title: 'Comfortable Apartment',
    description: 'Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood.',
    image: cardImages.apartment1,
    price: '$34,900',
    location: 'Belmont Gardens, Chicago',
    bedrooms: 3,
    bathrooms: 2,
    area: 3450,
  },
  {
    title: 'Luxury Villa in Rego Park',
    description: 'Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood.',
    image: cardImages.apartment2,
    price: '$34,900',
    location: 'Belmont Gardens, Chicago',
    bedrooms: 3,
    bathrooms: 2,
    area: 3450,
  },
];
 
const CardCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };
 
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };
 
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <IconButton onClick={handlePrev} disabled={currentIndex === 0}>
        <ArrowBack />
      </IconButton>
      <Grid container spacing={2} justifyContent="center">
        {cards.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={card.image}
                  alt={card.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color="text.primary">
                    {card.price}
                    <Typography component="span" sx={{ fontSize: '14px', color: 'text.secondary' }}>
                      /Rent
                    </Typography>
                  </Typography>
                  <Typography variant="h6" component="div"  className='font-inter'>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                  <Box display="flex" justifyContent="space-between" marginTop={2}>
                    <Typography variant="body2">
                      <i className="fas fa-bed" /> {card.bedrooms} Bedrooms
                    </Typography>
                    <Typography variant="body2">
                      <i className="fas fa-bath" /> {card.bathrooms} Bathrooms
                    </Typography>
                    <Typography variant="body2">
                      <i className="fas fa-ruler-combined" /> {card.area} sq ft
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <IconButton onClick={handleNext} disabled={currentIndex === cards.length - 1}>
        <ArrowForward />
      </IconButton>
    </Box>
  );
};
 
export default CardCarousel;
 
 
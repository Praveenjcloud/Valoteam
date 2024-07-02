

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
// import Slider from 'react-slick';
// // @ts-ignore
import Slider from 'react-slick';
import { useRouter } from 'next/router';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import image1 from '../public/image/apartment1.jpg';
import image2 from '../public/image/apartment2.jpg';
import image3 from '../public/image/apartment1.jpg';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import "./select.css";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));


interface CardContentProps {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  beds: string;
  baths: string;
}

const cardContents: CardContentProps[] = [
  {
    title: "33 Imrie Rd.",
    subtitle: "The Indie",
    description: "Allston, MA 02134",
    images: [image1.src, image2.src, image3.src],
    beds: "Studio-2bd",
    baths: "1-2ba",
  },
  {
    title: " 11 Bowdoin Ave",
    subtitle: "The Indie",
    description: "Allston, MA 02134",
    images: [image1.src, image2.src, image3.src],
    beds: "Studio-2bd",
    baths: "1-2ba",
  },
  {
    title: "35 Imrie Rd",
    subtitle: "The Indie",
    description: "Allston, MA 02134",
    images: [image1.src, image2.src, image3.src],
    beds: "Studio-2bd",
    baths: "1-2ba",
  },
  {
    title: "11 Bowdoin Ave",
    subtitle: "The Indie",
    description: "Allston, MA 02134",
    images: [image1.src, image2.src, image3.src],
    beds: "Studio-2bd",
    baths: "1-2ba",
  },
  {
    title: "76 Imrie Rd",
    subtitle: "The Indie",
    description: "Allston, MA 02134",
    images: [image1.src, image2.src, image3.src],
    beds: "Studio-2bd",
    baths: "1-2ba",
  },
  {
    title: " 11 Bowdoin Ave",
    subtitle: "The Indie",
    description: "Allston, MA 02134",
    images: [image1.src, image2.src, image3.src],
    beds: "Studio-2bd",
    baths: "1-2ba",
  },
];


const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};


// const CardItem: React.FC<{ cardContent: CardContentProps }> = ({ cardContent }) => (
  
//   <Card sx={{ width: '100%', marginBottom: 2, boxShadow: 3 }}>
//     <Slider {...sliderSettings}>
//       {cardContent.images.map((image: string, index: number) => (
//         <div key={index}>
//           <CardMedia sx={{ height: 200 }} image={image} title={cardContent.title} />
//         </div>
//       ))}
//     </Slider>
//     <CardContent>
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' ,marginTop:"15px"}}>
//         <Typography gutterBottom variant="h5" component="div" style={{fontSize:"17px",fontWeight:"bold"}}>
//           {cardContent.title}
//         </Typography>
//         <IconButton>
//           <MoreVertIcon />
//         </IconButton>
//       </Box>
//       <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
//         <BedIcon sx={{ marginRight: 1 ,color:"#374151"}} />
//         <Typography variant="body2" color="#1a2b3b">
//           {cardContent.beds}
//         </Typography>
//         <BathtubIcon sx={{ marginRight: 1, marginLeft: 2 , color:"#374151"}} />
//         <Typography variant="body2" color="#1a2b3b">
//           {cardContent.baths}
//         </Typography>
//       </Box>
//       {/* <Typography gutterBottom variant="body2" color="#1a2b3b">
//         {cardContent.subtitle}
//       </Typography> */}
//       <Typography variant="body2" color="#1a2b3b">
//         {cardContent.description}
//       </Typography>
//     </CardContent>
//     <CardActions sx={{ justifyContent: 'center', paddingBottom: "20px" }}>
//       <Button variant="outlined" size="small"   sx={{ borderColor: '#c29b40', color: '#002349', width: "100%" ,fontSize: "11px",
//     borderRadius: '30px',
//     paddingTop: "7px",
    
//     paddingBottom: "7px",
//     width:"69%",
//       '&:hover': {
//         backgroundColor: '#c29b40',
//         borderColor: '#c29b40',
//         color: '#fff',
//       },}}>
//         Check Availability
//       </Button>
//     </CardActions>
//   </Card>
// );

const CardItem: React.FC<{ cardContent: CardContentProps }> = ({ cardContent }) => {
  const router = useRouter();

  const handleClicknew = () => {
    router.push('/listingpage');
  };

  return (
    <Card sx={{ width: '100%', marginBottom: 2, boxShadow: 3 }}>
      <Slider {...sliderSettings}>
        {cardContent.images.map((image: string, index: number) => (
          <div key={index}>
            <CardMedia sx={{ height: 200 }} image={image} title={cardContent.title} />
          </div>
        ))}
      </Slider>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: "15px" }}>
          <Typography gutterBottom variant="h5" component="div" style={{ fontSize: "17px", fontWeight: "bold" }}>
            {cardContent.title}
          </Typography>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
          <BedIcon sx={{ marginRight: 1, color: "#374151" }} />
          <Typography variant="body2" color="#1a2b3b">
            {cardContent.beds}
          </Typography>
          <BathtubIcon sx={{ marginRight: 1, marginLeft: 2, color: "#374151" }} />
          <Typography variant="body2" color="#1a2b3b">
            {cardContent.baths}
          </Typography>
        </Box>
        <Typography variant="body2" color="#1a2b3b">
          {cardContent.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', paddingBottom: "20px" }}>
        <Button
          variant="outlined"
          size="small"
          onClick={handleClicknew}
          sx={{
            borderColor: '#c29b40',
            color: '#002349',
            width: "100%",
            fontSize: "11px",
            borderRadius: '30px',
            // paddingTop: "7px",
            // paddingBottom: "7px",
            // // width: "69%",
            // '&:hover': {
            //   backgroundColor: '#c29b40',
            //   borderColor: '#c29b40',
            //   color: '#fff',
            // }
          }}
        >
          Check Availability
        </Button>
      </CardActions>
    </Card>
  );
};

export default function List() {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const isMobile = useMediaQuery('(max-width: 600px)');
  const [sortOption, setSortOption] = React.useState('Just For You');
  const [allPrice, setAllPrice] = React.useState('Price');
  const [allBeds, setAllBeds] = React.useState('Beds');
  const [pets, setPets] = React.useState('Pets');
  const [allRentalTypes, setAllRentalTypes] = React.useState('Rental Types');
  const [nearTransit, setNearTransit] = React.useState('Near Transit');
  const [more, setMore] = React.useState('More');
 
  const handleAllPrice = (event: SelectChangeEvent<string>) => {
    setAllPrice(event.target.value);
  };

  const handleAllBeds = (event: SelectChangeEvent<string>) => {
    setAllBeds(event.target.value);
  };

  const handlePets = (event: SelectChangeEvent<string>) => {
    setPets(event.target.value);
  };

  const handleAllRentalTypes = (event: SelectChangeEvent<string>) => {
    setAllRentalTypes(event.target.value);
  };

  const handleNearTransit = (event: SelectChangeEvent<string>) => {
    setNearTransit(event.target.value);
  };

  const handleMore = (event: SelectChangeEvent<string>) => {
    setMore(event.target.value);
  };

  return (
    <>
      {/* Fixed position header */}
     
  
   <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '50%',
          zIndex: 1000,
          backgroundColor: '#fff',
          padding: '10px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0)',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '10px',
          alignItems: 'center',
          justifyContent: 'space-between',
          '@media (max-width: 600px)': {
            width: '100%',
          },
        }}
      >
         {/* <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '10px', marginLeft: isMobile ? 0 : "20px" }}> */}
         <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {/* <Select
            value={allPrice}
            onChange={() => { handleAllPrice}}
            displayEmpty
            inputProps={{ 'aria-label': 'Sort' }}
            style={{ marginTop: "10px" }}
          >
            <MenuItem value=" Price">Price</MenuItem>
            <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
            <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
          </Select> */}

          
<Select
            value={allPrice}
            onChange={() => {handleAllPrice}}
            displayEmpty
            inputProps={{ 'aria-label': 'Sort' }}
            style={{ marginTop: "10px" }}
          >
            <MenuItem value="Price">Price</MenuItem>
            <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
            <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
          </Select>
          <Select
            value={allBeds}
            onChange={() => {handleAllBeds }}
            displayEmpty
            inputProps={{ 'aria-label': 'Sort' }}
            style={{ marginTop: "10px" }}
          >
            <MenuItem value="Beds">Beds</MenuItem>
            <MenuItem value="2 Beds">2 Beds</MenuItem>
            <MenuItem value="5 Beds">5 Beds</MenuItem>
          </Select>
          <Select
            value={pets}
            onChange={() => { handlePets}}
            displayEmpty
            inputProps={{ 'aria-label': 'Sort' }}
            style={{ marginTop: "10px" }}
          >
            <MenuItem value="Pets">Pets</MenuItem>
            <MenuItem value="Cats allowed">Cats allowed</MenuItem>
            <MenuItem value="Dogs Allowed">Dogs Allowed</MenuItem>
          </Select>
          <Select
            value={allRentalTypes}
            onChange={() => { handleAllRentalTypes}}
            displayEmpty
            inputProps={{ 'aria-label': 'Sort' }}
            style={{ marginTop: "10px" }}
          >
            <MenuItem value="Rental Types">Rental Types</MenuItem>
            <MenuItem value="Townhome">Townhome</MenuItem>
            <MenuItem value="Single Family Home">Single Family Home</MenuItem>
          </Select>
          <Select
            value={nearTransit}
            onChange={() => { handleNearTransit}}
            displayEmpty
            inputProps={{ 'aria-label': 'Sort' }}
            style={{ marginTop: "10px" }}
          >
            <MenuItem value="Near Transit">Near Transit</MenuItem>
            <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
            <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
          </Select>
          <Select
            value={more}
            onChange={() => { handleMore}}
            displayEmpty
            inputProps={{ 'aria-label': 'Sort' }}
            style={{ marginTop: "10px" }}
          >
            <MenuItem value="More">More</MenuItem>
            <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
            <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
          </Select>
       
        </Box>
        <Stack direction="row" spacing={1} alignItems="center">
           <Typography>Low</Typography>
           <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
           <Typography>High</Typography>
        </Stack>
     
      </Box>
       
      <Box sx={{ paddingLeft: '10px', paddingRight: '10px', textAlign: isMobile ? 'center' : 'left'  , zIndex: 1000,
          backgroundColor: '#fff',
          padding: '10px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',}}>
        <Typography variant="h1" sx={{ fontSize: "20px", lineHeight: "1.2", marginBottom: "10px" }}>
          
          Boston, MA Apartments For Rent
        </Typography>
      </Box>
      {/* Main content */}
      <Box sx={{ paddingTop: '4%', paddingLeft: '1%', paddingRight: '1%', paddingBottom: '20px', overflowY: 'auto', height: 'calc(100vh - 80px)', }}>
        <Grid container spacing={3}>
          {cardContents.map((cardContent, index) => (
            <Grid item key={index} xs={12} md={isDesktop ? 4 : 12}>
              <CardItem cardContent={cardContent} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
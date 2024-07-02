// // import * as React from 'react';
// // import Grid from '@mui/material/Grid';
// // import Card from '@mui/material/Card';
// // import CardActions from '@mui/material/CardActions';
// // import CardContent from '@mui/material/CardContent';
// // import CardMedia from '@mui/material/CardMedia';
// // import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';
// // import Box from '@mui/material/Box';
// // import useMediaQuery from '@mui/material/useMediaQuery';
// // import Slider from 'react-slick';
// // import 'slick-carousel/slick/slick.css';
// // import 'slick-carousel/slick/slick-theme.css';
// // import IconButton from '@mui/material/IconButton';
// // import MoreVertIcon from '@mui/icons-material/MoreVert';
// // import BedIcon from '@mui/icons-material/Bed';
// // import BathtubIcon from '@mui/icons-material/Bathtub';
// // import Select from '@mui/material/Select';
// // import MenuItem from '@mui/material/MenuItem';
// // import image from '../public/image/apartment1.jpg';
// // import image2 from '../public/image/apartment2.jpg';
// // import image3 from '../public/image/image3.png';

// // const cardContents = [
// //   {
// //     title: "$2,788 - $4,671/mo - Apartment 1",
// //     subtitle: "The Indie,",
// //     description: "Allston,MA 02134",
// //     images: [image.src, image2.src, image3.src],
// //     beds: "Studio-2bd",
// //     baths: "1-2ba",
// //   },
// //   {
// //     title: "$3,000 - $5,000/mo - Apartment 2",
// //     subtitle: "The Indie,",
// //     description: "Allston,MA 02134",
// //     images: [image.src, image2.src, image3.src],
// //     beds: "Studio-2bd",
// //     baths: "1-2ba",
// //   },
// //   // ... add more objects up to 12
// //   {
// //     title: "$4,000 - $6,000/mo - Apartment 12",
// //     subtitle: "The Indie,",
// //     description: "Allston,MA 02134",
// //     images: [image.src, image2.src, image3.src],
// //     beds: "Studio-2bd",
// //     baths: "1-2ba",
// //   },
// // ];

// // const sliderSettings = {
// //   dots: true,
// //   infinite: true,
// //   speed: 500,
// //   slidesToShow: 1,
// //   slidesToScroll: 1,
// //   autoplay: true,
// //   autoplaySpeed: 2000,
// // };

// // const CardItem = ({ cardContent }) => (
// //   <Card sx={{ width: '100%', marginBottom: 2, boxShadow: 3 }}>
// //     <Slider {...sliderSettings}>
// //       {cardContent.images.map((image, index) => (
// //         <div key={index}>
// //           <CardMedia sx={{ height: 290 }} image={image} title={cardContent.title} />
// //         </div>
// //       ))}
// //     </Slider>
// //     <CardContent>
// //       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// //         <Typography gutterBottom variant="h5" component="div">
// //           {cardContent.title}
// //         </Typography>
// //         <IconButton>
// //           <MoreVertIcon />
// //         </IconButton>
// //       </Box>
// //       <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
// //         <BedIcon sx={{ marginRight: 1 }} />
// //         <Typography variant="body2" color="text.secondary">
// //           {cardContent.beds}
// //         </Typography>
// //         <BathtubIcon sx={{ marginRight: 1, marginLeft: 2 }} />
// //         <Typography variant="body2" color="text.secondary">
// //           {cardContent.baths}
// //         </Typography>
// //       </Box>
// //       <Typography gutterBottom variant="body2" color="text.secondary">
// //         {cardContent.subtitle}
// //       </Typography>
// //       <Typography variant="body2" color="text.secondary">
// //         {cardContent.description}
// //       </Typography>
// //     </CardContent>
// //     <CardActions sx={{ justifyContent: 'center', paddingBottom: "20px" }}>
// //       <Button variant="outlined" size="small" sx={{ borderColor: 'green', color: 'green', width: "100%" }}>
// //         Check Availability
// //       </Button>
// //     </CardActions>
// //   </Card>
// // );

// // export default function List() {
// //   const isDesktop = useMediaQuery('(min-width: 960px)');
// //   const [sortOption, setSortOption] = React.useState('Just For You');

// //   const handleSortChange = (event) => {
// //     setSortOption(event.target.value);
// //   };

// //   return (
// //     <>
// //       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: "20px", marginRight: "20px" }}>
// //         <h1>Boston, MA Apartments For Rent</h1>
// //         <Select
// //           value={sortOption}
// //           onChange={handleSortChange}
// //           displayEmpty
// //           inputProps={{ 'aria-label': 'Sort' }}
// //         >
// //           <MenuItem value="Just For You">Sort: Just For You</MenuItem>
// //           <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
// //           <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
// //         </Select>
// //       </Box>
// //       <Box sx={{ display: 'flex', position: 'relative' }}>
// //         <Grid container spacing={2} sx={{ width: '60%', paddingRight: 2, marginTop: "40px", marginLeft: "0px" }}>
// //           {cardContents.map((cardContent, index) => (
// //             <Grid item xs={12} sm={6} key={index}>
// //               <CardItem cardContent={cardContent} />
// //             </Grid>
// //           ))}
// //         </Grid>
// //         <Box
// //           sx={{
// //             position: 'fixed',
// //             top: 0,
// //             right: 0,
// //             width: '40%',
// //             height: '100vh',
// //             overflow: 'hidden',
// //             zIndex: 1000,
// //             display: 'block', // Show on both mobile and desktop
// //           }}
// //         >
// //           <iframe
// //             src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
// //             width="100%"
// //             height="100%"
// //             frameBorder="0"
// //             style={{ border: "0" }}
// //             loading="lazy"
// //             title="Map"
// //           ></iframe>
// //         </Box>
// //       </Box>
// //     </>
// //   );
// // }


// // import * as React from 'react';
// // import Grid from '@mui/material/Grid';
// // import Card from '@mui/material/Card';
// // import CardActions from '@mui/material/CardActions';
// // import CardContent from '@mui/material/CardContent';
// // import CardMedia from '@mui/material/CardMedia';
// // import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';
// // import Box from '@mui/material/Box';
// // import useMediaQuery from '@mui/material/useMediaQuery';
// // import Slider from 'react-slick';
// // import 'slick-carousel/slick/slick.css';
// // import 'slick-carousel/slick/slick-theme.css';
// // import IconButton from '@mui/material/IconButton';
// // import MoreVertIcon from '@mui/icons-material/MoreVert';
// // import BedIcon from '@mui/icons-material/Bed';
// // import BathtubIcon from '@mui/icons-material/Bathtub';
// // import Select, { SelectChangeEvent } from '@mui/material/Select';
// // import MenuItem from '@mui/material/MenuItem';
// // import image from '../public/image/apartment1.jpg';
// // import image2 from '../public/image/apartment2.jpg';
// // import image3 from '../public/image/image3.png';

// // interface CardContentProps {
// //   title: string;
// //   subtitle: string;
// //   description: string;
// //   images: string[];
// //   beds: string;
// //   baths: string;
// // }

// // const cardContents: CardContentProps[] = [
// //   {
// //     title: "$2,788 - $4,671/mo - Apartment 1",
// //     subtitle: "The Indie,",
// //     description: "Allston,MA 02134",
// //     images: [image.src, image2.src, image3.src],
// //     beds: "Studio-2bd",
// //     baths: "1-2ba",
// //   },
// //   {
// //     title: "$3,000 - $5,000/mo - Apartment 2",
// //     subtitle: "The Indie,",
// //     description: "Allston,MA 02134",
// //     images: [image.src, image2.src, image3.src],
// //     beds: "Studio-2bd",
// //     baths: "1-2ba",
// //   },
// //   // ... add more objects up to 12
// //   {
// //     title: "$4,000 - $6,000/mo - Apartment 12",
// //     subtitle: "The Indie,",
// //     description: "Allston,MA 02134",
// //     images: [image.src, image2.src, image3.src],
// //     beds: "Studio-2bd",
// //     baths: "1-2ba",
// //   },
// // ];

// // const sliderSettings = {
// //   dots: true,
// //   infinite: true,
// //   speed: 500,
// //   slidesToShow: 1,
// //   slidesToScroll: 1,
// //   autoplay: true,
// //   autoplaySpeed: 2000,
// // };

// // const CardItem: React.FC<{ cardContent: CardContentProps }> = ({ cardContent }) => (
// //   <Card sx={{ width: '100%', marginBottom: 2, boxShadow: 3 }}>
// //     <Slider {...sliderSettings}>
// //       {cardContent.images.map((image: string, index: number) => (
// //         <div key={index}>
// //           <CardMedia sx={{ height: 290 }} image={image} title={cardContent.title} />
// //         </div>
// //       ))}
// //     </Slider>
// //     <CardContent>
// //       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// //         <Typography gutterBottom variant="h5" component="div">
// //           {cardContent.title}
// //         </Typography>
// //         <IconButton>
// //           <MoreVertIcon />
// //         </IconButton>
// //       </Box>
// //       <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
// //         <BedIcon sx={{ marginRight: 1 }} />
// //         <Typography variant="body2" color="text.secondary">
// //           {cardContent.beds}
// //         </Typography>
// //         <BathtubIcon sx={{ marginRight: 1, marginLeft: 2 }} />
// //         <Typography variant="body2" color="text.secondary">
// //           {cardContent.baths}
// //         </Typography>
// //       </Box>
// //       <Typography gutterBottom variant="body2" color="text.secondary">
// //         {cardContent.subtitle}
// //       </Typography>
// //       <Typography variant="body2" color="text.secondary">
// //         {cardContent.description}
// //       </Typography>
// //     </CardContent>
// //     <CardActions sx={{ justifyContent: 'center', paddingBottom: "20px" }}>
// //       <Button variant="outlined" size="small" sx={{ borderColor: '#c29b40', color: '#002349', width: "100%" }}>
// //         Check Availability
// //       </Button>
// //     </CardActions>
// //   </Card>
// // );

// // export default function List() {
// //   const isDesktop = useMediaQuery('(min-width: 960px)');
// //   const [sortOption, setSortOption] = React.useState('Just For You');
// //   const [allPrice, setAllPrice] = React.useState('All Price');
// //   const [allBeds, setAllBeds] = React.useState('All Beds');
// //   const [pets, setPets] = React.useState('Pets');
// //   const [allRentalTypes, setAllRentalTypes] = React.useState('All Rental Types');
// //   const [nearTransit, setNearTransit] = React.useState('Near Transit');
// //   const [more, setMore] = React.useState('More');

// //   const handleSortChange = (event: SelectChangeEvent<string>) => {
// //     setSortOption(event.target.value);
// //   };
// //   const handleAllPrice = (event: SelectChangeEvent<string>) => {
// //     setAllPrice(event.target.value);
// //   };

// //   const handleAllBeds = (event: SelectChangeEvent<string>) => {
// //     setAllBeds(event.target.value);
// //   };
// //   const handlePets = (event: SelectChangeEvent<string>) => {
// //     setPets(event.target.value);
// //   };
// //   const handleAllRentalTypes = (event: SelectChangeEvent<string>) => {
// //     setAllRentalTypes(event.target.value);
// //   };
// //   const handleNearTransit = (event: SelectChangeEvent<string>) => {
// //     setNearTransit(event.target.value);
// //   };
// //   const handleMore = (event: SelectChangeEvent<string>) => {
// //     setMore(event.target.value);
// //   };
// //   return (
// //     <>
// //     <Box sx={{display:"flex" ,gap: "10px", marginLeft:"20px",marginBottom:"20px"}}>
// //     <Select
// //           value={allPrice}
// //           onChange={handleAllPrice}
// //           displayEmpty
// //           inputProps={{ 'aria-label': 'Sort' }}
// //             style={{marginTop:"10px"}}
// //         >
// //           <MenuItem value="All Price">All Price</MenuItem>
// //           <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
// //           <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
// //         </Select>
// //         <Select
// //           value={allBeds}
// //           onChange={handleAllBeds}
// //           displayEmpty
// //           inputProps={{ 'aria-label': 'Sort' }}
// //             style={{marginTop:"10px"}}
// //         >
// //           <MenuItem value="All Beds">All Beds</MenuItem>
// //           <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
// //           <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
// //         </Select>
// //         <Select
// //           value={pets}
// //           onChange={handlePets}
// //           displayEmpty
// //           inputProps={{ 'aria-label': 'Sort' }}
// //             style={{marginTop:"10px"}}
// //         >
// //           <MenuItem value="Pets">Pets</MenuItem>
// //           <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
// //           <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
// //         </Select>
// //         <Select
// //           value={allRentalTypes}
// //           onChange={handleAllRentalTypes}
// //           displayEmpty
// //           inputProps={{ 'aria-label': 'Sort' }}
// //             style={{marginTop:"10px"}}
// //         >
// //           <MenuItem value="All Rental Types">All Rental Types</MenuItem>
// //           <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
// //           <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
// //         </Select>
// //         <Select
// //           value={nearTransit}
// //           onChange={handleNearTransit}
// //           displayEmpty
// //           inputProps={{ 'aria-label': 'Sort' }}
// //             style={{marginTop:"10px"}}
// //         >
// //           <MenuItem value="Near Transit">Near Transit</MenuItem>
// //           <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
// //           <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
// //         </Select>
// //         <Select
// //           value={more}
// //           onChange={handleMore}
// //           displayEmpty
// //           inputProps={{ 'aria-label': 'Sort' }}
// //             style={{marginTop:"10px"}}
// //         >
// //           <MenuItem value="More">More</MenuItem>
// //           <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
// //           <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
// //         </Select>
// //     </Box>


// //       <Box sx={{  alignItems: 'center', marginLeft: "20px", marginRight: "20px" }}>
// //         <h1 style={{fontSize:"20px", lineHeight:"1.2"}}>Boston, MA Apartments For Rent</h1>
// //         <Select
// //           value={sortOption}
// //           onChange={handleSortChange}
// //           displayEmpty
// //           inputProps={{ 'aria-label': 'Sort' }}
// //             style={{marginTop:"10px"}}
// //         >
// //           <MenuItem value="Just For You">Sort: Just For You</MenuItem>
// //           <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
// //           <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
// //         </Select>
// //       </Box>
// //       <Box sx={{ display: 'flex', position: 'relative' }}>
// //         <Grid container spacing={2} sx={{ width: '60%', paddingRight: 2, marginTop: "10px", marginLeft: "0px" }}>
// //           {cardContents.map((cardContent, index) => (
// //             <Grid item xs={12} sm={6} key={index}>
// //               <CardItem cardContent={cardContent} />
// //             </Grid>
// //           ))}
// //         </Grid>
// //         <Box
// //           sx={{
// //             position: 'fixed',
// //             top: 0,
// //             right: 0,
// //             width: '40%',
// //             height: '100vh',
// //             overflow: 'hidden',
// //             zIndex: 1000,
// //             display: 'block', // Show on both mobile and desktop
// //           }}
// //         >
// //           <iframe
// //             src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
// //             width="100%"
// //             height="100%"
// //             frameBorder="0"
// //             style={{ border: "0" }}
// //             loading="lazy"
// //             title="Map"
// //           ></iframe>
// //         </Box>
// //       </Box>
// //     </>
// //   );
// // }


// import * as React from 'react';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import IconButton from '@mui/material/IconButton';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import BedIcon from '@mui/icons-material/Bed';
// import BathtubIcon from '@mui/icons-material/Bathtub';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import image1 from '../public/image/apartment1.jpg';
// import image2 from '../public/image/apartment2.jpg';
// import image3 from '../public/image/image3.png';

// interface CardContentProps {
//   title: string;
//   subtitle: string;
//   description: string;
//   images: string[];
//   beds: string;
//   baths: string;
// }

// const cardContents: CardContentProps[] = [
//   {
//     title: "$2,788 - $4,671/mo - Apartment 1",
//     subtitle: "The Indie,",
//     description: "Allston,MA 02134",
//     images: [image1.src, image2.src, image3.src],
//     beds: "Studio-2bd",
//     baths: "1-2ba",
//   },
//   {
//     title: "$3,000 - $5,000/mo - Apartment 2",
//     subtitle: "The Indie,",
//     description: "Allston,MA 02134",
//     images: [image1.src, image2.src, image3.src],
//     beds: "Studio-2bd",
//     baths: "1-2ba",
//   },
//   {
//     title: "$4,000 - $6,000/mo - Apartment 12",
//     subtitle: "The Indie,",
//     description: "Allston,MA 02134",
//    images: [image1.src, image2.src, image3.src],
//     beds: "Studio-2bd",
//     baths: "1-2ba",
//   },
// ];

// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// };

// const CardItem: React.FC<{ cardContent: CardContentProps }> = ({ cardContent }) => (
//   <Card sx={{ width: '100%', marginBottom: 2, boxShadow: 3 }}>
//     <Slider {...sliderSettings}>
//       {cardContent.images.map((image: string, index: number) => (
//         <div key={index}>
//           <CardMedia sx={{ height: 290 }} image={image} title={cardContent.title} />
//         </div>
//       ))}
//     </Slider>
//     <CardContent>
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <Typography gutterBottom variant="h5" component="div">
//           {cardContent.title}
//         </Typography>
//         <IconButton>
//           <MoreVertIcon />
//         </IconButton>
//       </Box>
//       <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
//         <BedIcon sx={{ marginRight: 1 }} />
//         <Typography variant="body2" color="text.secondary">
//           {cardContent.beds}
//         </Typography>
//         <BathtubIcon sx={{ marginRight: 1, marginLeft: 2 }} />
//         <Typography variant="body2" color="text.secondary">
//           {cardContent.baths}
//         </Typography>
//       </Box>
//       <Typography gutterBottom variant="body2" color="text.secondary">
//         {cardContent.subtitle}
//       </Typography>
//       <Typography variant="body2" color="text.secondary">
//         {cardContent.description}
//       </Typography>
//     </CardContent>
//     <CardActions sx={{ justifyContent: 'center', paddingBottom: "20px" }}>
//       <Button variant="outlined" size="small" sx={{ borderColor: 'rgb(0, 120, 130)', color: 'rgb(0, 120, 130)', width: "100%" }}>
//         Check Availability
//       </Button>
//     </CardActions>
//   </Card>
// );

// export default function List() {
//   const isDesktop = useMediaQuery('(min-width: 960px)');
//   const [sortOption, setSortOption] = React.useState('Just For You');
//   const [allPrice, setAllPrice] = React.useState('All Price');
//   const [allBeds, setAllBeds] = React.useState('All Beds');
//   const [pets, setPets] = React.useState('Pets');
//   const [allRentalTypes, setAllRentalTypes] = React.useState('All Rental Types');
//   const [nearTransit, setNearTransit] = React.useState('Near Transit');
//   const [more, setMore] = React.useState('More');

//   const handleSortChange = (event: SelectChangeEvent<string>) => {
//     setSortOption(event.target.value);
//   };

//   const handleAllPrice = (event: SelectChangeEvent<string>) => {
//     setAllPrice(event.target.value);
//   };

//   const handleAllBeds = (event: SelectChangeEvent<string>) => {
//     setAllBeds(event.target.value);
//   };

//   const handlePets = (event: SelectChangeEvent<string>) => {
//     setPets(event.target.value);
//   };

//   const handleAllRentalTypes = (event: SelectChangeEvent<string>) => {
//     setAllRentalTypes(event.target.value);
//   };

//   const handleNearTransit = (event: SelectChangeEvent<string>) => {
//     setNearTransit(event.target.value);
//   };

//   const handleMore = (event: SelectChangeEvent<string>) => {
//     setMore(event.target.value);
//   };

//   return (
//     <>
//       {/* Fixed position header */}
//       <Box
//         sx={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           width: '50%',
//           zIndex: 1000,
//           backgroundColor: '#fff',
//           padding: '10px',
//           boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
//         }}
//       >
//         <Box sx={{ display: 'flex', gap: '10px', marginLeft: "20px",  }}>
//           <Select
//             value={allPrice}
//             onChange={handleAllPrice}
//             displayEmpty
//             inputProps={{ 'aria-label': 'Sort' }}
//             style={{ marginTop: "10px" }}
//           >
//             <MenuItem value="All Price">All Price</MenuItem>
//             <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
//             <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
//           </Select>
//           <Select
//             value={allBeds}
//             onChange={handleAllBeds}
//             displayEmpty
//             inputProps={{ 'aria-label': 'Sort' }}
//             style={{ marginTop: "10px" }}
//           >
//             <MenuItem value="All Beds">All Beds</MenuItem>
//             <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
//             <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
//           </Select>
//           <Select
//             value={pets}
//             onChange={handlePets}
//             displayEmpty
//             inputProps={{ 'aria-label': 'Sort' }}
//             style={{ marginTop: "10px" }}
//           >
//             <MenuItem value="Pets">Pets</MenuItem>
//             <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
//             <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
//           </Select>
//           <Select
//             value={allRentalTypes}
//             onChange={handleAllRentalTypes}
//             displayEmpty
//             inputProps={{ 'aria-label': 'Sort' }}
//             style={{ marginTop: "10px" }}
//           >
//             <MenuItem value="All Rental Types">All Rental Types</MenuItem>
//             <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
//             <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
//           </Select>
//           <Select
//             value={nearTransit}
//             onChange={handleNearTransit}
//             displayEmpty
//             inputProps={{ 'aria-label': 'Sort' }}
//             style={{ marginTop: "10px" }}
//           >
//             <MenuItem value="Near Transit">Near Transit</MenuItem>
//             <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
//             <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
//           </Select>
//           <Select
//             value={more}
//             onChange={handleMore}
//             displayEmpty
//             inputProps={{ 'aria-label': 'Sort' }}
//             style={{ marginTop: "10px" }}
//           >
//             <MenuItem value="More">More</MenuItem>
//             <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
//             <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
//           </Select>
//         </Box>

       
//         <Box sx={{ alignItems: 'center', marginLeft: "20px", marginRight: "20px", paddingTop: '18px', border: 'none' }}>
//   <h1 style={{ fontSize: "20px", lineHeight: "1.2", marginBottom: "10px" }}>Boston, MA Apartments For Rent</h1>
//   <Select
//   value={sortOption}
//   onChange={handleSortChange}
//   displayEmpty
//   inputProps={{ 'aria-label': 'Sort' }}
//   style={{ marginTop: "10px", border: 'none' }}
//   sx={{ '& .MuiOutlinedInput-root': { border: 'none' }, '& .MuiSelect-select': { paddingLeft: '10px' } }}
// >
//   <MenuItem value="Just For You">Sort: Just For You</MenuItem>
//   <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
//   <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
// </Select>

// </Box>

//       </Box>

//       {/* Content area with fixed sidebar */}
//       <Box sx={{ display: 'flex', justifyContent: isDesktop ? 'flex-start' : 'center', position: 'relative', marginTop: '258px' }}>
//         <Grid container spacing={2} sx={{ width: isDesktop ? '60%' : '100%', paddingRight: 2, marginLeft: isDesktop ? '0px' : 'auto' }}>
//           {cardContents.map((cardContent, index) => (
//             <Grid item xs={12} sm={6} key={index}>
//               <CardItem cardContent={cardContent} />
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </>
//   );
// }


// import * as React from 'react';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import IconButton from '@mui/material/IconButton';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import BedIcon from '@mui/icons-material/Bed';
// import BathtubIcon from '@mui/icons-material/Bathtub';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import image1 from '../public/image/apartment1.jpg';
// import image2 from '../public/image/apartment2.jpg';
// import image3 from '../public/image/image3.png';

// interface CardContentProps {
//   title: string;
//   subtitle: string;
//   description: string;
//   images: string[];
//   beds: string;
//   baths: string;
// }

// const cardContents: CardContentProps[] = [
//   {
//     title: "$2,788 - $4,671/mo - Apartment 1",
//     subtitle: "The Indie",
//     description: "Allston, MA 02134",
//     images: [image1.src, image2.src, image3.src],
//     beds: "Studio-2bd",
//     baths: "1-2ba",
//   },
//   {
//     title: "$3,000 - $5,000/mo - Apartment 2",
//     subtitle: "The Indie",
//     description: "Allston, MA 02134",
//     images: [image1.src, image2.src, image3.src],
//     beds: "Studio-2bd",
//     baths: "1-2ba",
//   },
//   {
//     title: "$4,000 - $6,000/mo - Apartment 12",
//     subtitle: "The Indie",
//     description: "Allston, MA 02134",
//     images: [image1.src, image2.src, image3.src],
//     beds: "Studio-2bd",
//     baths: "1-2ba",
//   },
  
// ];

// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// };

// const CardItem: React.FC<{ cardContent: CardContentProps }> = ({ cardContent }) => (
//   <Card sx={{ width: '100%', marginBottom: 2, boxShadow: 3 }}>
//     <Slider {...sliderSettings}>
//       {cardContent.images.map((image: string, index: number) => (
//         <div key={index}>
//           <CardMedia sx={{ height: 290 }} image={image} title={cardContent.title} />
//         </div>
//       ))}
//     </Slider>
//     <CardContent>
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <Typography gutterBottom variant="h5" component="div">
//           {cardContent.title}
//         </Typography>
//         <IconButton>
//           <MoreVertIcon />
//         </IconButton>
//       </Box>
//       <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
//         <BedIcon sx={{ marginRight: 1 }} />
//         <Typography variant="body2" color="text.secondary">
//           {cardContent.beds}
//         </Typography>
//         <BathtubIcon sx={{ marginRight: 1, marginLeft: 2 }} />
//         <Typography variant="body2" color="text.secondary">
//           {cardContent.baths}
//         </Typography>
//       </Box>
//       <Typography gutterBottom variant="body2" color="text.secondary">
//         {cardContent.subtitle}
//       </Typography>
//       <Typography variant="body2" color="text.secondary">
//         {cardContent.description}
//       </Typography>
//     </CardContent>
//     <CardActions sx={{ justifyContent: 'center', paddingBottom: "20px" }}>
//       <Button variant="outlined" size="small" sx={{ borderColor: 'rgb(0, 120, 130)', color: 'rgb(0, 120, 130)', width: "100%" }}>
//         Check Availability
//       </Button>
//     </CardActions>
//   </Card>
// );

// export default function List() {
//   const isDesktop = useMediaQuery('(min-width: 960px)');
//   const [sortOption, setSortOption] = React.useState('Just For You');
//   const [allPrice, setAllPrice] = React.useState('All Price');
//   const [allBeds, setAllBeds] = React.useState('All Beds');
//   const [pets, setPets] = React.useState('Pets');
//   const [allRentalTypes, setAllRentalTypes] = React.useState('All Rental Types');
//   const [nearTransit, setNearTransit] = React.useState('Near Transit');
//   const [more, setMore] = React.useState('More');

//   const handleSortChange = (event: SelectChangeEvent<string>) => {
//     setSortOption(event.target.value);
//   };

//   const handleAllPrice = (event: SelectChangeEvent<string>) => {
//     setAllPrice(event.target.value);
//   };

//   const handleAllBeds = (event: SelectChangeEvent<string>) => {
//     setAllBeds(event.target.value);
//   };

//   const handlePets = (event: SelectChangeEvent<string>) => {
//     setPets(event.target.value);
//   };

//   const handleAllRentalTypes = (event: SelectChangeEvent<string>) => {
//     setAllRentalTypes(event.target.value);
//   };

//   const handleNearTransit = (event: SelectChangeEvent<string>) => {
//     setNearTransit(event.target.value);
//   };

//   const handleMore = (event: SelectChangeEvent<string>) => {
//     setMore(event.target.value);
//   };

//   return (
//     <>
//       {/* Fixed position header */}
//       <Box
//         sx={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           width: '50%',
//           zIndex: 1000,
//           backgroundColor: '#fff',
//           padding: '10px',
//           boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
//         }}
//       >
//         <Box sx={{ display: 'flex', gap: '10px', marginLeft: "20px", }}>
//           <Select
//             value={allPrice}
//             onChange={handleAllPrice}
//             displayEmpty
//             inputProps={{ 'aria-label': 'Sort' }}
//             style={{ marginTop: "10px" }}
//           >
//             <MenuItem value="All Price">All Price</MenuItem>
//             <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
//             <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
//           </Select>
//           <Select
//             value={allBeds}
//             onChange={handleAllBeds}
//             displayEmpty
//             inputProps={{ 'aria-label': 'Sort' }}
//             style={{ marginTop: "10px" }}
//           >
//             <MenuItem value="All Beds">All Beds</MenuItem>
//             <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
//             <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
//           </Select>
//           <Select
//             value={pets}
//             onChange={handlePets}
//             displayEmpty
//             inputProps={{ 'aria-label': 'Sort' }}
//             style={{ marginTop: "10px" }}
//           >
//             <MenuItem value="Pets">Pets</MenuItem>
//             <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
//             <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
//           </Select>
//           <Select
//             value={allRentalTypes}
//             onChange={handleAllRentalTypes}
//             displayEmpty
//             inputProps={{ 'aria-label': 'Sort' }}
//             style={{ marginTop: "10px" }}
//           >
//             <MenuItem value="All Rental Types">All Rental Types</MenuItem>
//             <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
//             <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
//           </Select>
//           <Select
//             value={nearTransit}
//             onChange={handleNearTransit}
//             displayEmpty
//             inputProps={{ 'aria-label': 'Sort' }}
//             style={{ marginTop: "10px" }}
//           >
//             <MenuItem value="Near Transit">Near Transit</MenuItem>
//             <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
//             <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
//           </Select>
//           <Select
//             value={more}
//             onChange={handleMore}
//             displayEmpty
//             inputProps={{ 'aria-label': 'Sort' }}
//             style={{ marginTop: "10px" }}
//           >
//             <MenuItem value="More">More</MenuItem>
//             <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
//             <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
//           </Select>
//         </Box>
//       </Box>

//       {/* Main content */}
//       <Box sx={{ paddingTop: '60px', paddingLeft: '1%', paddingRight: '15%',width:"100%" }}>
//         <Grid container spacing={3}>
//           {cardContents.map((cardContent, index) => (
//             <Grid item key={index} xs={12} md={isDesktop ? 4 : 12}>
//               <CardItem cardContent={cardContent} />
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </>
//   );
// }



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
    title: "$2,788 - $4,671/mo - Apartment 1",
    subtitle: "The Indie",
    description: "Allston, MA 02134",
    images: [image1.src, image2.src, image3.src],
    beds: "Studio-2bd",
    baths: "1-2ba",
  },
  {
    title: "$3,000 - $5,000/mo - Apartment 2",
    subtitle: "The Indie",
    description: "Allston, MA 02134",
    images: [image1.src, image2.src, image3.src],
    beds: "Studio-2bd",
    baths: "1-2ba",
  },
  {
    title: "$4,000 - $6,000/mo - Apartment 12",
    subtitle: "The Indie",
    description: "Allston, MA 02134",
    images: [image1.src, image2.src, image3.src],
    beds: "Studio-2bd",
    baths: "1-2ba",
  },
  {
    title: "$3,200 - $4,800/mo - Apartment 4",
    subtitle: "The Indie",
    description: "Allston, MA 02134",
    images: [image1.src, image2.src, image3.src],
    beds: "Studio-2bd",
    baths: "1-2ba",
  },
  {
    title: "$3,500 - $5,200/mo - Apartment 5",
    subtitle: "The Indie",
    description: "Allston, MA 02134",
    images: [image1.src, image2.src, image3.src],
    beds: "Studio-2bd",
    baths: "1-2ba",
  },
  {
    title: "$4,200 - $6,200/mo - Apartment 6",
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

const CardItem: React.FC<{ cardContent: CardContentProps }> = ({ cardContent }) => (
  <Card sx={{ width: '100%', marginBottom: 2, boxShadow: 3 }}>
    <Slider {...sliderSettings}>
      {cardContent.images.map((image: string, index: number) => (
        <div key={index}>
          <CardMedia sx={{ height: 200 }} image={image} title={cardContent.title} />
        </div>
      ))}
    </Slider>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography gutterBottom variant="h5" component="div">
          {cardContent.title}
        </Typography>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
        <BedIcon sx={{ marginRight: 1 }} />
        <Typography variant="body2" color="text.secondary">
          {cardContent.beds}
        </Typography>
        <BathtubIcon sx={{ marginRight: 1, marginLeft: 2 }} />
        <Typography variant="body2" color="text.secondary">
          {cardContent.baths}
        </Typography>
      </Box>
      <Typography gutterBottom variant="body2" color="text.secondary">
        {cardContent.subtitle}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {cardContent.description}
      </Typography>
    </CardContent>
    <CardActions sx={{ justifyContent: 'center', paddingBottom: "20px" }}>
      <Button variant="outlined" size="small" sx={{ borderColor: 'rgb(0, 120, 130)', color: 'rgb(0, 120, 130)', width: "100%" }}>
        Check Availability
      </Button>
    </CardActions>
  </Card>
);

export default function List() {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const [sortOption, setSortOption] = React.useState('Just For You');
  const [allPrice, setAllPrice] = React.useState('All Price');
  const [allBeds, setAllBeds] = React.useState('All Beds');
  const [pets, setPets] = React.useState('Pets');
  const [allRentalTypes, setAllRentalTypes] = React.useState('All Rental Types');
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
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box sx={{ display: 'flex', gap: '10px', marginLeft: "20px" }}>
          <Select 
          
            value={allPrice}
            onChange={handleAllPrice}
            displayEmpty
            inputProps={{ 'aria-label': 'Sort' }}
            style={{ marginTop: "10px"}}
          >
            <MenuItem value="All Price" >All Price</MenuItem>
            <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
            <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
          </Select>
          <Select
            value={allBeds}
            onChange={handleAllBeds}
            displayEmpty
            inputProps={{ 'aria-label': 'Sort' }}
            style={{ marginTop: "10px" }}
          >
            <MenuItem value="All Beds">All Beds</MenuItem>
            <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
            <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
          </Select>
          <Select
            value={pets}
            onChange={handlePets}
            displayEmpty
            inputProps={{ 'aria-label': 'Sort' }}
            style={{ marginTop: "10px" }}
          >
            <MenuItem value="Pets">Pets</MenuItem>
            <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
            <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
          </Select>
          <Select
            value={allRentalTypes}
            onChange={handleAllRentalTypes}
            displayEmpty
            inputProps={{ 'aria-label': 'Sort' }}
            style={{ marginTop: "10px" }}
          >
            <MenuItem value="All Rental Types">All Rental Types</MenuItem>
            <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
            <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
          </Select>
          <Select
            value={nearTransit}
            onChange={handleNearTransit}
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
            onChange={handleMore}
            displayEmpty
            inputProps={{ 'aria-label': 'Sort' }}
            style={{ marginTop: "10px" }}
          >
            <MenuItem value="More">More</MenuItem>
            <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
            <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
          </Select>
          <Stack direction="row" spacing={1} alignItems="center" style={{alignItems: "end",position: "relative",left: "50px"}}>
        <Typography style={{lineHeight:"1"}}>low</Typography>
        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
        <Typography style={{lineHeight:"1"}}>high</Typography>
      </Stack>
        </Box>
        <h1 style={{ fontSize: "20px", lineHeight: "1.2", marginBottom: "10px", marginTop:"10px",marginLeft:"20px"}}>Boston, MA Apartments For Rent</h1>
   {/* <Select

  value={sortOption}
  onChange={handleSortChange}
  displayEmpty
  inputProps={{ 'aria-label': 'Sort' }}
  style={{ marginTop: "10px", border: 'none',marginLeft:"20px" }}
  sx={{ '& .MuiOutlinedInput-root': { border: 'none' }, '& .MuiSelect-select': { paddingLeft: '10px' } }}
>
  <MenuItem value="Just For You">Sort: Just For You</MenuItem>
  <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
  <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
</Select> */}
            
         {/* <Box sx={{ alignItems: 'center', marginLeft: "20px", marginRight: "20px", paddingTop: '18px', border: 'none' }}>
   <h1 style={{ fontSize: "20px", lineHeight: "1.2", marginBottom: "10px" }}>Boston, MA Apartments For Rent</h1>
   <Select
  value={sortOption}
  onChange={handleSortChange}
  displayEmpty
  inputProps={{ 'aria-label': 'Sort' }}
  style={{ marginTop: "10px", border: 'none' }}
  sx={{ '& .MuiOutlinedInput-root': { border: 'none' }, '& .MuiSelect-select': { paddingLeft: '10px' } }}
>
  <MenuItem value="Just For You">Sort: Just For You</MenuItem>
  <MenuItem value="Price (low to high)">Price (low to high)</MenuItem>
  <MenuItem value="Price (high to low)">Price (high to low)</MenuItem>
</Select>

</Box> */}
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

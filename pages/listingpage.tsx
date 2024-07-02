import React, { useRef, useEffect, useState } from 'react';
import './Listing.css';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {
  Button,
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  Stack,
  Chip,
  IconButton,
  Paper
} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Link from "next/link";

const ListingPage: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [tourDates, setTourDates] = useState<string[]>([]);
  const [isDesktop, setIsDesktop] = useState<boolean>(true); // Track screen size
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('Anytime');
  const [dates, setDates] = useState<{ day: string; date: string }[]>([]);

  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const scrollAmount = direction === 'left' ? -galleryRef.current.offsetWidth : galleryRef.current.offsetWidth;
      galleryRef.current.scrollLeft += scrollAmount;
    }
  };

  // const generateTourDates = () => {
  //   const dates: string[] = [];
  //   const today = new Date();
  //   for (let i = 0; i < 10; i++) { // Increased to 10 for demonstration
  //     const nextDate = new Date(today);
  //     nextDate.setDate(today.getDate() + i);
  //     const formattedDate = nextDate.toLocaleDateString('en-US', { weekday: 'short', month: 'numeric', day: 'numeric' });
  //     dates.push(formattedDate);
  //   }
  //   setTourDates(dates);
  // };

  useEffect(() => {
    const generateDates = () => {
      const newDates = [];
      for (let i = 0; i < 3; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        newDates.push({
          day: date.toLocaleDateString('en-US', { weekday: 'short' }),
          date: date.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' }),
        });
      }
      setDates(newDates);
    };

    generateDates();
  }, []);

  const handleDateClick = (date: { day: string; date: string }) => {
    setSelectedDate(new Date(date.date));
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };


  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // generateTourDates();

    // Check screen size on mount
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1200); // Adjust breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container maxWidth="xl" disableGutters>
      
        <Grid item xs={12} style={{ backgroundColor: "black" }}>
          <div className="image-gallery-wrapper">
            <IconButton className="scroll-button left" onClick={() => scrollGallery('left')}>
              <ChevronLeftIcon />
            </IconButton>
            <div className="image-gallery" ref={galleryRef}>
              {Array.from({ length: 8 }, (_, i) => (
                <img src={`/image/${i + 1}.jpeg`} alt={`Image ${i + 1}`} key={i} />
              ))}
            </div>
            <IconButton className="scroll-button right" onClick={() => scrollGallery('right')}>
              <ChevronRightIcon />
            </IconButton>
          </div>
        
      </Grid>

      <Grid container style={{ backgroundColor: "black", height: "250px" }}>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <div id="overview" className="details">
                <Typography variant="h5" style={{ color: "white"}}>$3,350+</Typography>
                <Typography variant="h4" style={{ color: "white", marginTop: "10px", fontWeight: "600" }}>55 Brighton Avenue</Typography>
                <Typography variant="body1" style={{ color: "#7E93FB", marginTop: "10px", fontWeight: "600" }}>55 Brighton Avenue, Allston, MA 02134</Typography>
                <Typography variant="body2" style={{ color: "white", marginTop: "10px" }}>
                  1-2 Beds | 1-2 Baths | 640-970 Sqft |<span style={{ color: "#7E93FB", marginTop: "10px" }}> Available Now </span>
                </Typography>
                <Typography variant="body2" style={{ color: "white", marginTop: "10px" }}>Managed by The Hamilton Company</Typography>
              </div>

              <div className="navbar-section">
                <nav className="navbar" style={{padding: "2px 0px"}}>
                  <ul className="nav-list">
                    <li className="nav-item" onClick={() => scrollToSection('overview')}>Overview</li>
                    <li className="nav-item" onClick={() => scrollToSection('price-drop')}>Price Drop</li>
                    <li className="nav-item" onClick={() => scrollToSection('top-features')}>Features</li>
                    
                  </ul>
                </nav>
              </div>
              <hr style={{marginTop: "0px"}}/>
              <div id="price-drop" style={{ marginTop: "5px" }}>
                <Typography variant="body2">
                  New Lower Price: This 2 Bd, 2 Ba recently dropped its price by $200. Prices may change. Contact Today! See Floor Plan
                </Typography>
              </div>
              <hr />
              <div  style={{ marginTop: "30px" }}>
              <Typography variant="h2" style={{ fontSize: "21px", fontWeight: "600" }}>
        Popular Rental
      </Typography>
                <Typography variant="body2" style={{marginTop: "18px"}}>284 people recently viewed this rental</Typography>

                <Stack spacing={2} direction="row" style={{marginTop: "18px"}}>
      <Button variant="text" style={{color: "#4561EC"}}>Request Tour</Button>
      <Button variant="text" style={{color: "#4561EC"}}>Send an Email</Button>
    </Stack>
                
              </div>
              <hr />
              <div id="top-features" style={{ marginTop: "30px" }}>
                <Typography variant="h2" style={{fontSize: "21px", fontWeight: "600"}}>Top Features</Typography>
                <Stack direction="row" spacing={1} style={{ marginTop: "18px" }}>
                  <Chip label="New Construction" deleteIcon={<AutoAwesomeIcon />} />
                  
                  
                  
                  <Chip label="View 1 More" onClick={handleClick} />
                </Stack>
              </div>
              <div id="amenities" style={{ marginTop: "30px" }}>
                <Typography variant="h2" style={{fontSize: "21px", fontWeight: "600"}}>Amenities & Features</Typography>
                
                <Typography variant="body2" style={{marginTop: "18px", marginBottom: "20px"}}>Amenities and features at 55 Brighton Avenue</Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      {isDesktop && (
        <Card className="fixed-card">
          <CardContent>
            <Typography variant="h3" style={{fontWeight: "700", textAlign: 'center', fontSize: "20px" }}>Contact Property</Typography>
            <Typography variant="body2" style={{ textAlign: 'center', marginTop: "10px" }}>
              Learn more, take a tour, and get one step closer to your new home.
            </Typography>
            <Button className="contact-button" style={{ marginTop: "15px" }}>
        <PhoneIcon /> Call: (857) 415-6184
      </Button>
      <Button className="contact-button" style={{ marginTop: "15px" }}>
        <MailIcon /> Send an Email
      </Button>
    
            <div className="tour" style={{marginTop: "15px"}}>
              <Typography variant="h3" style={{ textAlign: 'center', marginTop: "10px", fontSize: "20px", fontWeight: "700" }}>Request Tour</Typography>
              <Typography variant="body2" style={{textAlign: 'center', marginTop: "10px"}}>Let the property know when youre available, and they will contact you to arrange a tour.</Typography>
              {/* <div style={{ overflowX: "auto", whiteSpace: "nowrap", marginTop: "10px" }}>
                {tourDates.map((date, index) => (
                  <Button key={index} className="tour-button">{date}</Button>
                ))}
              </div> */}
            </div>
            <div className="date-selector" style={{marginTop: "15px"}}>
          {dates.map((d, index) => (
            <div
              key={index}
              className={`date-box ${selectedDate.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' }) === d.date ? 'active' : ''}`}
              onClick={() => handleDateClick(d)}
            >
              <div>{d.day}</div>
              <div>{d.date}</div>
            </div>
          ))}
        </div>
        <div className="time-selector" >
          {['Anytime', 'Morning', 'Afternoon'].map((time, index) => (
            <button style={{marginRight: "10px", marginTop: "10px"}}
              key={index}
              className={`time-button ${selectedTime === time ? 'active' : ''}`}
              onClick={() => handleTimeClick(time)}
            >
              {time}
            </button>
          ))}
        </div>
            <Typography variant='body2' style={{marginTop: "15px"}}>
            Youre requesting anytime on 7/5.
            </Typography>
            <Button className="contact-button">Request Tour</Button>
          </CardContent>
        </Card>
      )}
    
    </Container>
  );
}

export default ListingPage;

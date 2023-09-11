import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import myImage1 from '../../../images/1pao.jpg';
import myImage2 from '../../../images/2pao.jpg';
import myImage3 from '../../../images/3pao.jpg';

const whiteTextStyle = {
  color: '#FFFFFF',
  textShadow: '1px 1px 2px black, 0 0 25px #87ceeb94, 0 0 5px blue',
};

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};

const Home = () => {
  const imageStyle = {
    display: 'block',
    margin: '0 auto',
    border: 'none',
    borderRadius: '10px',
    maxWidth: '100%',
    width: '450px',
    height: 'auto',
    boxShadow: '0 0 20px white',
  };

  const handleClick = () => {
    openInNewTab('https://barbosapaoloromulus.web.app/');
  };

  return (
    <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '20px' }}>
      <Typography variant="h3" gutterBottom style={whiteTextStyle}>
        SEIJVAGE ARTWORKS
      </Typography>
      <Typography variant="h5" paragraph style={whiteTextStyle}>
        {/* Add your text content here */}
      </Typography>
      <Button
      variant="contained"
      color="primary"
      onClick={handleClick}
      style={{ marginBottom: '20px' }}
      sx={{ fontWeight: 'bold' }} // Add this line for bold text
    >
      Check my Portfolio
    </Button>
      <br />
      <Carousel infiniteLoop autoPlay showThumbs={false} interval={3000} showStatus={false}>
        <div>
          <img src={myImage1} alt="Image 1" style={imageStyle} />
        </div>
        <div>
          <img src={myImage2} alt="Image 2" style={imageStyle} />
        </div>
        <div>
          <img src={myImage3} alt="Image 3" style={imageStyle} />
        </div>
      </Carousel>
    </Container>
  );
};

export default Home;

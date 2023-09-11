import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, Button, Dialog, Grid, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material'; // Import CloseIcon
import myImage1 from '../../../images/cswmo.png';
import myImage2 from '../../../images/9.png';
import myImage3 from '../../../images/hope.png';
import myImage4 from '../../../images/cee.png';
import myImage5 from '../../../images/5.png';

const cardStyle = {
  backgroundColor: '#2d5d79',
  marginBottom: '20px',
  cursor: 'pointer',
  height: '100%',
  transition: 'transform 0.2s, box-shadow 0.2s', // Add transition for smooth hover effect
};

const whiteTextStyle = {
  color: '#FFFFFF',
  textShadow: '1px 1px 2px black, 0 0 5px blue',
  textAlign: 'justify',
  fontSize: '18px',
};

const xTextStyle = {
  color: '#FFFFFF',
  textShadow: '1px 1px 2px black, 0 0 25px transparent, 0 0 5px blue',
  textAlign: 'justify',
  fontSize: '30px',
  fontWeight: 'bold',
};

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};

const About = () => {
  const imageStyle = {
    display: 'block',
    margin: '0 auto',
    border: 'none',
    borderRadius: '10px',
    maxWidth: '100%',
    height: 'auto',
  };

  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setOpenModal(false);
  };

  return (
    <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '20px' }}>
      <Typography variant="h3" gutterBottom style={xTextStyle}>
        Learn more about me
      </Typography>
      <Typography variant="h5" paragraph style={whiteTextStyle}>
        A Fullstack Web-Developer and UX/UI designer, I merge my artistic vision and programming expertise in order to transcend my skills in creating an integrated web-application system and graphic design. A mindful, enthusiastic communicator and innovator.
      </Typography>
      <br />

      <Card style={{ backgroundColor: '#184863', marginBottom: '20px', cursor: 'pointer' }}>
        <CardContent>
          <Typography variant="h6" style={{ color: 'white', marginTop: '10px' }}>
            Projects
          </Typography>
          <Grid container spacing={2}>
            {/* Projects Card */}
            <Grid item xs={12} sm={6}>
              <Card
                style={cardStyle}
                onClick={() => handleOpenModal(myImage1)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'; // Increase size on hover
                  e.currentTarget.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.3)'; // Add a shadow on hover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'; // Reset size on hover out
                  e.currentTarget.style.boxShadow = 'none'; // Remove shadow on hover out
                }}
              >
                <CardContent>
                  <img src={myImage1} alt="CSWMO SYSTEM" style={imageStyle} />
                  <Typography variant="body2" style={{ color: 'white' }}>
                    City Solid Waste Management Office, PPC
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card
                style={cardStyle}
                onClick={() => handleOpenModal(myImage4)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'; // Increase size on hover
                  e.currentTarget.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.3)'; // Add a shadow on hover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'; // Reset size on hover out
                  e.currentTarget.style.boxShadow = 'none'; // Remove shadow on hover out
                }}
              >
                <CardContent>
                  <img src={myImage4} alt="CEE" style={imageStyle} />
                  <Typography variant="body2" style={{ color: 'white' }}>
                    College Entrance Exam System
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <br />

      <Card style={{ backgroundColor: '#184863', marginBottom: '20px', cursor: 'pointer' }}>
        <CardContent>
          <Typography variant="h6" style={{ color: 'white', marginTop: '10px' }}>
            Digital Art
          </Typography>
          <Grid container spacing={2}>
            {/* Digital Art Cards */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                style={cardStyle}
                onClick={() => handleOpenModal(myImage2)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'; // Increase size on hover
                  e.currentTarget.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.3)'; // Add a shadow on hover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'; // Reset size on hover out
                  e.currentTarget.style.boxShadow = 'none'; // Remove shadow on hover out
                }}
              >
                <CardContent>
                  <img src={myImage2} alt="Nagtabon Beach" style={imageStyle} />
                  <Typography variant="body2" style={{ color: 'white' }}>
                    Nagtabon Beach
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card
                style={cardStyle}
                onClick={() => handleOpenModal(myImage3)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'; // Increase size on hover
                  e.currentTarget.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.3)'; // Add a shadow on hover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'; // Reset size on hover out
                  e.currentTarget.style.boxShadow = 'none'; // Remove shadow on hover out
                }}
              >
                <CardContent>
                  <img src={myImage3} alt="Hope" style={imageStyle} />
                  <Typography variant="body2" style={{ color: 'white' }}>
                    Hope
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card
                style={cardStyle}
                onClick={() => handleOpenModal(myImage5)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'; // Increase size on hover
                  e.currentTarget.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.3)'; // Add a shadow on hover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'; // Reset size on hover out
                  e.currentTarget.style.boxShadow = 'none'; // Remove shadow on hover out
                }}
              >
                <CardContent>
                  <img src={myImage5} alt="BlackPink 4 Life" style={imageStyle} />
                  <Typography variant="body2" style={{ color: 'white' }}>
                    BlackPink 4 Life
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Dialog open={openModal} onClose={handleCloseModal} maxWidth="md" fullWidth>
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleCloseModal}
          aria-label="close"
          style={{ position: 'absolute', right: 0, top: 0, margin: '8px' }}
        >
          <CloseIcon />
        </IconButton>
        {selectedImage && (
          <img src={selectedImage} alt="Selected Image" style={{ width: '100%' }} />
        )}
      </Dialog>
    </Container>
  );
};

export default About;

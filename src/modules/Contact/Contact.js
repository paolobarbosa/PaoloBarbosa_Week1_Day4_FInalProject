import React from 'react';
import { Card, CardContent, Typography, Grid, Link, IconButton } from '@mui/material';
import { Phone, LocationOn } from '@mui/icons-material';

function Contact() {
  const containerStyle = {
    backgroundColor: '#164c69',
    color: 'white',
    padding: '20px',
  };

  const cardStyle = {
    backgroundColor: '#164d69',
    color: 'white',
  };

  const locationCardStyle = {
    backgroundColor: '#164d69', // Change the location card background color to #123d54
    color: 'white',
  };

  const cardMargin = {
    marginBottom: '10px',
  };

  const contactInfoStyle = {
    color: 'white',
    textShadow: '1px 1px 2px black, 0 0 25px transparent, 0 0 5px blue',
    
  };

  const emailLinkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  const cardContentStyle = {
    backgroundColor: '#123d54', 
    color: 'white',
  };

  return (
    <div className="Contact" style={containerStyle}>
      <Card>
        <CardContent style={cardContentStyle}>
          <Typography variant="h5" style={{ ...contactInfoStyle}} id="contactInfo">Contact Information</Typography>
          <Grid container spacing={3} style={{ marginTop: '20px' }}>
            <Grid item xs={12} sm={6}>
              <Card style={locationCardStyle}>
                <CardContent>
                  <Typography variant="h6">Location</Typography>
                  <Typography variant="body2">
                    <IconButton color="primary">
                      <LocationOn />
                    </IconButton>
                    Belton Place Eton WestEnd Square, cor Yakal, Makati, Metro Manila
                  </Typography>
                  <iframe
                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Belton Place, Philippines&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    width="100%"
                    height="300"
                    style={{ border: "0", marginTop: '10px' }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card style={cardStyle}>
                <CardContent>
                  <Typography variant="h6">Contact</Typography>

                  <Card style={{ ...cardStyle, ...cardMargin }}>
                    <CardContent>
                      <Typography variant="body2">
                        <IconButton color="primary">
                          <Phone />
                        </IconButton>
                        +63 9175707404
                      </Typography>
                    </CardContent>
                  </Card>

                  <Card style={{ ...cardStyle, ...cardMargin }}>
                    <CardContent>
                      <Typography variant="body2">
                        <Link href="mailto:paolobarbosa19@gmail.com" style={emailLinkStyle}><b>Email: paolobarbosa19@gmail.com</b></Link>
                      </Typography>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default Contact;

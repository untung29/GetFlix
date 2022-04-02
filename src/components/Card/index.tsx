import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CustomCard = () => (
  <Card sx={{ minWidth: 200 }}>
    <CardMedia
      component="img"
      height="300"
      image="https://m.media-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_SX300.jpg"
      alt="Twilight"
    />
    <CardContent>
      <Typography variant="h6">Twilight</Typography>
      <Box sx={{ display: 'flex', marginTop: '0.5rem', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body1">2016</Typography>

        <div style={{ border: '1px solid #000', padding: '0.5rem', borderRadius: '0.5rem' }}>
          <Typography variant="body1">Movie</Typography>
        </div>
      </Box>
    </CardContent>
  </Card>
);

export default CustomCard;

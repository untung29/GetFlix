import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import NoPoster from '../../images/no-poster.png';

const CustomCard = ({ poster, title, type, year }: { poster: string; title: string; type: string; year: string }) => (
  <Card>
    <CardMedia component="img" height="350" image={poster === 'N/A' ? NoPoster : poster} alt={title} />
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Box sx={{ display: 'flex', marginTop: '0.5rem', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body1">{year}</Typography>
        <div style={{ border: '1px solid #000', padding: '0.5rem', borderRadius: '0.5rem' }}>
          <Typography variant="body1">{type.charAt(0).toUpperCase() + type.slice(1)}</Typography>
        </div>
      </Box>
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button size="small">More detail</Button>
      </CardActions>
    </CardContent>
  </Card>
);

export default CustomCard;

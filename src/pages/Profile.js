import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { useAuth } from '../contexts/AuthContext'

export default function Profile() {
  const {currentUser} = useAuth()
  return (
    <Card  sx={{ maxWidth: 345, m:"auto", mt:10, width:340 }}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="250"
          src="https://picsum.photos/id/217/300/300"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Rifat KAZAK
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Front-end Developer
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography size="small" color="primary" style = {{marginLeft:"0.5rem"}}>
          User: {currentUser.email}
        </Typography>
      </CardActions>
    </Card>
  );
}
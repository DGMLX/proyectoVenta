import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function CardProducto({producto}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={producto.imagenes}
          alt="green iguana"
        />
        <CardContent>
                    
          <Typography gutterBottom variant="h5" component="div" align='center'>
            {producto.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary" align='center'>
            {producto.descripcion}
          </Typography>
          <Typography variant="h5" color="success" align="center" mt={3}>
            $ {producto.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{display:"center",justifyContent:"center"}}>
        <Button size="small" color="primary">
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
}
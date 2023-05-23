import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid, IconButton, ListItemButton, TextField } from '@mui/material';
import productos from './data/productos';
import CardProducto from './components/Card';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const drawerWidth = 200;

function HomePage(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant='h6'>Categorias</Typography>
      </Toolbar>
      <Divider />
      <List>
        {['Poleras', 'Pantalones', 'Short', 'Chaquetas','Buzos','Zapatillas','Faldas','Vestidos','Polerones','Calcetas','Ropa interior','Gorros'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
          
          <Typography variant="h6" noWrap component="div">
            Nombre o logotipo
          </Typography>
          
       
          <TextField label="Busca tu producto" variant='standard' />
          
          <Typography variant="h6" noWrap component="div">
            <IconButton color='inherit' size='large'>
              <ShoppingCartIcon/>  
            </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography variant='h3' align='center' mb={2} mt={3}>
          Productos destacados
        </Typography>
        <Divider/>
        <Typography paragraph align='center' mt={2}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum laborum omnis, odit et reiciendis animi consectetur doloribus quidem exercitationem aspernatur atque non nam dicta nihil voluptates blanditiis vitae ut mollitia? Lorem ipsum dolor sit amet.
        </Typography>
        <Grid container>
          {productos.map(producto=>(
            <Grid item mt={5} mr={2}>
              <CardProducto producto = {producto}/>
            </Grid>
          ))}
        </Grid>
        
      </Box>
    </Box>
  );
}


export default HomePage;
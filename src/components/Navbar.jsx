import {AppBar,Toolbar,Typography} from "@mui/material"
import DrawerApp from "./DrawerApp"

const Navbar = () =>{
    return(
        <>
            <AppBar>
                <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
                    <Typography>
                        Nombre de la tienda o logotipo
                    </Typography>
                    <Typography>
                        Input busqueda
                    </Typography>
                    <Typography>
                        carrito compra
                    </Typography>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
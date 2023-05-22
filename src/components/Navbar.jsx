import {AppBar,Toolbar,Typography,TextField} from "@mui/material"

const Navbar = () =>{
    return(
        <>
            <AppBar>
                <Toolbar>
                    <Typography>
                        Nombre de la tienda
                    </Typography>
                    {{/*<TextField label="Buscar producto" variant="filled" color="secondary"/>*/}}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
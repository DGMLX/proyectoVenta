import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material"

const DrawerApp = () =>{

    
    return(
        <Drawer
            anchor="left"
            open ={true}
        >
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemText>Lorem ipsum dolor sit.</ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemText>Lorem ipsum dolor sit.</ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemText>Lorem ipsum dolor sit.</ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemText>Lorem ipsum dolor sit.</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            
        </Drawer>
    )
}

export default DrawerApp
import { AppBar, IconButton, Toolbar } from "@mui/material"
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import NerxtLink from "next/link";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export const Navbar = () => {
  return (
   <AppBar position="sticky" elevation={0}>
    <Toolbar>
        <IconButton
        size="large"
        edge="start"
        >
            <MenuBookOutlinedIcon />
        </IconButton>
    <NerxtLink href="/" passHref>
        
        <Typography variant="h6" color="white" >CookieMaster</Typography>
       
    </NerxtLink>
    <div style={{ flex:1 }} />
    <NerxtLink href="/theme-changes" passHref>
       
        <Typography variant="h6" color="white" >Cambiar Tema</Typography>
        
    </NerxtLink>
    </Toolbar>
    
   </AppBar>
  )
}

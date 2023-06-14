import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import navStyles from '../styles/nav.module.css'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper'
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
// import { Typography } from '@mui/material/Typography';

const pages = ['Home', 'Projects', 'Identity', 'Vision', "Development", 'Future'];



function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
    });


  
    return React.cloneElement(children,{
    elevation: trigger ? 10 : 0,
    color: trigger ? 'primary' : 'transparent'
    
    
 
    });
}

// ElevationScroll.propTypes = {
//     children: PropTypes.element.isRequired,
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window: PropTypes.func,
// };
function Page(){

    const router = useRouter()
    return(pages.map((page) => (

            <Button key={page} color="background" onClick = {() => router.push(`/#${page}`)}>
                <Typography  variant='h7' component="h1"  color = "white" textAlign="center">{page}</Typography>
            </Button>

        )))
        }


export default function Nav(props){

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };




    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar className={navStyles.nav}  sx= {{backgroundImage: "linear-gradient(180deg, rgba(0,0,0,1), rgba(0,0,0,0))", borderBottomLeftRadius:10, borderBottomRightRadius:10}}
                
                >
                    <Grid container spacing={4}  direction="row"  alignItems="center">
                        <Grid item xs={12} md={5} >
                            <Container>
                                <Typography className={navStyles.title} color="white" variant='h7' component="h1">{"Diede's portfolio"}</Typography>
                            </Container>
                        
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "flex-end", alignItems: "center" }}}>
                                <Page/>
                            </Box>
                        </Grid>
                    </Grid>
                </AppBar>
            </ElevationScroll>
          
            <Container>

      </Container>

        </React.Fragment>

    )
}
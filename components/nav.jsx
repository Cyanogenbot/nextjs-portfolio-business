import { useRouter } from "next/router";
import navStyles from "../styles/nav.module.css";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
// or
import SvgIcon from "@mui/material/SvgIcon";
// import { Typography } from '@mui/material/Typography';

const pages = [
  "Home",
  "Projects",
  "Identity",
  "Vision",
  "Development",
  "Future",
];

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 10 : 0,
    color: trigger ? "primary" : "transparent",
  });
}

function Page() {
  const router = useRouter();
  return pages.map((page) => (
    <Button
      key={page}
      color="background"
      onClick={() => router.push(`/#${page}`)}
    >
      <Typography variant="h7" component="h1" color="white" textAlign="center">
        {page}
      </Typography>
    </Button>
  ));
}

function LogoIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="m625.01,386.37l-76.25-44.02v-178.02l66.75,38.54c1.5.86,3.13,1.27,4.74,1.27,3.28,0,6.48-1.7,8.24-4.75,2.62-4.54,1.07-10.35-3.48-12.98l-76.25-44.02V27.53L501.36.16v114.87l-87.94-50.77,45.8-26.44c4.54-2.62,6.1-8.43,3.48-12.98-2.62-4.54-8.43-6.1-12.98-3.48l-55.3,31.93-55.3-31.93c-4.54-2.62-10.35-1.07-12.98,3.48-2.62,4.54-1.07,10.35,3.48,12.98l45.8,26.44-88.04,50.83V.16l-47.39,27.36v125.64c1.61,0,3.25.4,4.75,1.26l72.91,42.1c4.54,2.62,6.1,8.43,3.48,12.98-1.76,3.05-4.95,4.75-8.24,4.75-1.61,0-3.25-.41-4.74-1.27l-68.16-39.35v169.04l-7.94,4.58-8.06-4.66v-168.96l-68.16,39.35c-1.5.86-3.13,1.27-4.74,1.27-3.28,0-6.48-1.7-8.24-4.75-2.62-4.54-1.07-10.35,3.48-12.98l72.91-42.1c1.5-.86,3.14-1.27,4.75-1.26V27.36L176.59,0v115.09L14.25,21.36c-4.54-2.62-10.35-1.07-12.98,3.48-2.62,4.54-1.07,10.35,3.48,12.98l73.41,42.38v178.08l-63.91-36.95c-4.54-2.62-10.35-1.07-12.98,3.47-2.63,4.54-1.07,10.35,3.47,12.98l208.31,120.44-66.73,38.53c-4.54,2.62-6.1,8.43-3.48,12.98,1.76,3.05,4.95,4.75,8.24,4.75,1.61,0,3.25-.41,4.74-1.27l76.22-44,76.1,44c1.5.87,3.13,1.28,4.75,1.28,3.28,0,6.47-1.7,8.23-4.75,2.63-4.54,1.07-10.35-3.47-12.98l-66.62-38.52,143.61-82.91,220.86,127.51c1.5.86,3.13,1.27,4.74,1.27,3.28,0,6.48-1.7,8.24-4.75,2.62-4.54,1.07-10.35-3.48-12.98Z" />{" "}
    </SvgIcon>
  );
}

export default function Nav(props) {
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
        <AppBar
          className={navStyles.nav}
          sx={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,1), rgba(0,0,0,0))",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Grid container spacing={4} direction="row" alignItems="center">
            <Grid item xs={12} md={5}>
              <Container>
                {/* <LogoIcon color="white" sx={{ fontSize: 0.5 }}/> */}

                <Typography
                  className={navStyles.title}
                  color="white"
                  variant="h7"
                  component="h1"
                >
                  {"Diede's portfolio"}
                </Typography>
                {/* <logoIcon fontSize="small" color="white"/> */}
              </Container>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "none",
                    md: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  },
                }}
              >
                <Page />
              </Box>
            </Grid>
          </Grid>
        </AppBar>
      </ElevationScroll>

      <Container></Container>
    </React.Fragment>
  );
}

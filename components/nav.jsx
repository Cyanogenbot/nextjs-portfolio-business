import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import navStyles from "../styles/nav.module.css";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import SvgIcon from "@mui/material/SvgIcon";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [
  // "Home",
  "Identity",
  "Projects",
  "Vision",
  // "Development",
  // "Future",
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

function PageButtons({ router }) {
  return pages.map((page) => (
    <Button
      key={page}
      color="background"
      onClick={() => router.push(`/#${page}`)}
      sx={{
        display: { xs: "none", md: "flex" },
        padding: 0,
        minHeight: "auto",
        textTransform: "none",
      }}
    >
      <Typography
        variant="h7"
        component="h1"
        color="white"
        textAlign="center"
        sx={{ lineHeight: 1 }}
      >
        {page}
      </Typography>
    </Button>
  ));
}

export default function Nav(props) {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar
          className={navStyles.nav}
          sx={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,1), rgba(0,0,0,0))",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            enableColorOnDark: "True",
            zIndex: 900,
          }}
        >
          <Toolbar sx={{ py: { xs: 1, md: 0.5 }, px: { xs: 2, md: 4 } }}>
            <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
              <Typography
                className={navStyles.title}
                variant="h6"
                component="h5"
                color="white"
                sx={{
                  color: "#fff",
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                {"Diede's portfolio"}
              </Typography>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: "1.5rem",
                alignItems: "flex-end",
                flexGrow: 1,
              }}
            >
              <Typography
                className={navStyles.title}
                variant="h6"
                component="h5"
                color="white"
                sx={{
                  color: "#fff",
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  fontWeight: "700",
                  lineHeight: 1,
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                {"Diede's portfolio"}
              </Typography>
              <PageButtons router={router} />
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleOpenNavMenu}
                sx={{ color: "#fff" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="mobile-menu"
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => {
                      router.push(`/#${page}`);
                      handleCloseNavMenu();
                    }}
                  >
                    <Typography textAlign="center" color="white">
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}

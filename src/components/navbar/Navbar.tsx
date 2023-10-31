import { AppBar, Box, Button, Typography } from "@mui/material";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  // return (
  //   <div className="navbar-container">
  //     <span className="navbar-logo-container">
  //       <img className="navbar-logo-img" src="logo.svg" />
  //       <p className="navbar-logo-write navbar-logo-write-dholar">Dholar </p>
  //       <p className="navbar-logo-write navbar-logo-write-community">Community</p>
  //     </span>
  //     <span className="navbar-link-container">
  //       <a className="navbar-item" href="#">
  //         Home
  //       </a>
  //       <a className="navbar-item" href="#">
  //         About
  //       </a>
  //       <a className="navbar-item" href="#">
  //         Contact us
  //       </a>
  //     </span>
  //   </div>
  // );
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const pages = ["home", "about", "contact"];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" color="inherit">
      <Box sx={{}}>
        <Typography
          variant="h4"
          noWrap
          component="a"
          href="#"
          sx={{
            fontWeight: "bold",
            textDecoration: "none",
            fontFamily: "Outfit",
            padding: 2,
            display: { xs: "flex", md: "inline-flex" },
          }}
        >
          <span className="nav-text-green">Dholar</span>
          <span className="nav-text-brown"> Community </span>
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "black", display: "block" }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </AppBar>
  );
}

export default Navbar;

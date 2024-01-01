import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import "./Navbar.css";

import { Tab } from "@mui/material";
import CustomLink from "../CustomLink";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "Donate", "Contact us"];

export default function MyNav(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const dc = (
    <CustomLink to="/">
      <span>
        <span className="logo-green">Dholar</span>{" "}
        <span className="logo-brown"> Community </span>
      </span>
    </CustomLink>
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography fontFamily={"Outfit"} variant="h6" sx={{ my: 2 }}>
        {dc}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "var(--off-white)" }}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { sm: "none" },
              justifyContent: "center",
              transform: {
                translate: "-50%, -50%",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Tab
            icon={
              <CustomLink to="/">
                <img src="/logo.svg"></img>{" "}
              </CustomLink>
            }
          />
          <Typography
            variant="h6"
            component="div"
            fontFamily={"Outfit"}
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {dc}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((val, idx) => (
              <Button
                onClick={() => <CustomLink to="/join"> </CustomLink>}
                key={idx}
                sx={{ color: "var(--black)", fontFamily: "Outfit" }}
              >
                {/* TODO: make the navItems array have an object that contains the route the name */}
                {val}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Tabs from "./Tabs";
import { Drawer } from "@mui/material";
import { useNavigate } from "react-router";
import SliderBtn from "./SliderBtn";

const drawerWidth = 240;

const Navbar = (props) => {
  const navigate = useNavigate();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Tabs />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <AppBar
        component="nav"
        position="static"
        sx={{
          boxShadow: "none",
          color: "var(--color-logo)",
          background: "inherit",
        }}
      >
        <Toolbar sx={{ textAlign: "left" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              fontSize: "24px",
              fontFamily: "Ubuntu",
              ":hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => navigate("/")}
          >
            Bot AI
          </Typography>
          <SliderBtn />
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
};

export default Navbar;

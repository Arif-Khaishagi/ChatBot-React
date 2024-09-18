import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PencilLogo from "../assets/pencil.svg";
import AiBotLogo from "../assets/BotAI_Logo.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { newChat } from "../redux/chatSlice";

const Tabs = () => {
  const navigate = useNavigate();

  const handlePastConvesations = () => {
    navigate("history");
  };

  const dispatch = useDispatch();

  const handleNewChat = () => {
    dispatch(newChat());
    navigate("/");
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          boxShadow: "none",
          background: "var(--color-secondary1)",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              width: 40,
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              ml: -1,
            }}
          >
            <img src={AiBotLogo} alt="ai chat bot logo" />
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 400,
              color: "var(--color-black)",
              fontSize: "24px",
              fontFamily: "Ubuntu",
            }}
          >
            New Chat
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: -2 }}
            onClick={handleNewChat}
          >
            <img src={PencilLogo} alt="pencil" width={24} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Button
        sx={{
          background: "var(--color-secondary1)",
          color: "var(--color-black)",
          fontFamily: "ubuntu",
          fontSize: "16px",
          fontWeight: 700,
          textTransform: "capitalize",
          m: 2,
          px: 2,
          borderRadius: "10px",
          ":hover": {
            background: "var(--color-primary1)",
          },
        }}
        onClick={handlePastConvesations}
      >
        Past Conversations
      </Button>
    </>
  );
};

export default Tabs;

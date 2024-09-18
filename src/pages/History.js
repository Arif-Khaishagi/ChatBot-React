import { Box, Typography } from "@mui/material";
import React from "react";
import PastConversation from "../components/PastConversation";

const History = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "ubuntu",
          fontWeight: 400,
          fontSize: "28px",
          p: 2,
        }}
      >
        Conversation History
      </Typography>
      <Typography
        align="left"
        sx={{
          fontFamily: "ubuntu",
          fontWeight: 400,
          fontSize: "20px",
          p: 2,
        }}
      >
        Today's Chats{" "}
      </Typography>
      <PastConversation />
    </Box>
  );
};

export default History;

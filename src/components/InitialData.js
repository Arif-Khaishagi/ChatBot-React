import React from "react";
import SuggestionCard from "../components/SuggestionCard";
import { Box, Typography } from "@mui/material";

import ChatAIBotLogo from "../assets/BotAI_Logo.png";

const intialSuggestions = [
  "Hi, what is the weather",
  "Hi, what is my location?",
  "Hi, how are you",
  "Hi, what is the temperature",
];

const InitialData = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <Typography
          sx={{ fontFamily: "ubuntu", fontWeight: 500, fontSize: "28px" }}
        >
          How Can I Help You Today?
        </Typography>

        <img
          style={{
            borderRadius: "50px",
            boxShadow: "-4px 4px 10px 0px rgba(0, 0, 0, 0.15)",
          }}
          src={ChatAIBotLogo}
          alt="chat ai bot logo"
          width={60}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "row", xs: "column" },
          flexWrap: { sm: "wrap", xs: "nowrap" },
          alignItems: "stretch",
          justifyContent: "center",
          marginBottom: { sm: 6, xs: 2 },
          gap: { sm: 2, xs: 1 },
        }}
      >
        {intialSuggestions.map((item, id) => (
          <SuggestionCard key={id} suggestion={item} />
        ))}
      </Box>
    </>
  );
};

export default InitialData;

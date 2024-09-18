import { Box, Typography } from "@mui/material";
import React from "react";

const SuggestionCard = ({ suggestion }) => {
  return (
    <Box
      sx={{
        background: "var(--color-white)",
        px: { sm: 6, xs: 2 },
        py: { sm: 4, xs: 2 },
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        borderRadius: "5px",
        mx: 2,
        my: 1,
      }}
    >
      <Typography
        align="left"
        sx={{ fontFamily: "ubuntu", fontWeight: 700, fontSize: "20px" }}
      >
        {suggestion}
      </Typography>
      <Typography
        align="left"
        sx={{
          fontWeight: 400,
          fontSize: "16px",
          opacity: 0.5,
          lineHeight: "22px",
        }}
      >
        Get immediate AI generated response
      </Typography>
    </Box>
  );
};

export default SuggestionCard;

import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import StarRatings from "react-star-ratings";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "var(--color-secondary3)",
  boxShadow: 8,
  p: 4,
  borderRadius: "10px",
};

const FeedbackModal = ({
  open,
  handleClose,
  handleSubmit,
  handleFeedback,
  value,
  handleRating,
  rating,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            color: "#000000",
          }}
        >
          <TipsAndUpdatesIcon />
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: 400,
              lineHeight: "30px",
            }}
          >
            Provide Additional Feedback
          </Typography>
        </Box>
        <TextField
          fullWidth
          multiline
          rows={4}
          autoFocus
          color="secondary"
          margin="normal"
          sx={{
            background: "color: #ffffff",
          }}
          value={value}
          onChange={(e) => handleFeedback(e.target.value)}
        />

        <Box
          sx={{
            my: 2,
          }}
        >
          <Typography sx={{ color: "#000000" }}>
            Rate conversation to improve!
          </Typography>
          <StarRatings
            rating={rating}
            starRatedColor="var(--color-primary1)"
            starHoverColor="var(--color-primary2)"
            changeRating={handleRating}
            numberOfStars={5}
            starDimension="20px"
            starSpacing="5px"
            name="rating"
          />
        </Box>
        <Button
          sx={{
            color: "var(--color-black)",
            background: "var(--color-secondary1)",
            fontWeight: 700,
            ":hover": {
              background: "var(--color-primary2)",
            },
            px: 4,
            textTransform: "capitalize",
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default FeedbackModal;

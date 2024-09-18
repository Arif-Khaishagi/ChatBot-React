import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  aiBotResponse,
  askQuestion,
  saveCurrentConversation,
  setResponses,
} from "../redux/chatSlice";

import responseData from "../sampleData.json";
import FeedbackModal from "./FeedbackModal";
import { useNavigate } from "react-router";

const FormInput = () => {
  const [userInput, setUserInput] = useState("");
  const responses = useSelector((state) => state.customizedResponses);
  const conversations = useSelector((state) => state.currentConversation);
  const isTyping = useSelector((state) => state.isTyping);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (userInput.trim()) {
      const response = responses.find(
        (res) => res.question.toLowerCase() === userInput.toLowerCase()
      );
      dispatch(askQuestion(userInput));
      setUserInput("");
      navigate("/");
      setTimeout(() => {
        dispatch(
          aiBotResponse(
            response ? response.response : "I don't undestood that question!"
          )
        );
      }, [2000]);
    }
  };

  useEffect(() => {
    dispatch(setResponses(responseData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Feedback

  const [userFeedback, setUserFeedback] = React.useState("");
  const [userRating, setUserRating] = React.useState(1);

  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleSaveChat = () => {
    dispatch(saveCurrentConversation({ userFeedback, userRating }));
    setModalOpen(false);
    setUserFeedback("");
    setUserRating(1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
        m: 2,
      }}
    >
      <TextField
        fullWidth
        sx={{
          background: "#ffffff",
          borderRadius: "5px",
        }}
        size="small"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Ask something to Bot AI"
      />
      <Button
        sx={{
          color: "var(--color-black)",
          background: "var(--color-secondary1)",
          fontWeight: 700,
          ":hover": {
            background: "var(--color-primary2)",
          },
          textTransform: "capitalize",
        }}
        variant="contained"
        size="medium"
        onClick={handleSubmit}
        disabled={userInput === ""}
      >
        Ask
      </Button>
      <Button
        sx={{
          color: "var(--color-black)",
          background: "var(--color-secondary1)",
          fontWeight: 700,
          ":hover": {
            background: "var(--color-primary2)",
          },
          textTransform: "capitalize",
        }}
        variant="contained"
        size="medium"
        onClick={handleModalOpen}
        disabled={!conversations.length || isTyping}
      >
        Save
      </Button>
      <FeedbackModal
        open={modalOpen}
        handleClose={handleModalClose}
        handleSubmit={handleSaveChat}
        handleFeedback={setUserFeedback}
        value={userFeedback}
        rating={userRating}
        handleRating={setUserRating}
      />
    </Box>
  );
};

export default FormInput;

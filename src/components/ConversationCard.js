import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import UserIamage from "../assets/user.png";
import BotAIIamage from "../assets/BotAI_Logo.png";

import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import { Box, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { messageDisLike, messageLike } from "../redux/chatSlice";

const ConversationCard = ({ type, content, time, id, reaction, readOnly }) => {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(messageLike(id));
  };

  const handleDisLike = () => {
    dispatch(messageDisLike(id));
  };

  return (
    <>
      <CardMedia
        component="img"
        sx={{ width: 120, height: 120, borderRadius: 15, p: 2 }}
        image={type === "question" ? UserIamage : BotAIIamage}
        alt="user"
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography
          component="div"
          sx={{
            fontSize: "16px",
            fontWeight: 700,
            textAlign: "left",
            fontFamily: "ubuntu",
            color: "var(--color-black)",
          }}
        >
          {type === "question" ? "You" : "Soul AI"}
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            textAlign: "left",
            color: "var(--color-black)",
          }}
          component="div"
        >
          {content}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 400,
              textAlign: "left",
              opacity: 0.6,
              mr: 1,
              color: "var(--color-black)",
            }}
            component="div"
          >
            {time}
          </Typography>

          {/* Like-Dislike buttons for feedbacks  */}

          {type === "answer" && reaction === "" && (
            <>
              <IconButton
                onClick={handleLike}
                size="small"
                color="inherit"
                aria-label="menu"
                disabled={readOnly}
              >
                <ThumbUpIcon
                  sx={{
                    height: "16px",
                    width: "16px",
                    color: "var(--color-primary2)",
                  }}
                />
              </IconButton>
              <IconButton
                onClick={handleDisLike}
                size="small"
                color="inherit"
                aria-label="menu"
                disabled={readOnly}
              >
                <ThumbDownIcon
                  sx={{
                    height: "16px",
                    width: "16px",
                    color: "var(--color-primary2)",
                  }}
                />
              </IconButton>
            </>
          )}

          {/* Like reaction  */}

          {type === "answer" && reaction === "like" && (
            <>
              <IconButton
                onClick={handleLike}
                size="small"
                color="inherit"
                aria-label="menu"
                disabled={readOnly}
              >
                <ThumbUpIcon
                  sx={{
                    height: "16px",
                    width: "16px",
                    color: "var(--color-black)",
                  }}
                />
              </IconButton>
            </>
          )}

          {/* DisLike reaction  */}

          {type === "answer" && reaction === "dislike" && (
            <>
              <IconButton
                onClick={handleLike}
                size="small"
                color="inherit"
                aria-label="menu"
                disabled={readOnly}
              >
                <ThumbDownIcon
                  sx={{
                    height: "16px",
                    width: "16px",
                    color: "var(--color-black)",
                  }}
                />
              </IconButton>
            </>
          )}
        </Box>
      </CardContent>
    </>
  );
};

export default ConversationCard;

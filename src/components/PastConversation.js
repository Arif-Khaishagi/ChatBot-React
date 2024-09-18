import React from "react";
import { useSelector } from "react-redux";
import ConversationCard from "./ConversationCard";
import { Box, Card, Typography } from "@mui/material";
import StarRatings from "react-star-ratings";

const PastConversation = () => {
  const pastConversations = useSelector((state) => state.pastConversations);

  return (
    <div>
      {pastConversations.map((item, index) => (
        <Card
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 2,
            marginRight: { sm: 4, xs: 2 },
            my: 3,
            background:
              "linear-gradient(90deg, var(--color-primary1) 0%, var(--color-primary2) 100%)",
            borderRadius: 4,
          }}
        >
          {item.data.map((conversation) => (
            <Card
              sx={{
                display: "flex",
                my: 1,
                background: "none",
                boxShadow: "none",
              }}
              key={conversation.id}
            >
              <ConversationCard
                content={conversation.question}
                time={conversation.time}
                type={conversation.type}
                reaction={conversation.reaction}
                readOnly
              />
            </Card>
          ))}

          {item.feedback && (
            <Typography
              sx={{
                fontSize: "16px",
                textAlign: "left",
                p: 2,
                color: "var(--color-black)",
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  color: "#000000",
                }}
              >
                Feedback:{" "}
              </span>
              {item.feedback}
            </Typography>
          )}
          {item.rating && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  textAlign: "left",
                  p: 2,
                  fontWeight: 700,
                }}
              >
                Rating:
              </Typography>
              <StarRatings
                rating={item.rating}
                starEmptyColor="var(--color-primary2)"
                starRatedColor="var(--color-black)"
                numberOfStars={5}
                starDimension="15px"
                starSpacing="4px"
                name="rating"
              />
            </Box>
          )}
        </Card>
      ))}
    </div>
  );
};

export default PastConversation;

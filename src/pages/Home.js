import React from "react";
import InitialData from "../components/InitialData";
import { useSelector } from "react-redux";
import ConversationCard from "../components/ConversationCard";
import { Card } from "@mui/material";

import { Comment } from "react-loader-spinner";

const Home = () => {
  const convessations = useSelector((state) => state.currentConversation);
  const isTyping = useSelector((state) => state.isTyping);

  return (
    <>
      {convessations.length > 0 ? (
        convessations.map((item) => (
          <Card
            sx={{
              display: "flex",
              marginLeft: 2,
              marginRight: { sm: 4, xs: 2 },
              my: 3,
              background: "var(--color-primary1)",
              borderRadius: 4,
            }}
            key={item.id}
          >
            <ConversationCard
              content={item.question}
              time={item.time}
              type={item.type}
              id={item.id}
              reaction={item.reaction}
            />
          </Card>
        ))
      ) : (
        <InitialData />
      )}
      {isTyping && (
        <Comment
          visible={true}
          height="40"
          width="80"
          ariaLabel="comment-loading"
          wrapperStyle={{}}
          wrapperClass="comment-wrapper"
          color="#ffffff"
          backgroundColor="var(--color-primary1)"
        />
      )}
    </>
  );
};

export default Home;

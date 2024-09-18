import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentConversation: [],
  pastConversations: [
    {
      data: [
        {
          type: "question",
          id: 10,
          question: "Hello! How are you?",
          time: new Date().toLocaleTimeString(),
        },

        {
          type: "answer",
          id: 11,
          question: "I am Good.",
          time: new Date().toLocaleTimeString(),
          reaction: "like",
        },
        {
          type: "question",
          id: 15,
          question: "What are you doing?",
          time: new Date().toLocaleTimeString(),
        },
        {
          type: "answer",
          id: 19,
          question: "Just listning song",
          time: new Date().toLocaleTimeString(),
          reaction: "like",
        },
      ],
      feedback: "Excellent! Thank you",
      rating: 4,
    },
    {
      data: [
        {
          type: "question",
          id: 10,
          question: "Hi! Can you help me out here",
          time: new Date().toLocaleTimeString(),
        },

        {
          type: "answer",
          id: 11,
          question: "As a AI language model. I can not help you out.",
          time: new Date().toLocaleTimeString(),
          reaction: "dislike",
        },
      ],
      feedback: "Bad!",
      rating: 1,
    },
  ],
  customizedResponses: [],
  isTyping: false,
};

const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    setResponses(state, action) {
      state.customizedResponses = action.payload;
    },
    askQuestion(state, action) {
      state.isTyping = true;
      state.currentConversation.push({
        type: "question",
        id: state.currentConversation.length + 1,
        question: action.payload,
        time: new Date().toLocaleTimeString(),
      });
    },
    aiBotResponse(state, action) {
      state.currentConversation.push({
        type: "answer",
        id: state.currentConversation.length + 1,
        question: action.payload,
        time: new Date().toLocaleTimeString(),
        reaction: "",
      });
      state.isTyping = false;
    },
    saveCurrentConversation(state, action) {
      state.pastConversations = [
        ...state.pastConversations,
        {
          data: state.currentConversation,
          feedback: action.payload.userFeedback,
          rating: action.payload.userRating,
        },
      ];
      state.currentConversation = [];
    },
    newChat(state, action) {
      state.currentConversation = [];
    },
    messageLike(state, action) {
      state.currentConversation[action.payload - 1] = {
        ...state.currentConversation[action.payload - 1],
        reaction: "like",
      };
    },
    messageDisLike(state, action) {
      state.currentConversation[action.payload - 1] = {
        ...state.currentConversation[action.payload - 1],
        reaction: "dislike",
      };
    },
  },
});

export const {
  askQuestion,
  setResponses,
  aiBotResponse,
  saveCurrentConversation,
  newChat,
  messageLike,
  messageDisLike,
} = chatSlice.actions;

export default chatSlice.reducer;

import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../components/BotAvatar";
const botName = "Ginny";

const config = {
  // Defines the chatbot name
  botName: botName,
  initialMessages: [createChatBotMessage(`Hi, I am ${botName}. How may I help? `)],
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props}/>,
  },
  customStyles: {
    // Overrides the chatbot message styles
    botMessageBox: {
      backgroundColor: "blue",
    },
    // Overrides the chat button styles
    chatButton: {
      backgroundColor: "navy",
    },
  }
}

export default config
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../components/BotAvatar";
import Options from "../Options/Options";
import L2MyInternet from "../questions-L2/L2MyInternet";
import L2SkyPro from "../questions-L2/L2SkyPro";
const botName = "Ginny";

const config = {
  // Defines the chatbot name
  botName: botName,
  initialMessages: [createChatBotMessage(`Welcome I am ${botName}. How may I assist you? `), createChatBotMessage(`Please selct the service you are looking for`,{
    widget: 'options'
  })],
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
  },
  widgets: [
    {
      // defines the name you will use to reference to this widget in "createChatBotMessage".
      widgetName: 'options',
      // Function that will be called internally to resolve the widget
      widgetFunc: (props) => <Options {...props}/>,
      // Any props you want the widget to receive on render
      props: {},
      // Any piece of state defined in the state object that you want to pass down to this widget
      // mapStateToProps: ['selectedFlightId', 'selectedFlight'],
    },
    {
      widgetName: 'level2MI',
      widgetFunc: (props)=><L2MyInternet {...props}/>,
      props:{}
    },
    {
      widgetName: 'level2SP',
      widgetFunc: (props)=><L2SkyPro {...props}/>,
      props:{}   
    },
    
  ], 
}

export default config
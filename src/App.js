import React from 'react'
import Chatbot from 'react-chatbot-kit'
import './App.css'
import config from './cofigs/Config';
import MessageParser from './chabot/MessageParser';
import ActionProvider from './chabot/ActionProvider';


function App() {
  return (
   <>
   <div className="container">
    
   Hello
    <div style={{maxWidth: '300px'}}>
      
    <Chatbot
    config={config}
    messageParser={MessageParser}
    actionProvider={ActionProvider}/>
    </div>
   
   </div>
   </>
  );
}

export default App;

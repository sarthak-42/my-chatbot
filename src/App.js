import React from 'react'
import Chatbot from 'react-chatbot-kit'
import './App.css'
import config from './cofigs/Config';
import MessageParser from './chabot/MessageParser';
import ActionProvider from './chabot/ActionProvider';


function App() {
  return (
   <>
   <div className="container ">
    
   Hello
    <header className='shadow p-3 mb-5 bg-body-tertiary rounded'>
      
    <Chatbot
    config={config}
    messageParser={MessageParser}
    actionProvider={ActionProvider}/>
    </header>
   
   </div>
   </>
  );
}

export default App;

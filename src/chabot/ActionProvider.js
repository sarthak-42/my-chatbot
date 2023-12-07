class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc
     
    
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
    
   }
   handleHello= ()=>{
    // console.log('Handleing hello')
    const message = this.createChatBotMessage('Hello I am here to assist!')
    this.setChatbotMessage(message)
   }

   handleNoData = ()=>{
    // console.log('Handling no data')
    const message = this.createChatBotMessage('Sorry I have no Information about this, You can contact our executive on 123553231')
    this.setChatbotMessage(message)
   };
   handlePackageInfo= () => {
    // console.log('handling package info')
    const message = this.createChatBotMessage('Here are a few packages provided by SkyPro');
    this.setChatbotMessage(message);
  };
   handleLanguageInfo= ()=>{
    // console.log('handleing language')
    const message = this.createChatBotMessage('We Provide channels in following languages')
    this.setChatbotMessage(message)
   };
   handleSupportInfo= ()=>{
    // console.log('handling support info')
    const message = this.createChatBotMessage('You can connect with the following contact for support')
    this.setChatbotMessage(message)
   };
   
  
   setChatbotMessage = (message)=>{
    this.setState(state =>({...state, messages:[...state.messages, message]}))
   }
}

 
 export default ActionProvider;
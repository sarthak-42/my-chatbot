class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    //   console.log(message)

    const lowercase = message.toLowerCase();

       if (lowercase.includes("hello" )||lowercase.includes("hi" ) ||lowercase.includes("hey" )|| lowercase.includes("hii" ) || lowercase.includes("hola" )) {
      // Hello
      this.actionProvider.handleHello();
    } else if (lowercase.includes("packages")|| lowercase.includes("package") ){
      // packages
      this.actionProvider.handlePackageInfo();
    } else if (lowercase.includes("languages")||lowercase.includes("language")) {
      // Languages
      this.actionProvider.handleLanguageInfo();
    } else if (lowercase.includes("support")||lowercase.includes("customer care")) {
      this.actionProvider.handleSupportInfo();
      // Support
    } else if (lowercase.includes('my internet')|| lowercase.includes('my-internet')){
      this.actionProvider.handleMyInternet();
    } else if(lowercase.includes('skypro')|| lowercase.includes('sky pro') || lowercase.includes('sky-pro')){
      this.actionProvider.handleSkyPro();
    } else if (lowercase.includes('') || lowercase.includes(' ')){
      this.actionProvider.handleEmpty();
    }
     else {
      this.actionProvider.handleNoData();

      // No Data
    }
  }
}

export default MessageParser;

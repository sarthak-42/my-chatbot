class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    //   console.log(message)

    const lowercase = message.toLowerCase();

       if (lowercase.includes("hello")) {
      // Hello
      this.actionProvider.handleHello();
    } else if (lowercase.includes("packages")) {
      // packages
      this.actionProvider.handlePackageInfo();
    } else if (lowercase.includes("languages")) {
      // Languages
      this.actionProvider.handleLanguageInfo();
    } else if (lowercase.includes("support")) {
      this.actionProvider.handleSupportInfo();
      // Support
    } else {
      this.actionProvider.handleNoData();

      // No Data
    }
  }
}

export default MessageParser;

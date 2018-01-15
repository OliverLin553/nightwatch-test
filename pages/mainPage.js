const timeout = 1000;

const mainCommands = {
  pageTest: function () {
      this.waitForElementPresent('body', timeout)
      .setValue('@inputText', 'iphoneX');
      this.api.pause(timeout);
      this.click('@inputBtn');
      this.api.pause(timeout);
  }
}

module.exports = {//use elements
  url: function() {
    return this.api.launchUrl;
  },
  commands: [mainCommands],
  elements: {
    inputText: {
      selector: '#search-2014 input[type=text]'
    },
    inputBtn: {
      selector: '#search-2014 button'
    }
  }
}
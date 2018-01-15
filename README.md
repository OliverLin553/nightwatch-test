# nightwatch-test

## Setup

1. If you haven't done so already, install nightwatch.js and mochawesome.js globally by running `npm install -g nightwatch mochawesome`. This assumes you have already installed node.js
2. Download the latest version of the selenium-server-standalone-{VERSION}.jar file from the Selenium downloads page (https://mvnrepository.com/artifact/org.seleniumhq.selenium/selenium-java) and place it in the following directory: /usr/local/bin/
3. To run tests in Chrome, dowload chromedriver (https://github.com/nightwatchjs/nightwatch/wiki/Chrome-Setup), and place the driver in the same directory as the Selenium jar file
3. To run tests in Firefox, download geckodriver (https://github.com/mozilla/geckodriver/releases), which is required for driving browsers with newer versions of Selenium, and place it in the same directory as the Selenium jar file
4. Optional: Download phantomjs (http://phantomjs.org/), a headless browser used for lightweight testing, and place it in the same directory as the selenium jar file
   - Phantomjs, if configured as the test browser for nightwatch, will allow you to run tests in a headless environment, decreasing some load time
5. Download and install Firefox and Chrome for Mac. The latests versions are recommended for compatibilty with Selenium 3.0.0 +
6. Clone down the nightwatch-test repo

## Test Execution
nightwatch
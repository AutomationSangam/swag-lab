# swag-lab
E2E WebdriverIO Test Suite for Sauce Demo Website.
# Basic information- 
This Project has been created using WebdriverIO and scripting language is TypeScript. 
This is designed using Page Object Model where for each page a seperate locator class has been created which helps in maintaining locator.
To Write the Test i have used Mocha as Test Framework which gives flexibility and capability to write independent Tests. For Assertion i have used Expect library provided by Webdriverio.Using default Spec report provided by Webdriverio.

There are some print statements mentioned in tests to let evaluator know some important variable values. In real time i would be printing/mentioning this values in my Report.

## Steps to Run This Project
minimum requirement- ```Node.js Version>=16```
1. Run ```npm i``` command, it will install all required dependancy for this project.
2. Just run ```npm run wdio``` command and you will see the excution started.
3. After Execution in the console you will see the Spec Report.

Also Attaching the result of tests execution on my system.

![result](/assets/result.png)
[![tested with webdriver.io](https://img.shields.io/badge/tested%20with-webdriver.io-%23ea5906)](https://webdriver.io/)
<a href="https://webdriver.io/">
    <img alt="WebdriverIO" src="https://img.shields.io/badge/tested%20with-webdriver.io-%23ea5906">
</a>
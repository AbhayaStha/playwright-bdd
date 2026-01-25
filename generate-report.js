const reporter = require('cucumber-html-reporter');
const path = require('path');

const options = {
  theme: 'bootstrap',
  jsonFile: path.join(__dirname, 'reports', 'cucumber-report.json'),
  output: path.join(__dirname, 'reports', 'cucumber-report.html'),
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "Tested By": "Abhaya Shrestha",
    "Test Environment": "Playwright + TypeScript",
    "Platform": process.platform,
    "Executed": new Date().toLocaleString()
  }
};

reporter.generate(options);

const reporter = require('cucumber-html-reporter');
const path = require('path');

const options = {
  theme: 'bootstrap',
  jsonFile: path.join(__dirname, 'reports', 'cucumber-report.json'),
  output: path.join(__dirname, 'reports', 'cucumber-report.html'),
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "Test Environment": "Playwright + TypeScript",
    "Platform": process.platform,
    "Executed": "Local"
  }
};

reporter.generate(options);

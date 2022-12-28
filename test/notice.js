const { showNotice } = require("../logs/npm-notice");

showNotice({
  notices: [
    "Creating file package.json",
    "Creating file index.js",
    "Installing packages: npm install",
    "Setting up...",
  ],
  summary: [
    "The latest instructions for creating a new app can be found here:",
    "https://portfolio-generator.cybersaksham.co.in/docs/getting-started/",
  ],
});

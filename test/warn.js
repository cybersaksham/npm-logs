const { showWarning } = require("../logs/npm-warn");

showWarning({
  warnings: [
    "You are running `portfolio-generator` 4.0.0, which is behind the latest release (4.1.0).",
    "",
    "We recommend always using the latest version of portfolio-generator if possible.",
  ],
  summary: [
    "The latest instructions for creating a new app can be found here:",
    "https://create-react-app.dev/docs/getting-started/",
  ],
});

const { showError } = require("./logs/npm-error");
const { showWarning } = require("./logs/npm-warn");
const { showNotice } = require("./logs/npm-notice");
const { showProgress, showMultipleProgress } = require("./logs/npm-downlaod");

module.exports = {
  showError,
  showWarning,
  showNotice,
  showProgress,
  showMultipleProgress,
};

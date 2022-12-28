const { showMultipleProgress } = require("../logs/npm-downlaod");
const path = require("path");

showMultipleProgress([
  {
    source: "https://sabnzbd.org/tests/internetspeed/20MB.bin",
    destination: path.join(__dirname, "/20mb_1.bin"),
  },
  {
    source: "https://sabnzbd.org/tests/internetspeed/20MB.bin",
    destination: path.join(__dirname, "/20mb_2.bin"),
  },
  {
    source: "https://sabnzbd.org/tests/internetspeed/20MB.bin",
    destination: path.join(__dirname, "/20mb_3.bin"),
  },
]);

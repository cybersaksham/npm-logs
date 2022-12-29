const { showMultipleProgress } = require("../logs/npm-downlaod");
const path = require("path");

let list = [];
for (let i = 0; i < 8; i++) {
  list.push({
    source: "https://sabnzbd.org/tests/internetspeed/20MB.bin",
    destination: path.join(__dirname, `/20mb_${i + 1}.bin`),
  });
}

showMultipleProgress(list, 6);

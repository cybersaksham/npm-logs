const chalk = require("chalk");

const print = (...statements) => {
  let finalList = [
    chalk.white.bgBlack("npm"),
    chalk.blue.bgBlack("notice!"),
    ...statements,
  ];
  console.log(finalList.join(" "));
};

const showNotice = ({ notices = [], summary = [] }) => {
  notices.forEach((note) => {
    print(note);
  });
  if (summary.length > 0) {
    console.log();
    summary.forEach((log) => {
      print(log);
    });
  }
};

module.exports = { showNotice };

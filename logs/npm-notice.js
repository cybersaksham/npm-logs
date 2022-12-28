const chalk = require("chalk");

const print = (...statements) => {
  let finalList = [
    chalk.white.bgBlack("npm"),
    chalk.cyan.bgBlack("notice!"),
    ...statements,
  ];
  console.log(finalList.join(" "));
};

module.exports.showNotice = ({ notices = [], summary = [] } = {}) => {
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
